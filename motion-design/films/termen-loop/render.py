"""termen-loop renderer (10 s loop, 60 fps).
probe t1 t2 ...      -> probe/sheet.png (4:5)
full [45|916]        -> 2x supersampled frames, Lanczos down, 1 sample per frame (fastest move ~6 px/frame,
                        text must stay sharp) -> out/termen-loop-<fmt>-silent.mp4
mux [45|916]         -> + out/audio.wav -> out/termen-loop-<fmt>.mp4 (TV-range BT.709)
pops [45|916] / loop [45|916]
Serve first:  python3 -m http.server 8768 --directory motion-design   (from the repo root)
"""
import asyncio, shutil, subprocess, sys
from pathlib import Path
import numpy as np
import imageio_ffmpeg
from playwright.async_api import async_playwright

HERE = Path(__file__).parent
FF = imageio_ffmpeg.get_ffmpeg_exe()
URL = "http://localhost:8768/films/termen-loop/termen-loop.html?render=1"
FPS, T = 60, 10.0
SIZE = {"45": (1080, 1350), "916": (1080, 1920)}
ARGS = ["--force-color-profile=srgb", "--font-render-hinting=none", "--disable-threaded-animation",
        "--run-all-compositor-stages-before-draw", "--disable-checker-imaging"]


async def open_page(p, fmt):
    w, h = SIZE[fmt]
    b = await p.chromium.launch(args=ARGS)
    pg = await b.new_page(viewport={"width": w, "height": h}, device_scale_factor=2)
    errs = []
    pg.on("pageerror", lambda e: errs.append(str(e)))
    pg.on("console", lambda m: errs.append("console: " + m.text) if m.type in ("error", "warning") else None)
    await pg.goto(URL + f"&fmt={fmt}")
    await pg.wait_for_function("window.ready === true", timeout=60000)
    await pg.evaluate("document.fonts.ready")
    await pg.add_style_tag(content="*,*::before,*::after{transition:none!important}")
    await pg.evaluate("document.getAnimations().forEach(a => a.pause())")
    return b, pg, errs


async def shot(pg, t, path, fmt="png"):
    await pg.evaluate(f"window.seek({t})")
    await pg.evaluate("new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)))")
    el = await pg.query_selector("#stage")
    await el.screenshot(path=str(path), type=fmt, **({"quality": 96} if fmt == "jpeg" else {}))


async def probe(times, fmt="45"):
    out = HERE / "probe"; shutil.rmtree(out, ignore_errors=True); out.mkdir()
    async with async_playwright() as p:
        b, pg, errs = await open_page(p, fmt)
        for i, t in enumerate(times): await shot(pg, t, out / f"p_{i:02d}.png")
        await b.close()
    if errs: print("PAGE ERRORS:", errs[:8])
    cols = 4; rows = -(-len(times) // cols)
    subprocess.run([FF, "-v", "error", "-y", "-i", str(out / "p_%02d.png"), "-vf",
                    f"scale=540:-1:flags=lanczos,tile={cols}x{rows}:padding=8:color=black", "-frames:v", "1", str(out / "sheet.png")], check=True)
    print("probe ->", out / "sheet.png")


async def full(fmt):
    w, h = SIZE[fmt]
    sub = HERE / f"sub_{fmt}"; shutil.rmtree(sub, ignore_errors=True); sub.mkdir()
    n = int(round(T * FPS))
    async with async_playwright() as p:
        b, pg, errs = await open_page(p, fmt)
        for i in range(n):
            await shot(pg, i / FPS, sub / f"f_{i:05d}.jpg", "jpeg")
            if i % 120 == 0: print(f"{fmt} frame {i}/{n}", flush=True)
        await b.close()
    if errs: print("PAGE ERRORS:", errs[:8])
    (HERE / "out").mkdir(exist_ok=True)
    dst = HERE / f"out/termen-loop-{fmt}-silent.mp4"
    subprocess.run([FF, "-v", "error", "-y", "-framerate", str(FPS), "-i", str(sub / "f_%05d.jpg"),
                    "-vf", f"scale={w}:{h}:flags=lanczos,scale=in_range=pc:out_range=tv:out_color_matrix=bt709,format=yuv420p",
                    "-color_range", "tv", "-colorspace", "bt709", "-color_primaries", "bt709", "-color_trc", "bt709",
                    "-c:v", "libx264", "-crf", "16", "-preset", "slow", str(dst)], check=True)
    print("video ->", dst)


def mux(fmt):
    src, dst = HERE / f"out/termen-loop-{fmt}-silent.mp4", HERE / f"out/termen-loop-{fmt}.mp4"
    subprocess.run([FF, "-v", "error", "-y", "-i", str(src), "-i", str(HERE / "out/audio.wav"), "-map", "0:v", "-map", "1:a",
                    "-c:v", "copy", "-c:a", "aac", "-b:a", "256k", "-movflags", "+faststart", str(dst)], check=True)
    n = subprocess.run([FF, "-i", str(dst), "-map", "0:v", "-f", "null", "-"], capture_output=True, text=True).stderr
    print("final ->", dst, "|", [l for l in n.splitlines() if l.startswith("frame=")][-1:])


def frames_gray(path, size=180):
    raw = subprocess.run([FF, "-v", "quiet", "-i", str(path), "-vf", f"scale={size}:{size},format=gray", "-f", "rawvideo", "-"],
                         capture_output=True, check=True).stdout
    return np.frombuffer(raw, np.uint8).reshape(-1, size, size).astype(np.float32)


def pops(fmt):
    fr = frames_gray(HERE / f"out/termen-loop-{fmt}-silent.mp4")
    d = np.abs(np.diff(fr, axis=0)).mean(axis=(1, 2))
    hits = [(i + 1, round((i + 1) / FPS, 3), round(float(d[i]), 2)) for i in range(1, len(d) - 1)
            if d[i] > 3 * max(d[i - 1], d[i + 1], 0.3) and d[i] > 2.0]
    print("pops:", hits or "none")
    seam = np.abs(fr[-1] - fr[0]).mean()
    vin, vout = np.abs(fr[-1] - fr[-2]).mean(), np.abs(fr[1] - fr[0]).mean()
    print(f"loop seam diff {seam:.3f} · velocity in {vin:.3f} / out {vout:.3f}")


if __name__ == "__main__":
    cmd, rest = sys.argv[1], sys.argv[2:]
    if cmd == "probe": asyncio.run(probe([float(x) for x in rest]))
    elif cmd == "full": asyncio.run(full(rest[0] if rest else "45"))
    elif cmd == "mux": mux(rest[0] if rest else "45")
    elif cmd in ("pops", "loop"): pops(rest[0] if rest else "45")
