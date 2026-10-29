"""termen-loop sound (10 s loop, muted-first): 100 % synthesized SFX on the film's exact timeline.
- a soft detent tick on every month change while the slider moves (same easing as the HTML)
- a deeper tick on each full year (36/48/60 going up, 48/36/24 coming back)
- one soft low hit when +20.490 MDL lands, a faint high tick for its label
Tails past T wrap to the start so the loop has no audio seam. Peak-normalised (SFX only: -14 LUFS would make
sparse clicks harsh), then measured and printed.
"""
import json, subprocess
from pathlib import Path
import numpy as np
import imageio_ffmpeg

HERE = Path(__file__).parent
FF, SR, T = imageio_ffmpeg.get_ffmpeg_exe(), 48000, 10.0
N = int(T * SR)
GO, GO_END, BACK, BACK_END = 0.8, 3.6, 8.15, 9.4
LAB_IN, NUM_IN = 3.75, 3.95


def bez(x1, y1, x2, y2):
    cx = 3 * x1; bx = 3 * (x2 - x1) - cx; ax = 1 - cx - bx
    cy = 3 * y1; by = 3 * (y2 - y1) - cy; ay = 1 - cy - by
    def f(x):
        if x <= 0: return 0.0
        if x >= 1: return 1.0
        lo, hi = 0.0, 1.0
        for _ in range(40):
            s = (lo + hi) / 2
            if ((ax * s + bx) * s + cx) * s < x: lo = s
            else: hi = s
        return ((ay * s + by) * s + cy) * s
    return f


drag, back = bez(.6, 0, .2, 1), bez(.5, 0, .15, 1)
prog = lambda t, a, b: min(1, max(0, (t - a) / (b - a)))


def months(t):
    if GO <= t < BACK: return 24 + 36 * drag(prog(t, GO, GO_END))
    if t >= BACK: return 60 - 36 * back(prog(t, BACK, BACK_END))
    return 24.0


def tone(f0, f1, dur, decay, noise=0.0):
    t = np.arange(int(dur * SR)) / SR
    ph = 2 * np.pi * np.cumsum(np.linspace(f0, f1, len(t))) / SR
    s = np.sin(ph) + noise * np.random.default_rng(7).standard_normal(len(t))
    env = np.exp(-t / decay) * np.minimum(1, t / 0.0015)
    return s * env


TICK = tone(3200, 2600, 0.03, 0.004, 0.25)
YEAR = tone(1400, 1100, 0.08, 0.012, 0.1)
HIT = tone(150, 70, 0.6, 0.12); HIT[:7200] += 0.25 * tone(600, 300, 0.15, 0.03)
LAB = tone(4200, 3800, 0.03, 0.005)

mix = np.zeros(N)
def put(t, s, g):
    i0 = int(round(t * SR))
    idx = (np.arange(len(s)) + i0) % N  # tails wrap into the loop start
    np.add.at(mix, idx, s * g)

prev = round(months(0))
for f in range(1, int(T * 60)):
    t = f / 60; m = round(months(t))
    if m != prev:
        up = m > prev
        g = 0.10 if up else 0.07
        put(t, TICK, g)
        if m % 12 == 0: put(t, YEAR, 0.22 if up else 0.16)
        prev = m
put(LAB_IN + 0.05, LAB, 0.06)
put(NUM_IN + 0.06, HIT, 0.55)

mix = mix / np.abs(mix).max() * 10 ** (-3 / 20)
stereo = np.repeat(mix[:, None], 2, axis=1).astype(np.float32)
out = HERE / "out"; out.mkdir(exist_ok=True)
subprocess.run([FF, "-v", "error", "-y", "-f", "f32le", "-ar", str(SR), "-ac", "2", "-i", "-", str(out / "audio.wav")],
               input=stereo.tobytes(), check=True)
m = subprocess.run([FF, "-hide_banner", "-i", str(out / "audio.wav"), "-af", "loudnorm=print_format=json", "-f", "null", "-"],
                   capture_output=True, text=True).stderr
j = json.loads(m[m.rindex("{"):m.rindex("}") + 1])
print("audio ->", out / "audio.wav", "| integrated", j["input_i"], "LUFS, true peak", j["input_tp"], "dBTP")
