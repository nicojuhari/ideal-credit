# Migration Plan: Nuxt 4 → Next.js + shadcn/ui

## Overview

Full framework rewrite (Vue → React). The site has ~15 pages, ~20 components, 1 server API endpoint, Storyblok CMS, and a custom loan calculator package (`ideal-credit`).

---

## Phase 1 — Project Bootstrap

### 1.1 Initialize Next.js project
- `npx create-next-app@latest` with TypeScript, App Router, Tailwind CSS
- Use the `app/` directory (Next.js 13+ App Router — equivalent to Nuxt's file-based routing)

### 1.2 Install and configure shadcn/ui
- `npx shadcn@latest init`
- Configure theme colors to match current brand: primary orange (`#ff9a00`), neutral dark grays
- shadcn/ui components needed: Button, Input, Slider, Select, Dialog (Modal), Accordion (FAQ), Table, Form, Card

### 1.3 Migrate Tailwind theme
- Port the custom color palette from `app.config.js` and `main.css` into `tailwind.config.ts`
- Colors: `brand-*` (orange), `black-*` (dark grays), `secondary-*` (greens)
- Preserve CSS custom properties in `globals.css`
- Migrate custom classes: `.bg-squares`, `.cs-blur`, `.container`, `.card`, `.card-title`, `.link`, range slider styles

### 1.4 Environment & config
- `.env.local`: `STORYBLOK_ACCESS_TOKEN`, `ICM_API_URL`, `SECRET_KEY`, `BASE_URL`
- `next.config.ts`: redirects (301s), image domains

---

## Phase 2 — Routing & Layout

### 2.1 Map pages (Nuxt → Next.js App Router)

| Nuxt (`app/pages/`) | Next.js (`app/`) |
|---|---|
| `index.vue` | `app/page.tsx` |
| `credite/index.vue` | `app/credite/page.tsx` |
| `credite/credit-*.vue` (9 files) | `app/credite/[slug]/page.tsx` or 9 static files |
| `blog/index.vue` | `app/blog/page.tsx` |
| `blog/[slug].vue` | `app/blog/[slug]/page.tsx` |
| `cerere-de-credit-online.vue` | `app/cerere-de-credit-online/page.tsx` |
| `contacte.vue` | `app/contacte/page.tsx` |
| `despre-noi.vue` | `app/despre-noi/page.tsx` |
| `cookies.vue` | `app/cookies/page.tsx` |
| `privacy.vue` | `app/privacy/page.tsx` |
| `terms.vue` | `app/terms/page.tsx` |
| `autoritatea-de-supraveghere.vue` | `app/autoritatea-de-supraveghere/page.tsx` |

### 2.2 Root layout
- `app/layout.tsx` — replaces `app.vue`, includes `<Header>` and `<Footer>`
- Handle font loading, analytics scripts (FB Pixel, GTags, Hotjar, Ahrefs) via `next/script`

### 2.3 301 Redirects
- Move all `routeRules` redirects from `nuxt.config.ts` to `next.config.ts` under `redirects()`
- Example: `/credit-de-consum` → `/credite/credit-pentru-nevoi-personale`

### 2.4 Trailing slash middleware
- Add `trailingSlash: false` in `next.config.ts` (replaces the global middleware)

---

## Phase 3 — Component Migration (Vue → React)

### shadcn/ui component equivalents

| Nuxt UI Component | shadcn/ui Replacement |
|---|---|
| `UModal` | `<Dialog>` |
| `UButton` | `<Button>` |
| `UInput` | `<Input>` |
| `USlider` | `<Slider>` |
| `USelect` | `<Select>` |
| `UAccordion` | `<Accordion>` |
| `UTable` | `<Table>` |
| `UCheckbox` | `<Checkbox>` |
| `UForm` / `UFormField` | `react-hook-form` + `<Form>` |
| Phosphor Icons (`ph:`) | `@phosphor-icons/react` |

### Migration priority order

1. `Header.vue` → `components/includes/Header.tsx` (navigation, mobile burger menu)
2. `Footer.vue` → `components/includes/Footer.tsx`
3. `CalculatorCredit.vue` → `components/CalculatorCredit.tsx` (sliders, `ideal-credit` package)
4. `GraficTable.vue` → `components/GraficTable.tsx`
5. `FAQ.vue` → `components/FAQ.tsx` (Accordion)
6. `BlogCards.vue` → `components/BlogCards.tsx`
7. `CreditConditions.vue`, `HowItWorks.vue`, `PaymentMethods.vue`
8. `RecenziiClient.vue`, `ShortAboutUs.vue`, `ServiciiList.vue`, `ListaOficiilor.vue`
9. `CallToAction.vue`, `RegulamenteList.vue`
10. UI wrappers: `PhoneButton`, `MainCTA`, `ButtonsCTA`, `Modal`, `Loading`, `Info`, `RecenziiButton`
11. Icon components (replace with `@phosphor-icons/react`)

### Vue → React pattern mappings

| Vue (Nuxt) | React (Next.js) |
|---|---|
| `ref()` | `useState()` |
| `computed()` | `useMemo()` |
| `watch()` / `watchEffect()` | `useEffect()` |
| `defineProps` | function props/interface |
| `v-model` | controlled input with `value` + `onChange` |
| `v-if` / `v-show` | conditional rendering `{condition && <Component>}` |
| `v-for` | `.map()` |
| `@click` | `onClick` |
| `<NuxtLink>` | `<Link>` from `next/link` |
| `useRouter()` | `useRouter()` from `next/navigation` |
| `navigateTo()` | `router.push()` |

---

## Phase 4 — Data Fetching

### 4.1 Storyblok
- Install `@storyblok/react` (official React SDK)
- Blog listing (`app/blog/page.tsx`): Server Component fetching all stories with `starts_with: "blog"`
- Blog post (`app/blog/[slug]/page.tsx`): `generateStaticParams` for SSG + rich text via `@storyblok/richtext`
- Sitemap: use `app/sitemap.ts` (Next.js built-in) — fetches all blog slugs from Storyblok at build time

### 4.2 Loan calculator
- `ideal-credit` package is framework-agnostic — import `createGrafic` and `calcDAE` directly
- Use `useState`/`useMemo` in place of Vue `ref`/`computed`
- Mark component as `"use client"` (requires browser interaction)

### 4.3 Form submission API
- Rewrite `server/api/cerere-online.post.ts` → `app/api/cerere-online/route.ts` (Next.js Route Handler)
- Same logic: validate body, proxy POST to `ICM_API_URL` with `x-api-key` header
- Export `async function POST(req: Request)`

### 4.4 Contact & application forms
- Use `react-hook-form` + `zod` for validation (replaces `utils/index.ts` validators)
- Multi-step form state: `useState` for step index + per-step field values

---

## Phase 5 — SEO & Metadata

### 5.1 Page metadata
- Replace `useSeoMeta()` and `useHead()` with Next.js `export const metadata` (static) or `generateMetadata()` (dynamic)
- Open Graph, Twitter cards, canonical URLs all supported natively in Next.js

### 5.2 JSON-LD schemas
- Port `utils/schema.ts` — same schemas (FinancialService, LocalBusiness, LoanOrCredit, Article)
- Inject via `<script type="application/ld+json">` in Server Components

### 5.3 Sitemap & robots
- `app/sitemap.ts` — fetches blog slugs from Storyblok at build time, returns static page paths
- `app/robots.ts` — replaces `@nuxtjs/seo` robots config

---

## Phase 6 — Analytics & Tracking

All plugins become `<Script>` components in `app/layout.tsx`:

| Service | Implementation |
|---|---|
| Facebook Pixel | Custom hook `useFacebookPixel`, load with `next/script strategy="afterInteractive"` |
| Hotjar | `<Script src="..." strategy="afterInteractive">` |
| Ahrefs Analytics | `<Script>` tag in layout |
| Google Analytics | `<Script src="gtag">` + inline config (ID: `G-YXDZGPPXPH`) |

FB Pixel events to port: `CustomizeProduct` (calculator interaction), `Lead` (form submission), `Contact` (contact page visit).

---

## Phase 7 — Static Generation & Deployment

### 7.1 Build config
- Static export (current hosting): `output: 'export'` in `next.config.ts`
- Alternatively, standard Next.js build for SSR/edge hosting

### 7.2 `generateStaticParams`
- `/credite/[slug]`: return the 9 static credit type slugs
- `/blog/[slug]`: fetch all slugs from Storyblok at build time

### 7.3 Image optimization
- Replace `<img>` tags with `next/image` (`<Image>`)
- Configure `remotePatterns` for Storyblok image CDN (`a.storyblok.com`) in `next.config.ts`

---

## Effort by Phase

| Phase | Complexity | Notes |
|---|---|---|
| 1 — Bootstrap | Low | ~1 day |
| 2 — Routing & Layout | Low-Medium | ~1 day |
| 3 — Components (20 components) | High | Most effort, ~4-6 days |
| 4 — Data Fetching | Medium | ~2 days |
| 5 — SEO | Low-Medium | ~1 day |
| 6 — Analytics | Low | ~0.5 day |
| 7 — Static Generation & Deploy | Low | ~0.5 day |

---

## Key Risks

1. **`ideal-credit` package** — verify it has no Vue-specific exports; should work in React as-is since it's a pure calculation library
2. **Storyblok rich text** — `@storyblok/richtext` is framework-agnostic but rendering Vue components inside rich text blocks will need React resolver equivalents
3. **Multi-step form** — `cerere-de-credit-online` has 4 complex steps with validation; `react-hook-form` with step-based validation needs careful porting
4. **CSS parity** — custom classes (`.bg-squares` grid pattern, `.cs-blur` blur effects, range slider thumb styles) need manual migration into Tailwind utilities or globals.css
5. **shadcn/ui dark theme** — current site is dark-only; shadcn/ui defaults to light mode, so CSS variable mapping for dark theme needs to be set up correctly

---

## Dependencies to Install

```bash
# Core
npx create-next-app@latest
npx shadcn@latest init

# shadcn/ui components
npx shadcn@latest add button input slider select dialog accordion table form card checkbox

# Storyblok
npm install @storyblok/react @storyblok/richtext

# Forms & validation
npm install react-hook-form zod @hookform/resolvers

# Icons
npm install @phosphor-icons/react

# Loan calculator (existing)
npm install ideal-credit
```
