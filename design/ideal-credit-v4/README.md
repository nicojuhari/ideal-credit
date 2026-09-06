# Handoff: Ideal Credit — v4 (dark, sharp) — Home & Small-business loan page

## Overview
Redesign of two pages of **idealcredit.md**, a licensed non-bank lender (OCN) in Moldova. Site language: **Romanian (ro-MD)**.

1. **Home** — brand, proof, live loan calculator, product index, guides, FAQ, CTA.
2. **Credit pentru afaceri mici** — the small-business loan page: offer detail, sticky calculator, self-qualification checklist, conditions & documents, 4-step process, FAQ, CTA.

Design intent: *clarity over decoration*. One dark material palette, exactly two hairline tones, **zero border-radius**, **zero shadows**, **zero imagery** (client preference — no photography). All money and rates are set in mono so figures read as data. Motion is minimal and never blocks content.

Business owners are the priority audience; the home page leads with the business offer and links straight to page 2.

## About the Design Files
The two `.dc.html` files in this bundle are **design references written in HTML** — working prototypes showing intended look, copy and behaviour. They are **not production code**. They run on a small in-house prototyping runtime (an HTML template plus a logic class at the bottom of each file); **do not port that structure**.

Your task is to **recreate these designs in this codebase's own environment**, using its routing, component conventions and styling approach. The live site is a Next.js app, so React components are the expected target. If no environment exists yet, choose the most appropriate framework and implement there.

All copy in the files is production Romanian copy taken from the live site and edited — **keep it verbatim, including diacritics** (ă, â, î, ș, ț), unless the client says otherwise.

## Fidelity
**High-fidelity.** Colors, type scale, spacing, hairlines, states and copy are final; match them closely. The prototype is **desktop-only**, designed around a 1240px content shell — mobile layouts are NOT designed. Follow the responsive rules in "Interactions & Behavior" and expect to make judgement calls at small widths.

## Design Tokens

### Color — 10 values, do not add greys
| Token | Value | Use |
|---|---|---|
| `bg` | `#100E0C` | Page background (warm near-black) |
| `surface` | `#17140F` | Raised surface — the calculator panel |
| `section` | `#1B1815` | Alternating section bands (was the light section in earlier versions) |
| `inset` | `#241F1A` | Inset note blocks; hover fill on `section` cells |
| `hover` | `#2A241E` | Hover fill for solid ink buttons |
| `text` | `#F2EFE8` | Primary text; primary button fill |
| `text-2` | `#B3ACA0` | Body text, secondary paragraphs |
| `text-3` | `#A39C8F` | Labels, meta, fine print (**dark-mode safe floor — do not go dimmer for text under 16px**) |
| `brand` | `#FF9A00` | Brand orange: accents, key figures, CTA band, hover fills |
| `brand-light` | `#FFB245` | Orange for small type where `brand` is too dim (step labels, verdict "probable") |
| `quote` | `#D8D3C8` | Secondary pull-quote text |

Hairlines — exactly two, never a third:
- standard: `1px solid rgba(242,239,232,0.14)`
- emphasis / interactive border: `1px solid rgba(242,239,232,0.24)` (also `0.2` for chips, `0.3–0.34` for checkbox borders and dots)

Hover border: `rgba(255,154,0,0.5)`. Row hover background: `rgba(242,239,232,0.05)`.

**Rules: no box-shadow, no gradients, no additional greys, no border-radius > 0 anywhere.**

### Contrast floor
All body text was verified against WCAG AA. Two rules that must survive implementation:
- text under 16px never dimmer than `#A39C8F` on `#100E0C`;
- anything on a `#FF9A00` fill uses `#100E0C` (ink), never `#F2EFE8` — this includes button labels, the CTA band headline and the checklist ✓ glyph.

### Typography
- UI/display: **Archivo** (400/500/600).
- Figures, labels, eyebrows: **IBM Plex Mono** (400/500). All money, rates, terms, DAE and step labels are mono — a rule, not decoration.
- `font-variant-numeric: tabular-nums` globally so figures don't shift while dragging sliders.

