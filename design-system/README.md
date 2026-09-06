# Ideal Credit design system (v4 — dark, sharp)

The single reference for every page built after September 2026. Tokens live in
`design-system/tokens.css`, base rules in `design-system/base.css`, components in
`components/ds/`, and the living reference renders every component in every state at
**`/design-system`** (`app/(v4)/design-system/page.tsx`). Enforcement: `npm run lint:design`
(runs in `npm run lint` and as `prebuild`) fails on any raw colour, radius, shadow, gradient
or bare `fr` track in v4 code.

Design intent: *clarity over decoration*. One dark material palette, exactly two hairline
tones, zero border-radius, zero shadows, zero imagery. All money, rates and terms in mono so
figures read as data. Motion is minimal and never blocks content.

---

## Where things live

| What | Path |
|---|---|
| Tokens (colours, hairlines, type scale, geometry, breakpoints) | `design-system/tokens.css` (Tailwind `@theme`) |
| Base layer scoped to `.v4` (rhythm variables, resets, range input, reveal, focus ring) | `design-system/base.css` |
| Components | `components/ds/*` — import from `@/components/ds` |
| Page-specific client wrappers (lifted calculator state) | `components/v4/*` |
| Calculator maths + unit test | `lib/loan-math.ts`, `lib/loan-math.test.ts` (`npm test`) |
| v4 chrome (fonts, Header, Footer) | `app/(v4)/layout.tsx` |
| Legacy chrome (old design) | `app/(legacy)/layout.tsx` |
| Lint | `scripts/design-lint.mjs` |
| Design references (prototypes, spec) | `design/ideal-credit-v4/` |

**Routing.** New pages go under `app/(v4)/…`; routes still on the old design stay under
`app/(legacy)/…`. Both groups resolve to the same URLs (`app/(v4)/credite/x/page.tsx` →
`/credite/x`), so migrating a page is a `git mv` from one group to the other.

---

## Tokens

### Colour — 12 values, do not add greys

| Token | Value | Utility | Use |
|---|---|---|---|
| `bg` | `#100E0C` | `bg-bg` `text-bg` | page background; ink on orange fills |
| `surface` | `#17140F` | `bg-surface` | raised surface — calculator panel |
| `section` | `#1B1815` | `bg-section` | alternating section bands |
| `inset` | `#241F1A` | `bg-inset` | inset notes; hover fill on `section` cells |
| `hover` | `#2A241E` | `bg-hover` | hover fill for solid ink buttons |
| `text` | `#F2EFE8` | `text-text` `bg-text` | primary text; paper button fill |
| `text-2` | `#B3ACA0` | `text-text-2` | body copy, secondary paragraphs |
| `text-3` | `#A39C8F` | `text-text-3` | labels, meta, fine print — **floor for text < 16px** |
| `brand` | `#FF9A00` | `text-brand` `bg-brand` | orange accents, key figures, CTA band |
| `brand-light` | `#FFB245` | `text-brand-light` | orange for small type (step labels, "probabil" verdict) |
| `quote` | `#D8D3C8` | `text-quote` | secondary pull-quote text |
| `verdict-low` | `#8A8377` | `bg-verdict-low` | checklist verdict **dot only** (0–1 ticked). Never text. |

### Hairlines — exactly two tones

| Token | Value | Utility |
|---|---|---|
| `line` | `rgba(242,239,232,0.14)` | `border-line`, `bg-line` (grid gaps) |
| `line-strong` | `rgba(242,239,232,0.24)` | `border-line-strong` (outline buttons, menu button) |

Documented interaction values (same paper tone at other alphas, or orange):
`line-chip` 0.20 (eyebrow chip border, slider track) · `line-control` 0.32 (checkbox off) ·
`line-dot` 0.34 (4px separator squares) · `brand-border` `rgba(255,154,0,0.5)` (card hover) ·
`row-hover` `rgba(242,239,232,0.05)` (list-row hover) · `ink-muted` `rgba(16,14,12,0.72)`
(secondary ink on orange) · `header` `rgba(16,14,12,0.92)` (sticky header backdrop).

### Contrast floors (must survive every page)
- nothing under 16px dimmer than `text-3` on `bg`;
- anything on a `brand` fill uses `bg` ink — button labels, CTA headline, the ✓ glyph. Never paper.

