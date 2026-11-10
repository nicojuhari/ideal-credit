# Keyword Plan - Ideal Credit

## Last Updated

2026-11-09 by /keyword-research (refresh after repositioning - replaces the
2026-09-11 plan, archived at `campaigns/keywords/keyword-plan-2026-09-11.md`).
What changed: the blog is gone, so every cluster now routes to a **service page**
(`/credite/<slug>`) or a **solution page** (one real situation → plan → when a loan
helps / doesn't → matching service). Home H1 is now "Credite nebancare pentru
afaceri și nevoi personale". Focus ~80% business / ~20% personal.

## Business Context

- Offer: non-bank credit (OCN), 16 years, offices in Căușeni (HQ) and Chișinău.
  Business: mostly 50.000-500.000 lei (sometimes more), decision 1-2 days, analysis
  by phone, signing at the office. Personal: from 10.000 lei, planned purchases.
- Audience: owners of micro/small/medium firms (SRL, ÎI) ~80%; individuals financing
  a planned purchase ~20%.
- Goal: leads that match the target client, not raw traffic. Clicks have halved
  since mid-Sept 2026 (~310 → ~150/week) because the excluded distressed queries
  were half of all clicks; this plan rebuilds on business demand.
- Positioning shapes the angle, not the keywords: analysis of goal + financial
  situation (see `brand/strategy.md`).
- **Excluded (owner decision, unchanged):** fără refuz, istoric negativ, fără
  verificare, fără loc de muncă / venit, până la salariu, refinanțare as a topic,
  online pe card / urgent azi. Never in titles, H1/H2 or as targets.

## Data Sources

- GSC: CSV export `campaigns/keywords/search-console-09-11/` (8 Aug - 7 Nov 2026,
  queries only, no page dimension). No API access.
- Google Suggest via `suggest.py --lang ro` (needs `SSL_CERT_FILE=/etc/ssl/cert.pem`).
  Mixes Romania and Moldova; one agent hit HTTP 403 mid-run.
- SERPs: US/Bing-proxy search results + fetched competitor pages. Google.md order,
  PAA and AI Overviews were **not** visible.
- No Ahrefs/Semrush: no volume numbers anywhere in this plan.

**Data: LIVE (suggest, partly blocked + ~50 proxy SERPs + GSC export) - Google.md
rankings, PAA and AI Overviews NOT VERIFIED.**

---

## Pillar Validation

| # | Pillar | Demand | Market | Competitive | Advantage | Verdict |
|---|---|---|---|---|---|---|
| 1 | Credit pentru afaceri / persoane juridice | PASS - GSC 319 impr on 4 queries (pos 22-31); ~50 suggest completions for "credite persoane juridice" | PASS | PASS - no OCN page targets "persoane juridice"; results are bank PDFs and law texts | YES - analysis + 16 yrs | **KEEP - lead pillar** |
| 2 | Credite nebancare (category) | PASS - GSC "credite nebancare" 1,641 impr pos 19.8; "credit nebancar" 369 pos 7.5; 27 completions | PASS | PASS - SERP is BNM, monitorul.fisc, press; no lender page | PARTIAL - trust (16 yrs, 2 offices) | **KEEP - served by the home page, no new URL** (a separate page would cannibalize) |
| 3 | Business situations (stoc, sezon, comenzi, echipament) | **FAIL** - zero completions for stoc / sezon / extindere / credit investițional; only "deschiderea unei afaceri", "acte necesare", "capital de lucru", "utilaje agricole" have phrasing | PASS for product phrasing | PASS - no OCN has situation pages | YES | **DEMOTE** - not a pillar. Situations become sections inside product-keyword pages; only the 3 phrasings with demand get their own pages |
| 4 | Agricultură + local | FAIL - "credit agricol" completions are all Crédit Agricole; city test fails (only Chișinău and Bălți have non-brand demand) | PASS | PASS - no OCN explains AIPA subsidies; no Căușeni page anywhere | YES - Căușeni HQ | **DEMOTE** - agri page refresh + 2 office pages (Chișinău, Căușeni). **No programmatic city pages** |
| 5 | Personal planned purchases | PASS - GSC "credit nevoi personale" 151 pos 13; "credite persoane fizice moldova" 105 pos 11; "prima mașină" 71 pos 21 | PASS | MIXED - banks own the hubs; planned-purchase guidance is uncontested | PARTIAL | **KEEP at ~20%** |

---

## Cluster Priorities

| Cluster | Pillar | Intent | Route | zero_click_risk | citation_path | Priority |
|---|---|---|---|---|---|---|
| Credit pentru afaceri + persoane juridice (fix existing page) | 1 | transactional | fix `/credite/credit-pentru-afaceri` | LOW | YES | **NOW** (striking distance) |
| Credite nebancare / credit nebancar (home) | 2 | commercial | fix home | LOW | YES | **NOW** (striking distance) |
| Nevoi personale + credite persoane fizice + credit de consum | 5 | transactional | fix `/credite/credit-pentru-nevoi-personale` | LOW | NO | **NOW** (striking distance) |
| Acte necesare credit pe firmă (SRL/ÎI) | 1 | informational → transactional | /seo-content (solution page) | MED | YES - SERP is PDFs + a forum | **NOW** - brief written |
| Credit pentru agricultură (refresh + remove refinanțare FAQ) | 4 | transactional | fix `/credite/credit-pentru-agricultura` | LOW | YES | **NOW** (cheap, removes a conflict with the owner's exclusion) |
| Credit pentru deschiderea unei afaceri / firmă nouă | 1 | commercial | /seo-content | MED | YES - no OCN page; Victoriabank requires 12 months of activity | **NOW** - owner confirmed 2026-11-09: yes, Ideal lends to new firms |
| Credit nebancar sau bancar pentru firmă | 2 | commercial | /seo-content | MED | YES - only BNM answers it; AI summaries call OCN "expensive" | NEXT - cost wording needs owner sign-off |
| Credit cu gaj imobil pentru afaceri (sume mari) | 1 | transactional | section or page | LOW | NO - banks + 999.md | NEXT - owner confirmed: real-estate collateral accepted, even from ~200k |
| Credite nebancare în Chișinău (office page) | 4 | local | service page | LOW | NO | NEXT - GSC 754 impr, but intent is mostly consumer |
| Credite pentru afaceri în Căușeni și sud (HQ page) | 4 | local | service page | LOW | YES - nobody owns it, maib has no Căușeni page | NEXT - demand unproven, cheap |
| Capital de lucru (stoc înainte de sezon, comandă mare) | 3 | commercial | section on afaceri page | MED | NO | NEXT - strengthen `#capital-de-lucru`; the 60-day-payment case maps to factoring (banks) |
| Utilaje / tehnică agricolă | 3/4 | commercial | /seo-content | MED | YES | NEXT |
| Credit pentru prima mașină | 5 | commercial | /seo-content | MED | YES - no .md page, no state program exists | NEXT |
| Credit auto second hand: ce verifici | 5 | informational | /seo-content | MED | YES - dealers + Mogo only | LATER |
| Credit auto sau nevoi personale (sau leasing) | 5 | commercial | /seo-content | HIGH | YES | LATER |
| Reparație pe etape: deviz și cât împrumuți | 5 | informational | /seo-content | MED | YES - defends existing #1/#2 rankings | LATER |
| Subvenția AIPA SC 5.1 pe credit nebancar | 4 | informational | /seo-content | MED | YES | LATER - **verify OCN eligibility in the PDF first** |
| Cum verifici o OCN înainte să semnezi | 2 | informational | /seo-content | HIGH | YES | LATER - ROCNA listing confirmed (extract PDF on /despre-noi) |
| City pages × N | 4 | - | ~~/programmatic-seo~~ | - | - | **REJECTED** - fails the 10-variant test; aggregators own thin city pages |
| Situation-titled pages (stoc, sezon, extindere) | 3 | - | - | - | - | **REJECTED as titles** - no one searches that way; keep as sections |

---

## Striking-Distance Fixes (do before any new page)

1. **`/credite/credit-pentru-afaceri`**
   - Title: "Credit pentru afaceri și persoane juridice (SRL, ÎI) | Ideal Credit".
   - Add an H2 "Credite pentru persoane juridice și întreprinderi individuale".
     Today "persoane juridice" appears 3 times, never in a heading; "ÎI" and "IMM" appear 0 times.
   - Targets: credit pentru afaceri (93 impr, pos 21.8), credite pentru persoane
     juridice (83, 22.7), credit persoane juridice (69, 28.9), credite persoane
     juridice (74, 31.2).
2. **Home**
   - The H1 already says "credite nebancare". Deploy it: the live site still shows "Credite pentru succes".
   - Add a short trust block: what an OCN is, BNM supervision, 16 years, 2 offices.
   - Targets: credite nebancare (1,641, pos 19.8), credit nebancar (369, 7.5), companii de creditare (135, 9).
3. **`/credite/credit-pentru-nevoi-personale`**
   - Add "credit de consum" and "credite persoane fizice" wording in a heading.
   - Add FAQs: acte necesare, termen 5/7 ani, venituri din străinătate.
   - Targets: credit nevoi personale (151, 13.2), credite persoane fizice moldova (105, 11.3).
4. **`/credite/credit-pentru-agricultura`**
   - Delete the FAQ "Pot refinanța un credit agricol existent…" (line 66). It contradicts the refinanțare exclusion.
   - Target "credit pentru agricultura / fermieri", not "credit agricol".
5. **Cost framing**
   - The search engine's AI summary quotes our 10.000 MDL personal example (DAE 59,69%) and labels Ideal Credit "o opțiune scumpă".
   - Add a business-sized example (100.000-300.000 lei) on the business pages.
   - Get owner sign-off on any cost comparison wording.

## Competitor Gaps

- No OCN has situation pages, a "persoane juridice" page, a Căușeni page, or any
  buying guidance (first car, used car, renovation estimate).
- maib runs thin city pages (Bălți, Orhei, Cahul, Ungheni, Hîncești, Briceni; about 450
  words, July-Aug 2026). It has none for Căușeni or Chișinău.
- No OCN explains state programs honestly: ODA, FCA, AIPA SC 5.1, the youth credit
  facility. Saying "when the state program is the better choice" is open ground and matches the strategy.
- Aggregators: finmarket.md lists Microinvest but not Ideal Credit. **Off-page
  quick win: get listed.** expertcredit.md and allmoney.md list neither.
- Russian-language demand ("кредит для бизнеса в молдове") has no lender page.
  Not checked in GSC.

## Backlog (ordered)

| # | Piece | Cluster | Route | Why | Status |
|---|---|---|---|---|---|
| 1 | Fix: credit-pentru-afaceri title + "persoane juridice" H2 | Afaceri/PJ | edit | 319 impr at pos 21-31, nobody targets PJ | planned |
| 2 | Deploy home H1 + OCN trust block | Credite nebancare | edit | 1,641 impr at pos 19.8 | planned |
| 3 | Fix: agricultura - remove refinanțare FAQ, add tehnică + seasonal sections | Agro | edit | conflict with exclusion; uncontested SERP | planned |
| 4 | Fix: nevoi-personale - consum / persoane fizice wording + FAQs | Personal | edit | 256 impr at pos 11-13 | planned |
| 5 | Ce acte îți trebuie pentru un credit pe firmă (SRL / ÎI) | Acte | /seo-content | real phrasing; SERP = PDFs + forum | **brief ready** |
| 6 | Get listed on finmarket.md | off-page | outreach | Microinvest listed, we're not | planned |
| 7 | Credit pentru deschiderea unei afaceri (firmă nouă) | Start-up | /seo-content | ~10 phrasings, no OCN page | planned (confirmed) |
| 8 | Credite pentru afaceri în Căușeni și sud | Local | service page | HQ, uncontested | planned |
| 9 | Credit nebancar sau bancar: când are sens pentru firma ta | Category | /seo-content | only BNM answers | blocked - cost sign-off |
| 10 | Credit cu gaj imobil pentru afaceri (sume mari) | Afaceri | section/page | deepest suggest tree | planned (confirmed: gaj imobil from ~200k) |
| 11 | Credite nebancare în Chișinău | Local | service page | GSC 754 impr | planned |
| 12 | Credit pentru utilaje și tehnică agricolă | Agro | /seo-content | suggest + no OCN page | planned |
| 13 | Credit pentru prima mașină: cât costă de fapt | Personal | /seo-content | GSC 71 impr, no .md page | planned |
| 14 | Credit auto second hand: ce verifici | Personal | /seo-content | dealers-only SERP | planned |
| 15 | Reparație pe etape: deviz și cât împrumuți | Personal | /seo-content | defends existing rankings | planned |
| 16 | Subvenția AIPA SC 5.1 + credit nebancar | Agro | /seo-content | unseen angle | blocked - verify PDF |

## Brief Index

- `campaigns/content-plan/acte-necesare-credit-pe-firma.md` - backlog #5

## Not Verified

Google.md rankings, PAA and AI Overviews; Russian-language demand; search volumes;
AIPA SC 5.1 eligibility for OCN loans.

Owner answers (2026-11-09): lends to firms < 12 months - YES; real-estate collateral -
YES, even from ~200k; ODA/FGC partner - NOT YET, but wants partnerships and state /
business programs. Until a partnership is signed, pages may explain programs but must
not imply Ideal Credit is a partner.
