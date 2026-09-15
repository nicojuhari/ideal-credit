## Last Updated

2026-09-15 - recolored to match the site as shipped (see note below)

# Brand Creative Kit - Ideal Credit

Visual DNA for every social graphic. Derived from the **shipped v4 website redesign**
(`app/globals.css`, ".dc" scope - live on main since 2026-09-11) so social and site read as one
brand. Content rules (lanes, kicker, caption, cadence) stay in [[social-media-strategy]]; layout
rules in [[social-design-system]]. Templates: `campaigns/social/templates/`.

**2026-09-15 correction:** this doc originally locked in a warm near-black palette (`#100E0C`)
anticipated ahead of the redesign. The site that actually shipped on 2026-09-11 uses a cooler,
pure-neutral palette instead (`#0b0b0b` bg, `#141414` surface, `#212121` hairlines), and every
uppercase marker/eyebrow on the live site pairs muted text with a **green** proof dot
(`#86A873`), never orange. The values below are corrected to match; `campaigns/social/templates/base.css`
was updated to the same values.

## Brand Colors (dc tokens - pulled 1:1 from `app/globals.css`)

- **Background:** `#0b0b0b` (`--color-dc-bg`) - default post background, identical to the site
- **Surface:** `#141414` (`--color-dc-surface`) - raised panel
- **Text:** `#f7f7f7` (`--color-dc-text`) - headlines, context line
- **Text-2:** `#aaaaaa` (`--color-dc-text-muted`) - secondary paragraphs
- **Text-3:** `#818181` (gray-700) - labels, source line (contrast floor for small type - never dimmer)
- **Brand:** `#FF9A00` (`--color-dc-accent`) - hero figure, links, buttons, the one italic accent word
- **Brand-light:** `#FFB347` - only for small orange type where `#FF9A00` is too dim
- **Proof:** `#86A873` (`--color-dc-proof`) - the square dot beside every uppercase marker/eyebrow
  on the site (`Section.tsx`, `ProductHero.tsx`) - kicker dot uses this, not orange
- **Ink on orange:** anything on a `#FF9A00` fill uses `#0b0b0b`, never paper
- **Hairlines:** `#212121` (`--color-dc-line`) solid - the site never uses translucent hairlines
  within the ".dc" scope

## Typography Direction

- **Display / context:** Archivo 600 for figures and headlines, 400 for the context line.
  Tight tracking (-0.035 to -0.05em on big figures), line-height 0.95-1.06.
- **Figures, labels, eyebrows:** IBM Plex Mono 400/500. Kicker is mono uppercase, `text-3`, with
  0.1em tracking and a 12px **proof-green** square (matches every eyebrow on the site - never
  orange). Units (`$`, `MDL`, `%`) are mono at ~0.42em of the figure. Source line is mono.
  `font-variant-numeric: tabular-nums` everywhere.
- **Canvas scale (1080×1350):** kicker 26px · hero figure 240-420px (auto-fit to width) ·
  context 44-50px · source 23px · logo mark 84px.

## Visual Style

- **Geometry:** zero border-radius, zero shadows, zero gradients. The round logo mark is the only
  curve - never boxed, never echoed by a rounded element.
- **Imagery:** none. Typography + real numbers on a flat background. No AI images, no stock
  photos, no illustrations, no emoji in-frame.
- **Mood:** a serious financial desk - calm, precise, near-black, one orange accent doing the work.
- **What to avoid:** the warm near-black `#100E0C` palette from the pre-launch v4 mockups
  (superseded - the shipped site is cooler and pure-neutral), Inter, rounded chips, drop
  shadows, gradients on the figure, more than one accent colour, orange kicker dots.

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
- **Kicker:** `text-3` mono uppercase with a proof-green square dot - matches the site's
  eyebrow/marker pattern exactly (`Section.tsx`, `ProductHero.tsx`). Not orange, on either theme.
- **Theme per slot:** Tuesday `01` = dark (`#0b0b0b` / panel `#141414`), Thursday `02` = light
  (`#f7f7f7` / panel `#ffffff`, ink text - built from the site's own `gray-*` scale, not a
  separate warm palette). Fixed, never swapped.
- **Logo:** dropped (2026-09-06). `idealcredit.md` in the header is the only brand presence
  in-frame - the redesign forbids the round mark inside a container, and two marks is one too many.