### Typography
- **Archivo** 400/500/600 — `font-ui` — every UI and display string.
- **IBM Plex Mono** 400/500 — `font-figure` — **all** money, rates, terms, DAE, step labels,
  eyebrows, breadcrumbs, read times. A rule, not decoration.
- Both self-hosted through `next/font` (fetched at build time, served from our origin).
  `latin-ext` is loaded for ă â î ș ț.
- `font-variant-numeric: tabular-nums` on the `.v4` root so figures don't jitter under sliders.

| Role | Utility | Size / line-height / tracking / weight |
|---|---|---|
| Hero h1 (home) | `text-h1` | clamp(44px, 6vw, 80px) / 1.02 / -0.04em / 600 (+ `text-balance`) |
| Hero h1 (service) | `text-h1-service` | clamp(38px, 4.8vw, 64px) / 1.02 / -0.04em / 600 |
| Section h2 | `text-h2` | 42 / 1.05 / -0.035em / 600 (34px ≤640) |
| CTA band h2 | `text-h2-cta` | 46 / 1.04 / -0.04em / 600 |
| Product card h3 | `text-h3-product` | 28 / -0.03em / 600 |
| Checklist h2 | `text-h3-check` | 26 / -0.025em / 600 |
| Proof / purpose h3 | `text-h3-card` | 23 / -0.025em / 600 |
| Step cell h3 | `text-h3-step` | 24 / -0.02em / 600 |
| Step row h3 | `text-h3-row` | 22 / -0.02em / 500 |
| Guide card h3 | `text-h3-guide` | 21 / 1.25 / -0.02em / 500 |
| Panel title | `text-panel-title` | 21 / -0.02em / 600 |
| Pull quote | `text-pullquote` | 30 / 1.32 / -0.025em / 500 |
| Lead | `text-lead` | 19 / 1.6 |
| Body | `text-body` | 16 / 1.6 |
| List row title | `text-row-title` | 19 / 500 / -0.01em |
| Plain row | `text-row` | 17 / 1.5 |
| Small body | `text-small` | 15 / 1.6 |
| Meta | `text-meta` | 14 / 1.5 |
| Fine print | `text-fine` | 13 / 1.5 |
| Eyebrow (mono, uppercase) | `text-eyebrow` | 12 / 0.1em (0.08em for chips and footer headings) |
| Trust strip (mono, uppercase) | `text-strip` | 12.5 / 0.06em |
| Big mono figure | `text-figure-xl` / `-lg` / `-md` | 44 / 40 / 30, -0.03em / -0.03em / -0.02em |
| Calculator figure | `text-figure` / `-sm` / `-xs` | 25 / 23 / 18 |

### Geometry
- Shell: `max-w-shell` = 1240px, padding 40 → 24 (≤900) → 20 (≤640). Use the `ds-shell` utility.
- Section rhythm: 112px (`ds-section`, `ds-section-b`) · 96px follow-on (`ds-section-follow-b`)
  · hero top 92px (`ds-hero-t`). Scales 112 → 72 → 56 automatically.
- Header: `h-header` = 76px, sticky, `bg-header` + `backdrop-blur-md`, bottom `border-line`.
- Card padding: `p-card` 32 · `p-card-product` 36 · `p-card-check` 34 · `p-card-guide` 30.
- Buttons: `h-btn-sm` 44 · `h-btn` 50 · `h-btn-md` 54 · `h-btn-lg` 56 · `h-btn-xl` 58. Hit target `min-h-hit` 44.
- `--radius: 0`. **There is no radius token and no shadow token.**
- Breakpoints (min-width): `ds-sm:` 641 · `ds-md:` 901 · `ds-lg:` 981 (and `max-ds-*:` for max-width).

### Motion
`--ease-reveal: cubic-bezier(.2,.7,.3,1)`. Buttons 200ms, cards 250ms, rows 200ms.

---

## The rules (enforced by `scripts/design-lint.mjs`)

1. **Tokens only.** No raw hex/rgb/hsl anywhere except `design-system/tokens.css`.
2. **Square corners.** No `border-radius`, no `rounded-*`. The **round logo is the only curve** —
   never put it inside a container (chip, box, circle) and never echo its curve anywhere.
   A half-measure (4–8px corners) breaks the effect.
