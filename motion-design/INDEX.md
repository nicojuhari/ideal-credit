# Motion films: Ideal Credit

Brand kit: `BRAND.md`. One folder per film in `films/`. Renders (`out/`, `sub_*/`, `probe/`) are gitignored:
re-render with the film's `render.py`.

## termen-loop (2026-10-07)
10 s seamless loop, 1080×1350 (4:5) + 1080×1920 (9:16), 60 fps. Thursday "Sfat practic" (light theme).
Animated version of the post `campaigns/social/2026-09/week-2/02/`: a term slider drags 24 → 60 months, the monthly
payment and the total interest are recomputed live (integer months only, so every figure on screen is a real case),
then "+20.490 MDL" rises in, and the slider returns to 24.
- Final: `films/termen-loop/out/termen-loop-45.mp4`, `termen-loop-916.mp4`
- Sound: synthesized detent ticks per month, deeper tick per year, one soft low hit on the payoff (-23 LUFS, SFX only)
- Reuse: the light "Panou de date" panel in absolute content coordinates, the `@font-face` block (latin + latin-ext),
  the live-formula readouts, the per-glyph masked rise in px (a % offset leaks the smaller "MDL" unit), the 9:16
  layout (same 4:5 canvas centred, top +285 px), `render.py` (2× supersample, Lanczos down, 1 sample per frame).
- Facts: `films/termen-loop/facts.md`. Found that the published caption's "peste 20.500 MDL" is really 20.490.

## showreel-15 (2026-10-07)
15 s brand showreel, 1080×1350, 60 fps, dark. "Pătratul": one orange square (the calculator thumb) carries the whole
film: lands on a rule under "Credite pentru *succes.*" → floods the frame on the music drop (4.0 s) → "Îți spunem dacă
are *sens.*" in ink on orange → contracts into the slider thumb (24 → 60 luni, real figures) → the cells box morphs into
a 2×2 stats grid (16 / 0 / 4,9 / 6, odometer digits, marker riding the hairlines) → the box becomes a slot window
rolling the 6 credit types onto *succes.* → line opens into the logo + idealcredit.md.
- Final: `films/showreel-15/out/showreel-15.mp4` (poster frame 0 = headline)
- Music: Mixkit #190, 120 BPM, drop 16.015 s, song starts 12.015 s; synthesized SFX; -14 LUFS
- Reuse: `fitSans()` (fit Archivo headline to a width), `mline/mset` masked rises, one `square(t)` state machine for
  a shared element across scenes, the morphing hairline box (`boxAt`), odometer digits, slot roll, stretch marker
  (lead/trail springs, axis-aligned moves only), logo "eye opening", adaptive-blur `render.py` (FAST windows + CUTS,
  3 parallel chunks, frame-0 poster in `mux`).
- Facts: `films/showreel-15/facts.md` (every on-screen word sourced from the live site).

Commands (from the repo root): `python3 -m http.server 8768 --directory motion-design` then
`python3 motion-design/films/termen-loop/render.py probe|full 45|full 916|mux 45|pops 45`, `python3 …/audio.py`.
Preview in a browser: http://localhost:8768/films/termen-loop/termen-loop.html (Space, ←/→, R; `?fmt=916`).
