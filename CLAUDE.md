# idealcredit.md — agent guide

Next.js 16 (App Router) + Tailwind v4 + shadcn/base-ui. Romanian (ro-MD) content — keep
copy verbatim with diacritics (ă â î ș ț). `npm run dev` on port 4000. `main` is PR-only.

## Design system v4 (standing rules — do not drift)

Everything new is built on the v4 design system. Read `design-system/README.md` before
touching UI; the living reference is the `/design-system` route.

- **Routing:** new pages go under `app/(v4)/`; untouched old routes live under `app/(legacy)/`.
  Both resolve to the same URLs. Migrating a page = move it between the groups and rebuild it
  from `@/components/ds`.
- **Tokens only.** Colours, hairlines, type scale, spacing and breakpoints come from
  `design-system/tokens.css`. Never write a raw hex/rgb, a `font-family`, or a one-off grey.
  If a value is missing, add a token first.
- **Square corners.** No `border-radius`, no `rounded-*`. The round logo is the only curve —
  never inside a container, never echoed.
- **Exactly two hairlines:** `border-line` (0.14) and `border-line-strong` (0.24). Grids of
  cells use `HairlineGrid` (gap:1px on a hairline background), not per-cell borders.
- **No shadows, no gradients, no imagery, no icon library.** Graphics are the logo, small
  orange squares and the mono glyphs `+ − ✓ →`.
- **Mono (`font-figure`, IBM Plex Mono) for every figure, label, eyebrow, money, rate, term,
  DAE.** Archivo (`font-ui`) for everything else. Fonts are self-hosted via `next/font`.
- **Layout invariants:** grid tracks are always `minmax(0, Xfr)` (never bare `fr`); every
  horizontal button row has `flex-wrap: wrap`; centred flex buttons with interpolated labels
  need `gap: 0.32em` (built into `Button` — pass label pieces as separate spans).
- **AA contrast floors:** nothing under 16px dimmer than `text-3` (#A39C8F) on `bg`; anything on
  an orange fill uses ink (`text-bg`), never paper.
- **Accessibility is part of the component, not a follow-up:** real `<button>`/`<a>`,
  checkboxes + labels, disclosure pattern for FAQs, native ranges with `aria-valuetext`,
  logo `alt=""`, `tel:` links, orange `:focus-visible` ring, 44px hit targets.
- **Reveal is fail-safe and never carries content.** Stats are static text — no count-ups.
- **Enforcement:** `npm run lint` (ESLint + `scripts/design-lint.mjs`) must pass; it also runs
  as `prebuild`. `npm test` runs the calculator maths test.
- **`cn()` knows the tokens** (`lib/utils.ts`): when adding a colour or text-size token, add its
  name there too, or tailwind-merge will drop one of `text-<colour>` / `text-<size>`.