3. **No shadows, no gradients.** Depth comes from the four material tones and the two hairlines.
4. **No greys outside the table.** No imagery, photography, illustrations or icon libraries.
   The only graphics are the logo, small orange squares and the mono glyphs `+ − ✓ →`.
5. **Mono for every figure**, Archivo for everything else.

## The three layout invariants (baked into the components — keep them in page code too)

1. **All grid tracks are `minmax(0, Xfr)`**, never bare `fr` — bare `fr` refuses to shrink below
   min-content and pushes columns out of the shell. Tailwind's `grid-cols-N` already emits
   `minmax(0,1fr)`; for custom tracks write `grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]`.
2. **Every horizontal button/pill row has `flex-wrap: wrap`.** Nowrap pills in a non-wrapping row
   overflow their column and paint over the neighbour.
3. **Centred flex buttons whose label interpolates a value need `gap: 0.32em`** (built into
   `Button`) — flex strips whitespace between text nodes, so "Solicită {sum} MDL" would render as
   "Solicită100.000MDL". Pass the pieces as separate spans.

---

## Component index (`@/components/ds`)

| Component | Props | Notes |
|---|---|---|
| `Header` | — | sticky 76px; nav collapses to a mono **Meniu** button < 981px; phone + CTA stay visible (phone into the menu < 400px, wordmark hidden < 560px). "Credite afaceri" is always highlighted and becomes a non-link on its own page. |
| `Footer` | — | brand + Produse / Companie / Oficii, legal line, legal links. |
| `Brand` | `size: header\|footer` | logo `<img alt="">` + wordmark; the wordmark carries the name. |
| `Button` | `variant: paper\|paper-ink\|outline\|ink\|band`, `size: sm\|md\|calc\|lg\|xl`, `href?`, `full?` | renders `<a>`/`Link`/`<button>`; always `gap-[0.32em]`; press = 1px down. |
| `EyebrowLabel` | `variant: text\|chip`, `tone: muted\|brand\|paper`, `tracking: wide\|tight`, `as?` | mono uppercase 12px; chip = 34px, hairline, 6px orange square. |
| `SectionBand` | `tone: bg\|section`, `spacing: bottom\|both\|follow\|hero\|none`, `shellClassName?`, `id?` | full-width band + 1240 shell. Compose every page from these. |
| `SectionHeading` | `title`, `aside?`, `titleClassName?` | h2 + right-aligned aside, bottoms aligned, wraps. |
| `HairlineGrid` | `columns: 2\|3\|4\|string`, `cellTone: bg\|section\|surface`, `frame?`, `edges?`, `responsive?` | `gap:1px` on a hairline background — the gap is the rule. 4→2→1 and 3→1 by default. |
| `DataTile` | `items: {label,value,tone?}[]`, `size: sm\|md` | framed 2-col figures; first value may be brand. |
| `StatCells` | `items`, `size: xl\|md`, `cellTone`, `divided?` | static mono figures. **No count-up ever.** |
| `StepRows` | `steps: {label,title,body}[]`, `layout: cells\|rows`, `cellTone` | cells (home, brand-light labels, edge cells flush with the shell) / rows (service, 64px brand label column). |
| `ListRows` | `heading?`, `headingTone`, `items: {title,description?,href?}[]`, `variant: product\|plain` | product rows are links with the 10px nudge; plain rows are single 17px lines. |
| `Card` | `padding: card\|product\|check\|guide\|panel`, `hover: tint\|brand\|none`, `tone: bg\|surface`, `as?` | flex column; use `mt-auto` wrappers to pin content to the bottom. |
| `PullQuote` | `quote`, `name`, `role`, `initials`, `side: {text,meta}[]` | 64px panel, initials square, side quotes behind a vertical hairline. |
| `GuideCard` | `href`, `readTime`, `title`, `description` | whole card is the link. |
| `FaqAccordion` | `items: {question,answer}[]`, `defaultOpen = 0` (−1 = closed) | single-open; `<button aria-expanded aria-controls>` + `role="region"`. |
| `InsetNote` | children | `inset` block, 26/34 padding, max-width 900. |
| `CtaBand` | `title`, `lead`, `buttonLabel?`, `href?` | solid orange, ink type, `band` button, mono phone. |
| `LoanCalculator` | `title?`, `minAmount/maxAmount/stepAmount/defaultAmount`, `minTerm/maxTerm/defaultTerm`, `sticky?`, controlled `amount/term/onAmountChange/onTermChange` | native ranges with labels + `aria-valuetext`; submit carries `?amount=&term=`. |
| `EligibilityChecklist` | `eyebrow?`, `title?`, `items?`, `defaultTicked = [true,true,true,false]` | real checkboxes; verdict 4 → brand / 2–3 → brand-light / 0–1 → `verdict-low` dot. |
| `Reveal` | `as?`, `className?`, `id?` | fail-safe one-shot fade-up. Wrap blocks, never derive content from it. |
| `Breadcrumb` | `items: {label,href?}[]` | mono uppercase trail. |
| `TrustStrip` | `items` | one row between two hairlines. |

