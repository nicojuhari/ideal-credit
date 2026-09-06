# Site Map - target structure after the September 2026 rebuild

## Last Updated

2026-09-06 by /keyword-research (site audit on Search Console, 6 months to 2026-09-04). Owner decisions recorded the same day.

## Principles

- Inner pages are pure service/product descriptions: clear, simple, aimed at business owners and planned personal borrowers.
- Blog restarts from zero with an editorial style: analysis, statistics, experience, point of view, Moldova vs. region vs. global. Style to be defined; nothing published in the old how-to style.
- No microloan-era signals anywhere: no "decizie în 2-3 ore" as the lead, no "doar cu buletinul", no "fără refuz", no "istoric negativ" promises, no payday product, no segment pages (medici, militari, polițiști).
- Everything rebuilt in v4 under `app/(v4)/`; legacy routes removed as they are migrated.

## Target pages (18 public URLs)

| URL | Role | Source of content | Status |
| --- | --- | --- | --- |
| `/` | Home, business-first | v4, live | keep; verify "fără refuz" impressions fall after rebuild |
| `/credite` | Product index. Carries "credit pentru afaceri" and "persoane juridice" | rebuild | to do |
| `/credite/credit-pentru-afaceri-mici` | Hero product. Absorbs: documents list, process steps, refinanțare/consolidation as a use case | v4, live | extend |
| `/credite/credit-capital-de-lucru` | Business: cash-flow gap, suppliers, stock, salaries | rebuild | to do |
| `/credite/credit-investitional` | Business: equipment (incl. second-hand), space, vehicles | rebuild | to do |
| `/credite/credit-pentru-agricultura` | Business: GȚ, SRL agro, harvest-adapted schedule | rebuild | to do |
| `/credite/credit-pentru-nevoi-personale` | Single personal-credit page. Sections: reparație, cheltuieli planificate, angajați la stat | rebuild, merge | to do |
| `/credite/credit-pentru-automobil` | Personal: car, not secured on the car, any seller | rebuild | to do |
| `/cerere-de-credit-online` | Request form | live | restyle in v4 |
| `/calculator-credit` | Calculator; explain first/last instalment and total | live | restyle, link from every product page |
| `/despre-noi` | Expert positioning: 16 years, CNPF-supervised, offices, how decisions are made, partners | rewrite | to do |
| `/contacte` | Offices, phone, hours | live | restyle |
| `/blog` | New editorial blog | empty shell until new style defined | to do |
| `/autoritatea-de-supraveghere` | Regulatory | live | keep |
| `/privacy`, `/cookies`, `/terms` | Legal | live | keep |
| `/design-system` | Internal reference | live | noindex |

## Removed pages and redirects (all 301)

| Removed URL | Redirect to | Reason | 6-mo data lost |
| --- | --- | --- | --- |
| `/credite/refinantare` | `/credite/credit-pentru-afaceri-mici` | Distressed-segment traffic; refinanțare stays as a business use case | 1.115 clicks, 13.317 impr |
| `/credite/credit-pina-la-salariu` | `/credite/credit-pentru-nevoi-personale` | Payday product discontinued | 48 clicks |
| `/credite/credit-pentru-bugetari` | `/credite/credit-pentru-nevoi-personale` | Segment page merged as a section | 5 clicks |
| `/credite/credit-pentru-reparatie` | `/credite/credit-pentru-nevoi-personale` | Merged as a section (keep the "reparație" H2 to retain pos 8 ranking) | 27 clicks |
| `/credite/credit-pentru-medici`, `-militari`, `-politisti` | `/credite/credit-pentru-nevoi-personale` | Update existing chained redirects to the final target | ~1 click |
| `/index.html` | `/` | Missing redirect | 32 clicks |
| `/blog/ghid-credit-afaceri-ocn-moldova` | `/credite/credit-pentru-afaceri-mici` | Process steps absorbed by product page | 5 clicks |
| `/blog/documente-necesare-credit-afaceri-moldova` | `/credite/credit-pentru-afaceri-mici` | Documents list absorbed by product page | 0 |
| `/blog/ocn-vs-banca-credit-afaceri-moldova` | `/credite` | Replaced later by an editorial piece | 0 |
| `/blog/cum-alegi-credit-nebancar-pentru-afaceri` | `/credite/credit-pentru-afaceri-mici` | Old style | 1 |
| `/blog/costul-real-al-unui-credit-nebancar` | `/calculator-credit` | Replaced by the rate egale vs descrescătoare / DAE editorial piece | 2 |
| `/blog/credit-cu-buletinul-ce-cere-ideal-credit` | `/credite/credit-pentru-nevoi-personale` | Microloan-era title | 4 |
| `/blog/credit-rapid-decizie-in-ore` | `/despre-noi` | Process belongs on despre-noi | 1 |
| `/blog/istoricul-de-credit-si-sansele-tale` | `/credite/credit-pentru-nevoi-personale` | Distressed-segment magnet | 21 (+20 on old URL) |
| Old Storyblok slugs (6 chained redirects) | Re-point to the final targets above | Avoid redirect chains | - |
| `/blog/ce-se-intampla-daca-nu-poti-rambursa-un-credit` | `/blog` (unchanged) | Still 874 impr at pos 10.7; will fade | 11 |

## What the product pages must absorb from the deleted blog

- Business page: the step-by-step process (phone → remote analysis → appointment when the picture is clear → signing), the documents list per legal form (SRL, ÎI, GȚ), fidejusor vs gaj thresholds, early repayment, decreasing instalments.
- Personal page: what income proof is accepted, how instalments decrease, early repayment, the reparație and public-sector sections.
- Despre noi: 16 years, CNPF supervision, two offices, who decides and how, partners and institutions worked with (to collect from the owner).

## Search Console follow-up

- Sitemap: remove deleted URLs, add nothing for `/blog` articles until new posts exist.
- Expect total clicks to fall by roughly 60–70% as distressed traffic goes; the metric that matters is clicks on business pages and the form.
- Re-export Search Console in December 2026 and compare against the baseline in `brand/keyword-plan.md`.

## Open items for the owner

- Blog editorial direction (style, lanes, cadence) - to define; the four briefs in `campaigns/content-plan/` are to be re-cut to that style.
- List of partners, institutions and "big names" to reference on despre-noi.
- Whether a Russian version is in scope for the rebuild.