| Role | Size / line-height / tracking / weight |
|---|---|
| Hero h1 (home) | `clamp(38px, 5vw, 66px)` / 1.02 / -0.04em / 600, `text-wrap: balance` |
| Hero h1 (service) | `clamp(38px, 4.8vw, 64px)` / 1.02 / -0.04em / 600 |
| Section h2 | 42 / 1.05 / -0.035em / 600 |
| CTA band h2 | 46 / 1.04 / -0.04em / 600 |
| Product card h3 | 28 / -0.03em / 600 |
| Proof / purpose card h3 | 23 / -0.025em / 600 |
| Step / small h3 | 22–24 / -0.02em / 500–600 |
| Pull quote | 30 / 1.32 / -0.025em / 500 |
| Lead paragraph | 19 / 1.6 |
| Body | 16 / 1.6 |
| List row title | 19 / 500 |
| Small body, meta | 14–15 / 1.5–1.6 |
| Fine print | 13 / 1.5 |
| Eyebrow (mono, uppercase) | 12 / 0.08–0.10em tracking |
| Big mono figure | 40–44 / -0.03em |
| Calculator figure | 23–25 |

### Spacing & geometry
- Content shell: `max-width: 1240px; margin: 0 auto; padding: 0 40px`.
- Section rhythm: **112px** between major sections; 96px for follow-on sections; hero top padding 92px.
- Header: **76px** tall, sticky, `background: rgba(16,14,12,0.92)`, `backdrop-filter: blur(12px)`, bottom hairline.
- Card padding: 32px (dark cards, calculator) · 36px (product cards) · 34px (checklist) · 30px (guide cards).
- Buttons: 44px (header) / 50px / 54px / 56px / 58px tall, horizontal padding 22–32px, **square corners**.
- **All grids use `minmax(0, Xfr)` tracks**, never bare `fr` — bare `fr` refuses to shrink below min-content and pushes columns out of the container. Hero: `minmax(0,1.02fr) minmax(0,0.98fr)`, 64px gap.
- **Every horizontal button row uses `flex-wrap: wrap`** — nowrap pills in a non-wrapping row overflow their column and paint over the neighbouring one.
- Hairline data grids are built as `display:grid; gap:1px; background:<hairline>` with each cell filled `#100E0C` — the 1px gap *is* the rule. Reuse this instead of per-cell borders.
- Centred flex buttons whose label contains an interpolated value need `gap: 0.32em`: flex strips the whitespace between text nodes, so "Solicită {sum} MDL" would otherwise render as "Solicită100.000MDL".

## Screens / Views

### 1. Home (`Ideal Credit v4 - Home.dc.html`)

1. **Header** — logo (`ideal-credit-logo.svg`, 34px, `alt=""`) + "Ideal Credit" wordmark (19px/600) · nav: Credite afaceri (links to page 2, active colour) / Credite personale / Calculator, `flex: none`, nowrap · spacer · phone `0612 52 777` (mono 15px) · primary button "Solicită credit" (paper fill → orange on hover). Nav and phone must never wrap; the right group is pinned.
2. **Hero** (two columns):
   - Left: eyebrow chip "OCN licențiată · din 2010" (34px tall, hairline border, 6px orange square dot) → h1 "Capital pentru afacerea ta, cu cifrele pe masă." → 19px lead → button row: "Solicită credit pentru afacere" (paper) + "Condiții pentru afaceri" (outline, links to page 2) → trust row: `4.9` (mono, orange) rating Google · Rambursare anticipată gratuită · Supravegheat de CNPF, separated by 4px square dots.
   - Right: **calculator panel** (`surface`, hairline, 32px padding) — "Calculator de credit" + "4% lunar" (orange mono); Suma slider 5.000–500.000 step 5.000 with min/max labels; Termen slider 3–36 step 1; a 2×2 hairline data grid — Prima rată (orange), Ultima rată, Cost total credit, DAE; full-width ink→orange button "Solicită {sum} MDL"; 13px disclaimer. *(No chart — deliberately removed.)*