Constants: `PHONE_TEL`, `PHONE_DISPLAY`, `APPLY_HREF`, `applyHref(amount, term)`.

### `Reveal` guarantees
`opacity 0→1`, `translateY(14px)→0`, 600ms `--ease-reveal`, once per block. Everything already
in view is revealed on mount; IntersectionObserver with threshold 0 and **no negative rootMargin**;
a rect sweep listens on `window` and every scrolling ancestor; an unconditional ~900ms timeout
reveals whatever is left; the hidden state only exists under `@media (scripting: enabled)` so
no-JS renders everything; a CSS animation fallback unhides at 1.2s even if hydration never runs;
`prefers-reduced-motion: reduce` disables transform and transition entirely.

### `LoanCalculator` maths (`lib/loan-math.ts`)
Declining balance, 4 %/month on the remaining principal:
```
principal = amount / term
firstPay  = principal + amount * 0.04
lastPay   = principal + principal * 0.04
totalCost = amount * 0.04 * (term + 1) / 2
DAE       = ((1.04) ** 12 - 1) * 100            // 60,1 %
```
`ro-RO` grouping (`100.000`), whole MDL, DAE one decimal with `%`. `npm test` asserts
10.000 MDL / 12 luni → prima rată **1.233**, cost total **2.600**, DAE **60,1%**.

---

## Accessibility (inherited from the components)
- Real `<button>` / `<a>` everywhere; no clickable divs.
- Checklist = `<input type="checkbox">` + `<label>`; FAQ = disclosure buttons with `aria-expanded`.
- Ranges are native with visible labels, `<output>` values and `aria-valuetext` in MDL / luni.
- Logo `<img alt="">`; phone is `tel:+37361252777`.
- `:focus-visible { outline: 2px solid brand; outline-offset: 3px }` on the `.v4` root.
- Hit targets ≥ 44px (`min-h-hit`).

## Responsive rules
- Single column below 981px; calculator directly under the hero copy and no longer sticky.
- 4-up → 2-up ≤ 900 → 1-up ≤ 640. Three-up grids go 1-up ≤ 640; three cards go 1-up ≤ 900.
- List rows stack the description under the title ≤ 640.
- Rhythm 112 → 72 → 56; shell padding 40 → 24 → 20 (automatic through `ds-shell` / `ds-section`).
- Header collapses the nav into a menu button; phone + CTA stay visible.

---

## How to build a new page

1. Create `app/(v4)/<route>/page.tsx` (server component). Metadata + JSON-LD as usual.
2. Compose sections from `SectionBand` (+ `SectionHeading`), `HairlineGrid`, `Card`, `ListRows`,
   `StepRows`, `FaqAccordion`, `CtaBand`, wrapping blocks in `Reveal`.
3. Buttons are always `Button`. Labels and figures are always `EyebrowLabel` / `font-figure`.
4. If a section needs state (calculator values shared with a CTA), lift it into a small client
   component under `components/v4/` — see `HomeHero` and `BusinessHero`.
5. **Never hand-roll a colour, a border, a radius, a shadow or a font-family.** If a value is
   missing, add it to `tokens.css` first, then use the utility.
6. Run `npm run lint` and `npm test`; open `/design-system` when in doubt about a variant.
