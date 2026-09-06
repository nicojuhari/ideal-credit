## Last Updated

2026-09-06 by /creative

# Brand Creative Kit - Ideal Credit

Visual DNA for every social graphic. Derived from the **v4 website redesign** (dark, sharp -
handoff in `~/Downloads/ideal-credit-redesign/README.md`) so social and site read as one brand.
Content rules (lanes, kicker, caption, cadence) stay in [[social-media-strategy]]; layout rules
in [[social-design-system]]. Templates: `campaigns/social/templates/`.

## Brand Colors (v4 tokens - 10 values, no extra greys)

- **Background:** `#100E0C` "warm near-black" - default post background
- **Surface:** `#17140F` - raised panel (v2 template)
- **Section / Inset:** `#1B1815` / `#241F1A` - bands and note blocks, rarely needed in social
- **Text:** `#F2EFE8` "paper" - headlines, context line
- **Text-2:** `#B3ACA0` - secondary paragraphs
- **Text-3:** `#A39C8F` - labels, source line (contrast floor for small type - never dimmer)
- **Brand:** `#FF9A00` - kicker, hero figure, accents; also a full-bleed background (v4 template)
- **Brand-light:** `#FFB245` - only for small orange type where `#FF9A00` is too dim
- **Ink on orange:** anything on a `#FF9A00` fill uses `#100E0C`, never paper
- **Hairlines:** `rgba(242,239,232,.14)` standard, `.24` emphasis - exactly two, never a third

## Typography Direction

- **Display / context:** Archivo 600 for figures and headlines, 400 for the context line.
  Tight tracking (-0.035 to -0.05em on big figures), line-height 0.95-1.06.
- **Figures, labels, eyebrows:** IBM Plex Mono 400/500. Kicker is mono uppercase with 0.1em
  tracking and a 12px orange square. Units (`$`, `MDL`, `%`) are mono at ~0.42em of the figure.
  Source line is mono. `font-variant-numeric: tabular-nums` everywhere.
- **Canvas scale (1080×1350):** kicker 26px · hero figure 240-420px (auto-fit to width) ·
  context 44-50px · source 23px · logo mark 84px.

## Visual Style

- **Geometry:** zero border-radius, zero shadows, zero gradients. The round logo mark is the only
  curve - never boxed, never echoed by a rounded element.
- **Imagery:** none. Typography + real numbers on a flat background. No AI images, no stock
  photos, no illustrations, no emoji in-frame.
- **Mood:** a serious financial desk - calm, precise, warm-dark, one orange accent doing the work.
- **What to avoid:** the old cool-black `#0b0b0b` + grid/noise texture (retired with v4), Inter,
  rounded chips, drop shadows, gradients on the figure, more than one accent colour.

## Logo

- **Path:** `public/ideal-credit-logo.svg`.
- **Usage in social:** not used in-frame since 2026-09-06 - the `idealcredit.md` wordmark in the
  panel header carries the brand. If it ever returns, never inside a container.

## Locked Style (chosen 2026-09-06: "Panou de date", two themes)

Files: `campaigns/social/templates/dark.html` and `light.html`. The other four directions were
deleted after the choice.

- **Layout:** 72px outer margin, one panel on `surface` with 56px padding and a standard hairline border.
  Header row = kicker left, `idealcredit.md` mono right, hairline under it. Figure, context,
  spacer, then a single hairline cell at the base: "SURSĂ" + source text (without the
  "Sursă:" prefix).
- **Figure:** IBM Plex Mono 500, brand orange, auto-fit to width (max 220px, 60px breathing
  room on the right), unit at 0.5em.
- **Context:** Archivo 400, 44px, `text-2`, always ends with "..." (the caption continues it).
- **Kicker:** brand orange on dark (`#FF9A00`); `#C46E00` on light so 26px mono type clears
  3:1 on cream. Green kickers from the older posts are retired.
- **Theme per slot:** Tuesday `01` = dark (`#100E0C` / panel `#17140F`), Thursday `02` = light
  (`#EDE9E0` / panel `#F7F4EE`, ink text). Fixed, never swapped.
- **Logo:** dropped (2026-09-06). `idealcredit.md` in the header is the only brand presence
  in-frame - the redesign forbids the round mark inside a container, and two marks is one too many.