3. **Trust strip** — one row between two hairlines, mono uppercase 12.5px: Achitare online banking · VictoriaBank · Poșta Moldovei · Numerar în oficii · Rambursare anticipată gratuită.
4. **"Trei promisiuni, fără asterisc."** — 3 bordered cards, `minmax(0,1.3fr) minmax(0,1fr) minmax(0,1fr)`, min-height 300px, hover border → orange tint:
   - *Transparență* — "Toate costurile, înainte de semnare" + 2-cell data tile (Dobândă 4% / lună · Comisioane **0 MDL** in orange);
   - *Viteză* — "Răspuns înainte de prânz" + mono `1–3 h` at 40px;
   - *Flexibilitate* — "Rambursare anticipată gratuită" + mono `0 %` at 40px.
5. **`section` band — "Alege direcția. Restul îl clarificăm noi."** — two product cards (01 / Afaceri, 02 / Persoane fizice): mono eyebrow, h3, lead, three plain feature lines (flex column, 12px gap — no bullets, no icons), spacer, action button (paper fill on business, outline on personal). Below: `inset` note about the guarantor rule (max-width 900px).
6. **Stats band** — 4 hairline cells with static mono 44px figures: `16` ani de activitate · `4.9` rating Google · `10` produse de credit · `0` comisioane ascunse. **Static text — no count-up animation.**
7. **"Cum funcționează"** — 3 hairline cells, "Pas 01/02/03" in `brand-light`, h3 + body. First cell has no left padding, last no right padding, so rules meet the shell edges.
8. **"Toate produsele"** — two hairline lists (afaceri · persoane fizice), each row = 19px title (min-width 180px) + 15px description; hover nudges the row 10px right with a faint background.
9. **Testimonials** — bordered panel, 64px padding: 30px pull quote + attribution (40px bordered square with initials) on the left; three short quotes behind a vertical hairline on the right (44px padding).
10. **Guides** — 3 bordered cards: read time (mono), 21px title, 15px description, "Citește →" in orange.
11. **FAQ** — left rail (h2 "Întrebări frecvente" + note + outline button "Contactează-ne"), right accordion of 6 items: 19px question, mono `+`/`−` (orange when open), answer max-width 620px, hairline between rows, 8px hover nudge. Single-open.
12. **CTA band** — solid `#FF9A00`, ink type: h2 "Spune-ne de cât ai nevoie. Restul e treaba noastră." + 18px lead + ink button "Cerere online" (lifts 2px on hover) + mono "sau 0612 52 777".
13. **Footer** — logo + wordmark (17px) and blurb, then Produse / Companie / Oficii columns (both addresses, phone in mono), and the legal line: "© 2026 OCN Ideal Credit SRL. Conform Legii nr. 202/2013, dobânda anuală nu depășește 50%."

### 2. Credit pentru afaceri mici (`Ideal Credit v4 - Credit pentru afaceri mici.dc.html`)

1. **Header** — same component, "Credite afaceri" active (not a link).
2. **Breadcrumb** — mono uppercase: Acasă / Credite / Afaceri mici.
3. **Hero** (two columns):
   - Left: orange mono eyebrow "Credit pentru afaceri" → h1 "Credit pentru afaceri mici" → lead → button row ("Solicită un credit" + "Vorbește cu un consultant") → 3 hairline stats (`1–2` zile până la decizie · `3 luni` activitate minimă · `0` plan de afaceri cerut) → **self-qualification card**: "Verifică în 10 secunde" / "Este pentru afacerea mea?" with 4 tappable rows (22px square box, orange fill + ink ✓ when on, `text-3` label when off) and a live verdict (8px square dot + title + explanation):
     - 4 ticked → `#FF9A00`, "Dosarul tău se califică"
     - 2–3 → `#FFB245`, "Probabil se poate"
     - 0–1 → `#8A8377`, "Hai să discutăm"
   - Right: same calculator panel, **sticky at `top: 108px`**, range 20.000–500.000.
