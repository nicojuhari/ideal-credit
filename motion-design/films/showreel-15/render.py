"""showreel-15 renderer (15 s, 1080x1350, 60 fps).
probe t1 t2 ...      -> probe/sheet.png
frames a b           -> frames [a, b) into sub/ (2x supersampled; SUB subframes on a 180 deg shutter only inside FAST
                        windows, 1 sample elsewhere so static type stays razor sharp)
full                 -> 3 parallel `frames` chunks, then encode -> out/showreel-15-silent.mp4
encode / mux / pops
Serve first:  python3 -m http.server 8768 --directory motion-design   (from the repo root)
"""
import asyncio, shutil, subprocess, sys
from pathlib import Path
import numpy as np
import imageio_ffmpeg
from PIL import Image
from playwright.async_api import async_playwright

HERE = Path(__file__).parent
FF = imageio_ffmpeg.get_ffmpeg_exe()
URL = "http://localhost:8768/films/showreel-15/showreel-15.html?render=1"
FPS, T, W, H = 60, 15.0, 1080, 1350
NF = int(T * FPS)
SUB, SHUTTER = 6, 0.5
# fast moves that earn motion blur: fall, flood, contraction, stat rolls, slot roll, eye-opening
FAST = [(0.0, 0.35), (3.6, 4.02), (5.55, 6.0), (8.45, 9.6), (10.75, 11.9), (12.95, 13.2)]
CUTS = [4.0]  # the flood completes on the drop: never blend across it
ARGS = ["--force-color-profile=srgb", "--font-render-hinting=none", "--disable-threaded-animation",
        "--run-all-compositor-stages-before-draw", "--disable-checker-imaging"]
SUBDIR = HERE / "sub"


async def open_page(p):
    b = await p.chromium.launch(args=ARGS)
    pg = await b.new_page(viewport={"width": W, "height": H}, device_scale_factor=2)
    errs = []
    pg.on("pageerror", lambda e: errs.append(str(e)))
    pg.on("console", lambda m: errs.append("console: " + m.text) if m.type in ("error", "warning") else None)
    await pg.goto(URL)
    await pg.wait_for_function("window.ready === true", timeout=60000)
    await pg.add_style_tag(content="*,*::before,*::after{transition:none!important}")
    await pg.evaluate("document.getAnimations().forEach(a => a.pause())")
    return b, pg, errs


async def grab(pg, t):
    await pg.evaluate(f"window.seek({t})")
    await pg.evaluate("new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)))")
    el = await pg.query_selector("#stage")
    from io import BytesIO
    return Image.open(BytesIO(await el.screenshot(type="png"))).convert("RGB")


def times_for(i):
    tc = i / FPS
    if not any(a <= tc < b for a, b in FAST): return [tc]
    ts = []
    for j in range(SUB):
        t = tc + (j - (SUB - 1) / 2) * SHUTTER / (FPS * SUB)
        for c in CUTS:
            if (t < c) != (tc < c): t = c if tc >= c else c - 1e-4
        ts.append(min(T - 1e-3, max(0.0, t)))
    return ts


async def frames(a, b):
    SUBDIR.mkdir(exist_ok=True)
    async with async_playwright() as p:
        br, pg, errs = await open_page(p)
        for i in range(a, b):
            imgs = [np.asarray(await grab(pg, t), np.float32) for t in times_for(i)]
            img = Image.fromarray(np.clip(sum(imgs) / len(imgs) + .5, 0, 255).astype(np.uint8))
            img.resize((W, H), Image.LANCZOS).save(SUBDIR / f"f_{i:05d}.png", compress_level=1)
            if (i - a) % 60 == 0: print(f"[{a}-{b}] {i}", flush=True)
        await br.close()
    if errs: print("PAGE ERRORS:", errs[:8])


