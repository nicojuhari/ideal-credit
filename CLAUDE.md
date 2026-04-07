# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

This repository is **mid-migration** from Nuxt 4 (Vue 3) to **Next.js + shadcn/ui (React)**. The original Nuxt project lives in `nuxt-project/` and is the reference implementation. The new Next.js project will be built here. See `plan.md` for the full migration plan.

## Reference Codebase

Always read source components and pages from `nuxt-project/app/` when migrating. Key reference paths:
- Pages: `nuxt-project/app/pages/`
- Components: `nuxt-project/app/components/`
- CSS/theme: `nuxt-project/app/assets/css/`
- Server API: `nuxt-project/server/api/`
- SEO schemas: `nuxt-project/app/utils/schema.ts`
- Nuxt config (redirects, prerender rules): `nuxt-project/nuxt.config.ts`

## Target Stack (Next.js project)

- **Framework**: Next.js App Router (`app/` directory)
- **UI**: shadcn/ui + Tailwind CSS
- **CMS**: Storyblok (`@storyblok/react`)
- **Forms**: `react-hook-form` + `zod`
- **Icons**: `@phosphor-icons/react` (replaces Phosphor iconify set)
- **Loan calc**: `ideal-credit` npm package (framework-agnostic, reuse as-is)

## Commands (Nuxt reference project)

```bash
cd nuxt-project
npm run dev        # dev server on port 3001
npm run build      # SSR build
npm run generate   # static site generation (used for production)
npm run preview    # preview generated site
```

## Architecture

### Routing
All pages are statically prerendered (SSG). The Nuxt project uses file-based routing under `app/pages/`. In Next.js this maps to `app/[route]/page.tsx`. The 9 credit product pages (`credite/credit-*.vue`) are static routes — not dynamic — because each has unique content and SEO metadata.

### Loan Calculator
`CalculatorCredit` is the most complex interactive component. It uses:
- `ideal-credit` package: `createGrafic({ sum, period, interest })` → payment schedule array; `calcDAE(grafic, sum)` → effective annual rate
- Sliders bound to `creditSuma` (10,000–300,000 MDL, step 500) and `creditTermen` (6–60 months, step 1)
- Fixed interest rate: 4% monthly
- The pre-contract modal renders an inline hidden `<div ref="preContractRef">` containing a full legal table and `<GraficTable>` — this HTML is cloned into the modal via `v-html`

### Data Flow
- **Blog**: Fetched from Storyblok at build time. Stories have `starts_with: "blog"`. Rich text rendered with `@storyblok/richtext`.
- **Loan application form** (`cerere-de-credit-online`): 4-step form. On submit, POSTs to `/api/cerere-online` which proxies to the ICM backend API with `x-api-key` auth header.
- **Sitemap**: Dynamically generated from Storyblok blog slugs at `server/api/__sitemap__/urls.ts`.

### Styling System
Dark-only theme. Color tokens:
- `brand-500` = `#ff9a00` (primary orange, buttons, accents)
- `black-400` = `#212121` / `black-800` = `#0b0b0b` (backgrounds)
- `gray-*` = neutral text/borders
- `green-*` = secondary/success

Custom global classes defined in `nuxt-project/app/assets/css/global.css`: `.container` (max-w-5xl), `.card` (rounded card surface), `.card-title`, `.title`, `.link`, `.input-calculator`. These need to be ported to Tailwind utilities or `globals.css` in the Next.js project.

Visual effects to preserve: `.bg-squares` (60px grid pattern hero background), `.cs-blur` (decorative blur), glassmorphism header (`backdrop-blur-lg`), custom range slider thumb (orange).

### SEO
Each page uses `useSeoMeta()` + `useHead()` with full Open Graph, JSON-LD schemas, and canonical URLs. Schemas are defined in `nuxt-project/app/utils/schema.ts` — port these as plain objects, inject via `<script type="application/ld+json">` in Next.js Server Components or `generateMetadata()`.

### Analytics
Three tracking tools initialized as client-only plugins:
- **Facebook Pixel** (ID: `2254113158275780`): `useFacebookPixel()` composable fires `CustomizeProduct` (calculator interaction, once), `Lead` (form submit), `Contact` (contact page)
- **Google Analytics**: gtag ID `G-YXDZGPPXPH`
- **Hotjar** + **Ahrefs**: script tags

### 301 Redirects
Defined in `nuxt-project/nuxt.config.ts` under `routeRules`. Must be ported to `next.config.ts` `redirects()`. The `/autoritatea-de-supraveghere` page exists but is excluded from the sitemap.

## Environment Variables

```
ICM_API_URL=       # Backend API base URL (proxied by /api/cerere-online)
SECRET_KEY=        # x-api-key header for ICM API
STORYBLOK_ACCESS_TOKEN=HkdYYsU6W0SQKNL9nL1seQtt
BASE_URL=https://idealcredit.md
```