4. **`section` band — "Pentru ce poți folosi banii"** — 4 hairline cells (01 Capital de lucru · 02 Investiții · 03 Refinanțare · 04 Start-up), min-height 280px, "Află mai mult →" pinned at the bottom; hover fills the cell `#241F1A`.
5. **Condiții / Documente necesare** — two columns of hairline rows (4 each, 17px), then the `inset` note about fidejusor/gaj rules.
6. **"Cum lucrăm cu dosarul tău"** — 4 rows: 64px mono "Pas 0X" in orange + 22px title + 16px body, hairline above each row and below the last.
7. **FAQ** — same pattern, 6 business-specific questions.
8. **CTA band** — "Trimite extrasele. Îți spunem direct dacă merge."
9. **Footer** — same component.

## Interactions & Behavior

### Calculator math (matches the live site's published figures)
Declining-balance, 4% per month on the remaining principal:
```
RATE      = 0.04
principal = amount / term
firstPay  = principal + amount * RATE
lastPay   = principal + principal * RATE
totalCost = amount * RATE * (term + 1) / 2      // total interest
DAE       = ((1 + RATE) ** 12 - 1) * 100        // 60.1 %
```
Format with `ro-RO` grouping (`100.000`), rounded to whole MDL; DAE to one decimal with a `%` suffix. Sanity check: 10.000 MDL / 12 luni → prima rată 1.233, cost total 2.600.

### Controls
- Sliders: native `input[type=range]`, 4px square track `rgba(242,239,232,0.2)`, 22px square orange thumb with a 5px `#17140F` ring, scaling to 1.12 on `:active`. Update on input.
- FAQ: single-open accordion; clicking the open row closes it; glyph `+` → `−`.
- Checklist: 4 independent toggles, default `[true, true, true, false]`; verdict derives from the count.
- Buttons: paper → orange fill (200ms), press 1px on `:active`; outline buttons: border → orange; cards: border → orange tint; rows: 8–10px nudge.
- Focus: `:focus-visible { outline: 2px solid #FF9A00; outline-offset: 3px }`.

