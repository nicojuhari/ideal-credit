# Asset Registry - Ideal Credit

Last updated: 2026-09-16

## Active Assets

| Name                                      | Type          | Date       | Campaign       | Status   | Notes                                                                                                                                                                      |
| ----------------------------------------- | ------------- | ---------- | -------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keyword-plan                              | Strategy      | 2026-05-18 | SEO Foundation | active   | 5 pillars, 28 clusters, 90-day calendar (blog-article rows retired 2026-09-16, see Retired Assets)                                                                          |
| blog-editorial-strategy                   | Strategy      | 2026-09-16 | Blog / Dincolo de Cifre | active | New standalone editorial identity replacing the retired blog model. No fixed taxonomy - topic gate only (on-subject, real substance, valuable). One-topic-at-a-time 4-gate workflow: pitch → research → structure → draft. File: brand/blog-editorial-strategy.md |
| blog-infrastructure                       | Technical     | 2026-09-16 | Blog / Dincolo de Cifre | active | Built the actual /blog route: MDX (Rust compiler, native GFM tables via `experimental.mdxRs`), recharts bar chart and shadcn-table-based prose table restyled to the "dc" hairline/mono system, listing page, article layout, lib/blog-posts.ts registry. New deps: @next/mdx, @mdx-js/react, @mdx-js/loader, recharts. Removed the stale bare `/blog` → `/credite` redirect in next.config.ts. |
| dobanzi-mari-nu-doar-moldova               | Blog Article  | 2026-09-16 | Blog / Dincolo de Cifre | live   | First article through the full 4-gate workflow, now live at /blog/dobanzi-mari-nu-doar-moldova. Renamed + retitled 2026-09-16 (was "dobanzile-mari-nu-sunt-despre-moldova") after owner review: title now leads with "not unique to Moldova" instead of the abstract "not about Moldova" framing; cut the 3 redundant intro paragraphs (dek now carries that setup alone); added Article/Blog JSON-LD schema + OG images; shortened title/meta description for SEO tooling. Compares business lending rates: Turkey, Egypt, Romania, Baltics, EU average, Malta, Japan (table + bar chart, Moldova included with bank/non-bank caveat); Baltics-are-priciest-in-eurozone twist; decomposes market depth/currency risk/collateral enforcement/competition; central bank role; what would lower rates. Social promo caption (LinkedIn + Facebook, one version, #DincoloDeCifre #IdealCredit #EconomieMoldova) stored as an MDX comment at the bottom of the article file - see brand/blog-editorial-strategy.md "Social promo". Source draft: campaigns/content/dincolo-de-cifre/dobanzi-mari-nu-doar-moldova.md. Live: app/blog/(articles)/dobanzi-mari-nu-doar-moldova/page.mdx |

| social-media-strategy               | Strategy      | 2026-07-08 | Social Media   | active   | Revised: Moldova money/finance/business number-reveal content, not product marketing. Adapted from numbers-around-us format. Cadence updated to 2 short posts + 1 carousel/week; language bar set to 10-15yo readability, max one technical term/post. File: brand/social-media-strategy.md |
| bnm-rata-de-baza                    | Social Post   | 2026-07-07 | Social Media   | draft    | Carousel, 6 slides. BNM rate hike to 7% + mortgage index effect. File: campaigns/social/2026-07-bnm-rata-de-baza.md |
| remitente-diaspora-decembrie        | Social Post   | 2026-07-08 | Social Media   | draft    | Short single-image post. December 2025 = biggest remittance month (173.77M$ vs 138M$ avg). File: campaigns/social/2026-07-remitente-diaspora-decembrie.md |
| social-design-system                | Strategy      | 2026-07-08 | Social Media   | active   | Visual spec for short/carousel posts - sizes, colors (site's black/orange tokens), Inter type scale, layout templates, no-AI-imagery rule. File: brand/social-design-system.md |
| social-templates-v4                 | Template      | 2026-09-06 | Social Media   | active   | Chosen "Panou de date" template in dark (Tue) + light (Thu) themes, posts.js + build.mjs export. Dir: campaigns/social/templates/ |
| 2026-09-week-2                      | Social Post   | 2026-09-06 | Social Media   | scheduled | 01 John Paul DeJoria 700 $ (dark, 08.09) · 02 termen lung +20.500 MDL (light, 10.09). content.md + image.png per folder |
| creative-kit                        | Strategy      | 2026-09-06 | Social Media   | active   | Visual DNA for social graphics: v4 tokens, Archivo + IBM Plex Mono, no imagery, template directions table. File: brand/creative-kit.md |
| 2026-09-week-3                      | Social Post   | 2026-09-06 | Social Media   | scheduled | 01 Mike Markkula 170.000 $ Apple loan (dark, 15.09) · 02 rate egale vs descrescătoare 2.970 MDL (light, 17.09). Scheduled in Buffer on LinkedIn, Instagram, Facebook |

| keyword-plan                                       | Strategy      | 2026-09-11 | SEO Foundation | active   | Full rebuild on real GSC data (999 queries, 5,335 clicks). Added Personal pillar (was 100% business, 0% personal despite stated 70/30 split). Documents excluded distressed-borrower segment (42% of clicks, explicitly not targeted per owner decision). Replaces 2026-05-18 plan (archived at `campaigns/keywords/keyword-plan-2026-05-18.md`). |

## Retired Assets

| Name | Type | Retired | Notes |
| ---- | ---- | ------- | ----- |
| ghid-credit-afaceri-ocn-moldova | Content Brief + Blog Article | 2026-09-16 | Blog reset — old keyword-popularity model retired. Content already absorbed into `/credite/credit-pentru-afaceri-mici` blocks 1-7; brief and archived MDX deleted. |
| documente-necesare-credit-afaceri-moldova | Content Brief + Blog Article | 2026-09-16 | Blog reset. Content already absorbed into `/credite/credit-pentru-afaceri-mici` block 6; brief deleted. |
| ocn-vs-banca-credit-afaceri-moldova | Content Brief + Blog Article | 2026-09-16 | Blog reset. Content already absorbed into `/credite/credit-pentru-afaceri-mici` block 5 + `/credite` index; brief deleted. |
| credit-afaceri-fara-gaj-moldova | Content Brief | 2026-09-16 | Blog reset. Was already superseded into a section + FAQ on `credit-pentru-afaceri-mici` (2026-09-11); brief deleted. |
| finantare-causeni-regiune | Content Brief | 2026-09-16 | Blog reset — never built, keyword-driven backlog item, brief deleted. |
| ghid-credit-personal-proiecte-planificate-moldova | Content Brief | 2026-09-16 | Blog reset — never built, keyword-driven backlog item, brief deleted. |
| credit-auto-moldova-cum-alegi | Content Brief | 2026-09-16 | Blog reset — never built, keyword-driven backlog item, brief deleted. |
| blog-archive (5 old articles + BLOG-PLAN.md) | Strategy + Articles | 2026-09-16 | Old blog strategy (decision-intent, product-adjacent framing) fully retired. New direction: independent business/finance knowledge hub, topic-driven not keyword-driven. See new blog strategy doc once written. |

---

_Append new assets after each skill run. Format: | asset-name | type | date | campaign | status | notes |_