async def probe(times):
    out = HERE / "probe"; shutil.rmtree(out, ignore_errors=True); out.mkdir()
    async with async_playwright() as p:
        br, pg, errs = await open_page(p)
        for k, t in enumerate(times): (await grab(pg, t)).resize((W, H), Image.LANCZOS).save(out / f"p_{k:02d}.png")
        await br.close()
    if errs: print("PAGE ERRORS:", errs[:8])
    cols = 5; rows = -(-len(times) // cols)
    subprocess.run([FF, "-v", "error", "-y", "-i", str(out / "p_%02d.png"), "-vf",
                    f"scale=400:-1,tile={cols}x{rows}:padding=6:color=white", "-frames:v", "1", str(out / "sheet.png")], check=True)
    print("probe ->", out / "sheet.png")


def full():
    shutil.rmtree(SUBDIR, ignore_errors=True)
    cuts = [0, 330, 620, NF]  # chunks balanced around the blur-heavy windows
    procs = [subprocess.Popen([sys.executable, str(Path(__file__)), "frames", str(cuts[k]), str(cuts[k + 1])]) for k in range(3)]
    for pr in procs: pr.wait()
    encode()


def encode():
    n = len(list(SUBDIR.glob("f_*.png")))
    assert n == NF, f"frame count {n} != {NF}"
    (HERE / "out").mkdir(exist_ok=True)
    dst = HERE / "out/showreel-15-silent.mp4"
    subprocess.run([FF, "-v", "error", "-y", "-framerate", str(FPS), "-i", str(SUBDIR / "f_%05d.png"),
                    "-vf", "scale=in_range=pc:out_range=tv:out_color_matrix=bt709,format=yuv420p",
                    "-color_range", "tv", "-colorspace", "bt709", "-color_primaries", "bt709", "-color_trc", "bt709",
                    "-c:v", "libx264", "-crf", "16", "-preset", "slow", str(dst)], check=True)
    print("video ->", dst)


def mux():
    src, dst = HERE / "out/showreel-15-silent.mp4", HERE / "out/showreel-15.mp4"
    # poster in frame 0 (X/Slack/Discord/LinkedIn thumbnails ignore the cover): the full headline from 2.2 s
    poster = SUBDIR / f"f_{int(2.2 * FPS):05d}.png"
    subprocess.run([FF, "-v", "error", "-y", "-i", str(src), "-i", str(poster), "-i", str(HERE / "out/audio.wav"),
                    "-filter_complex", "[1:v]scale=in_range=pc:out_range=tv:out_color_matrix=bt709,format=yuv420p[p];"
                    "[0:v][p]overlay=0:0:enable='eq(n,0)',format=yuv420p[v]", "-map", "[v]", "-map", "2:a",
                    "-color_range", "tv", "-colorspace", "bt709", "-color_primaries", "bt709", "-color_trc", "bt709",
                    "-c:v", "libx264", "-crf", "16", "-preset", "slow", "-c:a", "aac", "-b:a", "256k", "-movflags", "+faststart", str(dst)], check=True)
    print("final ->", dst)


def pops():
    raw = subprocess.run([FF, "-v", "quiet", "-i", str(HERE / "out/showreel-15-silent.mp4"), "-vf", "scale=180:180,format=gray",
                          "-f", "rawvideo", "-"], capture_output=True, check=True).stdout
    fr = np.frombuffer(raw, np.uint8).reshape(-1, 180, 180).astype(np.float32)
    d = np.abs(np.diff(fr, axis=0)).mean(axis=(1, 2))
    hits = [(i + 1, round((i + 1) / FPS, 3), round(float(d[i]), 2)) for i in range(1, len(d) - 1)
            if d[i] > 3 * max(d[i - 1], d[i + 1], .3) and d[i] > 2.0]
    print("pops (frame, t, diff):", hits or "none")
    fl = [(n, round(n / FPS, 3)) for n in range(1, len(fr) - 1)
          if min(d[n - 1], d[n]) > 2.0 and np.abs(fr[n + 1] - fr[n - 1]).mean() < .35 * min(d[n - 1], d[n])]
    print("one-frame flashes:", fl or "none")


if __name__ == "__main__":
    cmd, rest = sys.argv[1], sys.argv[2:]
    if cmd == "probe": asyncio.run(probe([float(x) for x in rest]))
    elif cmd == "frames": asyncio.run(frames(int(rest[0]), int(rest[1])))
    elif cmd == "full": full()
    elif cmd == "encode": encode()
    elif cmd == "mux": mux()
    elif cmd == "pops": pops()