### Scroll reveal — must be fail-safe
One-shot fade-up per block: `opacity 0→1`, `translateY(14px)→0`, `600ms cubic-bezier(.2,.7,.3,1)`, never repeating. **Requirements learned the hard way:**
- reveal everything already in view on mount (don't wait for an intersection event);
- no negative `rootMargin`;
- listen on `window` *and* any scrolling ancestor;
- unconditional timeout (~900ms) that unhides all remaining blocks;
- honour `prefers-reduced-motion: reduce` by disabling transform/transition entirely.
Never make displayed *content* depend on animation state (an earlier count-up rendered permanent zeros when frames never ran).

### Semantics & a11y (the prototype cuts these corners — production must not)
Pills become real `<button>`/`<a>`; checklist rows become `<input type="checkbox">` with labels; FAQ becomes a disclosure pattern (`aria-expanded`, button-triggered); sliders keep native inputs with visible labels and `aria-valuetext` in MDL; the logo `<img>` stays `alt=""` because the wordmark text carries the name; the phone is a `tel:+37361252777` link.

### Responsive behavior (to design, rules to follow)
Single column below ~980px, calculator directly under the hero copy and no longer sticky; 4-up grids → 2-up ≤900px → 1-up ≤640px; product lists stack with the description under the title; section rhythm 112 → 72 → 56px; shell padding 40 → 24 → 20px; header collapses the nav into a menu button while keeping phone + CTA visible; hit targets ≥44px.

## State Management
All local, no data fetching:
- `amount: number` — home default 100.000; service default 150.000
- `term: number` — default 12
- `openFaq: number` — default 0, `-1` = all closed
- `ticked: boolean[4]` — service page only, default `[true, true, true, false]`
Derived (pure functions): first/last payment, total cost, DAE, verdict.

Integration points: CTA buttons should route to `/cerere-de-credit-online` with `amount` and `term` as query params; product rows link to their existing `/credite/...` pages; guide cards link to `/blog/...`.

## Assets
- `ideal-credit-logo.svg` — the client's logo, 150×150, **fully round mark**. Included in this bundle; reference it locally, never hotlink.
- **No other assets.** No photography, no icon library, no illustrations. The only graphics are the logo, small orange squares, and mono glyphs (`+ − ✓ →`).
- Fonts: Archivo + IBM Plex Mono from Google Fonts in the prototype — **self-host in production**.

### Note on the round logo vs. square UI
Deliberate: the mark is the only curve in the design. Two rules preserve the effect — never place the logo inside a container (no square chip, no bordered box), and never echo its curve elsewhere (no rounded buttons, cards or chips). A half-measure (4–8px corners) breaks it.

## Files
- `Ideal Credit v4 - Home.dc.html` — home page design reference
- `Ideal Credit v4 - Credit pentru afaceri mici.dc.html` — business loan page design reference
- `ideal-credit-logo.svg` — logo asset

Both HTML files open directly in a browser. Read the inline styles for exact values; the logic class at the bottom of each file holds the calculator math, FAQ and checklist behaviour.

---

## Prompt to give Claude Code

> Implement the **Ideal Credit v4** redesign described in `README.md` in this codebase.
>
> The two `.dc.html` files are **design references only** — prototypes built on a throwaway runtime. Do not copy their markup or port their template/logic classes. Recreate both pages as idiomatic components in this project's existing stack, using its routing, styling approach and component conventions.
>
> Work in this order:
> 1. Read `README.md` in full, then open both HTML files and read the inline styles to lift exact values.
> 2. Register the design tokens (10 colors, 2 hairline tones, the type scale, the 1240px shell, the 112px section rhythm) in whatever token mechanism this project already uses. Do not introduce colors, greys, shadows or border-radius that aren't in the token table — this design is strictly square-cornered and shadowless.
> 3. Build the shared pieces first: `Header`, `Footer`, `Button` (paper / outline / ink variants), `EyebrowLabel`, `HairlineGrid`, `FaqAccordion`, `LoanCalculator` (exact math from the README, `ro-RO` formatting), `EligibilityChecklist`, `CtaBand`.
> 4. Build the Home page, then the business loan page, section by section in the documented order. Copy is production Romanian with diacritics — reproduce it verbatim.
> 5. Enforce the three layout invariants everywhere: `minmax(0, …)` grid tracks, `flex-wrap: wrap` on button rows, and `gap: 0.32em` on centred flex buttons whose label interpolates a value.
> 6. Accessibility is part of the task, not a follow-up: real `<button>`/`<a>` elements, checkbox inputs for the checklist, a disclosure pattern for the FAQ, labelled range inputs, `:focus-visible` ring `2px #FF9A00`, `prefers-reduced-motion` respected. Keep every text/background pair at WCAG AA — nothing under 16px dimmer than `#A39C8F`, and ink (`#100E0C`) on any orange fill.
> 7. Implement the scroll reveal exactly as specified, including the fail-safe (visible even if no intersection event ever fires) — and never derive displayed content from animation state.
> 8. Add the responsive rules from the README; the prototype is desktop-only, so mobile is yours to design within those constraints.
> 9. Wire the integration points: CTA → `/cerere-de-credit-online?amount=&term=`, product rows → existing `/credite/...` routes, guides → `/blog/...`, phone → `tel:+37361252777`. Self-host Archivo and IBM Plex Mono; copy `ideal-credit-logo.svg` into the project's asset pipeline.
>
> When you're done, report: which values you had to interpret, where the mobile layout deviates from the desktop design, and any place the codebase's existing components forced a visual compromise.
