---
type: seo-meta-audit
campaign: site-copy-audit-2026-11
date: 2026-11-10
---

# Titles, meta descriptions and on-page SEO, 2026-11-10

Checked from the rendered HTML of all 17 sitemap pages (dev server), not from source.
Limits used: title ≤ 60 characters, description 110-155. Result: 17/17 within limits,
1 H1 per page, all JSON-LD parses.

## Titles and descriptions

| Page | Before | After |
|---|---|---|
| / | D 162 | D 126 |
| /cerere-de-credit-online | Title Case, two pipes | "Cerere de credit online, în 5 minute \| Ideal Credit" |
| /calculator-credit | Title Case | sentence case, description rewritten |
| /credite | T 73, D 159 | T 56, D 120 |
| nevoi personale | T 72 | T 55 |
| afaceri | T 64, D 179 | T 53, D 139 |
| investițional | T 78, D 196 | T 50, D 132 |
| agricultură | D 175 | D 134 |
| automobil | T 66, D 170 | T 49, D 129 |
| reparație | D 167 | D 127 |
| despre-noi | brand first | "Despre noi: credite în Moldova din 2010 \| Ideal Credit" |
| contacte | Title Case, D 102 | D 128 with hours and cities |
| dicționar | " - " join | colon |
| legal × 4 | Title Case, "GDPR" claim, "Aflați" | sentence case, plain descriptions |

All titles now end in "| Ideal Credit". The OG title follows the page title everywhere.

## On-page fixes
- Legal H1s rendered as "ConfidențialitateOCN Ideal Credit SRL" (a `<br/>` with no space). Now one clean H1 each.
- Schema data that contradicted the pages: personal loan term 6-60 → 12-48 months; business loan 10.000-300.000 → 50.000-500.000 lei; investment loan minimum 10.000 → 50.000.
- Home: removed a second FinancialService entity (duplicated the site-wide business graph, with old "înainte de a recomanda" copy) and the HowTo schema (Google no longer shows HowTo results; its text didn't match the page).
- Organization: added `foundingDate` 2010-04-15.
- FAQ: 8 answers existed only in code, shown nowhere. 3 useful ones moved to the visible /credite FAQ (and its schema); 5 duplicates deleted. Every FAQPage schema now matches visible questions.
- Dictionary: added `DefinedTermSet` schema for the 18 terms.
- Sitemap: all `lastModified` set to 2026-11-10 (every page changed); home `weekly` → `monthly` (evergreen content).
- robots.txt: `Disallow: /api/`.

## Already fine
Canonical on every page, `lang="ro-MD"`, OG image on every page, 404 is `noindex`, BreadcrumbList on every page with a visible breadcrumb, LoanOrCredit on each credit page, LocalBusiness for both offices with hours.

## Not done (worth considering)
- The dictionary page still has the old hero design (no breadcrumb). Small redesign job.
- The organization logo in schema is an SVG. Google prefers a PNG of at least 112×112 for the logo.
- Google Search Console: after deploy, resubmit the sitemap and request indexing for the 6 credit pages.
