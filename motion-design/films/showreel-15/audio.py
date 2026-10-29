"""showreel-15 sound: Mixkit #190 (120 BPM) from 12.015 s so its drop (song 16.015 s) lands on the flood at film
4.0 s, plus synthesized SFX on the film's exact times. Fade the tail, two-pass loudnorm to -14 LUFS / TP -1.
"""
import json, subprocess
from pathlib import Path
import numpy as np
import imageio_ffmpeg

HERE = Path(__file__).parent; ROOT = HERE.parent.parent
FF, SR, T = imageio_ffmpeg.get_ffmpeg_exe(), 48000, 15.0
N = int(T * SR); START = 16.015 - 4.0


def load(p):
    raw = subprocess.run([FF, "-v", "quiet", "-i", str(p), "-ac", "2", "-ar", str(SR), "-f", "f32le", "-"], capture_output=True, check=True).stdout
    return np.frombuffer(raw, np.float32).reshape(-1, 2).copy()


music = load(ROOT / "audio/mixkit-190.mp3")[int(START * SR):][:N].copy() * 0.8
fi = int(.03 * SR); music[:fi] *= np.linspace(0, 1, fi)[:, None]
rng = np.random.default_rng(190)


def tone(f0, f1, dur, decay, noise=0.0, attack=.0015):
    t = np.arange(int(dur * SR)) / SR
    ph = 2 * np.pi * np.cumsum(np.geomspace(f0, f1, len(t))) / SR
    s = np.sin(ph) + noise * rng.standard_normal(len(t))
    return s * np.exp(-t / decay) * np.minimum(1, t / attack)


def riser(dur):  # windowed noise, brightening (one-pole low-pass with a rising cutoff), into the drop
    n = int(dur * SR); x = rng.standard_normal(n); y = np.zeros(n); a = 0.0
    cut = np.geomspace(.01, .5, n)
    for i in range(n): a += cut[i] * (x[i] - a); y[i] = a
    return y * np.linspace(0, 1, n) ** 2.2


SFX = dict(
    thud=tone(160, 60, .35, .07), tick=tone(3000, 2500, .03, .004, .2), soft=tone(1300, 1000, .08, .015, .05),
    hit=tone(110, 45, .7, .16), pop=tone(500, 900, .09, .02), key=tone(2400, 2000, .025, .004, .4),
    roll=tone(2200, 1800, .02, .003, .3), riser=riser(.55),
)
mix = np.zeros(N)


def put(t, name, g):
    s = SFX[name]; i0 = int(round(t * SR))
    lo, hi = max(0, i0), min(N, i0 + len(s))
    if hi > lo: mix[lo:hi] += s[lo - i0:hi - i0] * g


put(.26, "thud", .5)                                        # square lands on the rule
for k, tk in enumerate((.5, 1.0, 1.5)): put(tk + .02, "soft", .22)   # each headline word
put(3.45, "riser", .35)                                     # flood grows into the drop (song drop at 4.0)
put(4.0, "hit", .55)
for k in range(3): put(4.0 + k * .25, "soft", .2)           # "Îți spunem / dacă are / sens."
put(5.55, "pop", .18)                                       # orange contracts into the thumb


def months(t):  # same drag as the HTML (bez .6 0 .2 1 over 6.45-7.45)
    cx = 3 * .6; bx = 3 * (.2 - .6) - cx; ax = 1 - cx - bx; cy = 0; by = 3 * 1 - cy; ay = 1 - cy - by
    x = min(1, max(0, (t - 6.45) / 1.0))
    if x in (0, 1): return 24 + 36 * x
    lo, hi = 0.0, 1.0
    for _ in range(40):
        s = (lo + hi) / 2
        if ((ax * s + bx) * s + cx) * s < x: lo = s
        else: hi = s
    return 24 + 36 * (((ay * s + by) * s + cy) * s)


prev = 24
for f in range(int(6.4 * 60), int(7.6 * 60)):
    m = round(months(f / 60))
    if m != prev:
        put(f / 60, "tick", .12)
        if m % 12 == 0: put(f / 60, "soft", .2)
        prev = m
for tk in (8.5, 8.75, 9.0, 9.25):                             # stats land
    put(tk, "pop", .16)
    for k in range(5): put(tk + .03 + k * .045, "roll", .06)  # odometer clicks
for k in range(7):                                          # slot passes each word, last one lands on "succes."
    tk = 10.7 + 1.3 * (k / 6) ** .55
    put(tk, "roll" if k < 6 else "soft", .1 if k < 6 else .3)
put(12.0, "pop", .2)
put(12.95, "hit", .32)                                      # logo opens
for i in range(14): put(13.45 + i * .032, "key", .07)       # idealcredit.md types in

stereo = music + mix[:, None]
f0 = int(14.2 * SR); stereo[f0:] *= (np.linspace(1, 0, N - f0) ** 1.4)[:, None]
out = HERE / "out"; out.mkdir(exist_ok=True); rawp = out / "raw.wav"
subprocess.run([FF, "-v", "error", "-y", "-f", "f32le", "-ar", str(SR), "-ac", "2", "-i", "-", str(rawp)], input=stereo.astype(np.float32).tobytes(), check=True)
m = subprocess.run([FF, "-hide_banner", "-i", str(rawp), "-af", "loudnorm=I=-14:TP=-1:LRA=11:print_format=json", "-f", "null", "-"], capture_output=True, text=True).stderr
j = json.loads(m[m.rindex("{"):m.rindex("}") + 1])
af = (f"loudnorm=I=-14:TP=-1:LRA=11:measured_I={j['input_i']}:measured_TP={j['input_tp']}:measured_LRA={j['input_lra']}"
      f":measured_thresh={j['input_thresh']}:offset={j['target_offset']}:linear=true")
subprocess.run([FF, "-v", "error", "-y", "-i", str(rawp), "-af", af, "-ar", str(SR), str(out / "audio.wav")], check=True)
m = subprocess.run([FF, "-hide_banner", "-i", str(out / "audio.wav"), "-af", "loudnorm=print_format=json", "-f", "null", "-"], capture_output=True, text=True).stderr
j = json.loads(m[m.rindex("{"):m.rindex("}") + 1])
print("audio ->", out / "audio.wav", "| integrated", j["input_i"], "LUFS, TP", j["input_tp"])
