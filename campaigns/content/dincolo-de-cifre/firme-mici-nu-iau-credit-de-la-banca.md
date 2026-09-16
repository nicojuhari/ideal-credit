# Nouă din zece firme mici nu iau credit de la bancă.

**Dincolo de Cifre** — source draft. Live version (with chart) at
`app/blog/(articles)/firme-mici-nu-iau-credit-de-la-banca/page.mdx`. This file
is kept in sync for editorial reference; treat the .mdx as the source of
truth.

**Verified 2026-09-17** — installed `pypdf` (pure Python, no compile step
needed after `poppler` failed to build on this Intel Mac) and read the
actual source PDF directly, page 11 appendix table: **the three small-firm
figures (91,2% / 6,1% / 2,6%) are exactly correct**, straight from "Proportion
of investment financed internally/by banks/by supplier credit (%), Small"
row. Sums to 100.0 exactly. No longer an open item — citation in the article
could be upgraded to name the appendix table specifically.

**Still open, and now a confirmed problem, not just an unverified one:**
downloaded and read CNPF's 2024 Annual Report directly (primary source,
99 pages). Its non-bank-sector lending figures are reported for **persoane
fizice (individual/consumer credit)** specifically — e.g. "organizațiile de
creditare nebancară... 346,5 mii contracte de credit" for individuals, OCN
share of the 41,7bn-lei individual-credit market. It does **not** cleanly
separate a companies-only OCN portfolio figure anywhere I could find. This
means the article's "~12,9bn lei OCN+AEÎ portfolio vs. ~55bn lei bank
business credit" comparison (both currently sourced from secondary
business-news reporting, not this annual report) may not be comparing
business credit to business credit — the 12,9bn figure likely blends
individual and business lending. Added a disclaimer note to the published
article (after `<ClosingNote>`) flagging this rather than presenting it as
settled. If revisited, the fix is finding a companies-only OCN portfolio
figure from BNM's interactive statistics database (the annual report points
there but it renders as an interactive dashboard, not a scrapable
document).
- Fixed during the audit pass: the first draft compared bank loan *stock*
  (~55bn) against OCN total *assets* (~20bn) and OCN loans-issued *flow*
  (~15,4bn) as if they were the same measure — they aren't. Now the scale
  comparison uses the one pair that's actually stock-to-stock (bank
  portfolio ~55bn, Oct 2025 vs. OCN+AEÎ portfolio ~12,9bn, Q1 2025); the
  15,4bn/profit-growth figures moved to the growth section as their own
  trend indicators, not restated as a size comparison.
- Competitive check: Moldova Matters' "Moldova's Productivity Trap: Why Good
  Firms Can't Grow" already covers *why* banks won't lend to small firms
  (collateral, documentation, information asymmetry) in depth using the same
  WB data. This draft deliberately keeps that section short and leads
  instead with the non-bank-sector scale story, which that piece doesn't
  cover — don't expand "De ce ocolesc firmele mici băncile" into a repeat of
  that analysis.

---

## Cifrele

Ratele de mai jos arată din ce se finanțează, de fapt, o firmă mică din Moldova atunci când investește în afacere. [grafic bare: Fonduri proprii 91,2% (subiect), Bancă 6,1%, Credit furnizor 2,6%]

Fondurile proprii domină clar: nouă lei din zece investiți de o firmă mică vin direct din afacere sau din buzunarul fondatorului, nu de la un creditor.

| Firmă | Fonduri proprii din investiții | Sursă |
| --- | --- | --- |
| Mici | ~91,2% | World Bank Enterprise Surveys, Moldova 2024 |
| Medii | ~71,7% | World Bank Enterprise Surveys, Moldova 2024 |
| Mari | ~83,1% | World Bank Enterprise Surveys, Moldova 2024 |

Firmele medii ies din tipar: se bazează cel mai puțin pe bani proprii dintre toate cele trei categorii.

Firmele mari, cu acces mai bun la piețele de capital, revin la un nivel apropiat de-al firmelor mici.

## De ce ocolesc firmele mici băncile

O bancă cere garanții solide și situații financiare clare înainte să dea un credit. O firmă mică, abia la început sau fără o contabilitate impecabilă, rareori le are pe amândouă.

Nu e o chestiune de voință - e o chestiune de ce poate arăta, pe hârtie, o firmă mică.

## Cine umple golul, de fapt

Restul de circa 9% care chiar ajunge la un creditor extern se împarte între doi jucători foarte diferiți: furnizorii, prin marfă dată pe credit, și sectorul de creditare nebancară.

Sectorul de creditare nebancară (OCN) funcționează diferit de o bancă: nu ia depozite, ci se finanțează din capital propriu sau împrumutat. Și lucrează des cu firme pe care o bancă le-a refuzat deja sau nici nu le-a luat în calcul.

Cât de mare e, de fapt, acest sector? La finalul lunii octombrie 2025, băncile aveau în portofoliu circa 55 de miliarde de lei în credite pentru companii.

În primul trimestru din 2025, sectorul de creditare nebancară (OCN și asociații de economii și împrumut) avea un portofoliu de circa 12,9 miliarde de lei.

Nu e o piață marginală. E o piață de câteva ori mai mică decât cea bancară pentru companii - dar suficient de mare cât să conteze pentru firmele pe care banca le ocolește.

## Cât de repede crește sectorul nebancar

Profitul cumulat al sectorului de creditare nebancară a crescut cu aproximativ o treime în 2025, iar organizațiile din sector acordaseră aproape 15,4 miliarde de lei în credite noi doar în primele nouă luni ale anului.

În același timp, creditul bancar total din Moldova a crescut cu 60% în doar doi ani - de la 63 de miliarde de lei în 2023 la 100 de miliarde de lei în octombrie 2025.

Ambele piețe cresc în paralel. Asta nu înseamnă că firma mică ajunge mai ușor la bancă - înseamnă doar că are, în continuare, o alternativă reală în afara ei.

Pentru firma mică ce nu se califică la bancă, sectorul nebancar rămâne cea mai realistă alternativă - nu pentru că e ieftin, ci pentru că există.

---

**Notă închidere (1 propoziție):** La Ideal Credit vedem zilnic exact acest tipar - firme mici, respinse sau ignorate de bancă, care au totuși nevoie reală de finanțare. [Discută cu noi despre situația ta →](/credite)

**Notă sub linia de închidere (disclaimer, adăugat 2026-09-17):** Notă: datele despre sursele de finanțare ale firmelor mici (secțiunea „Cifrele”) sunt verificate direct din raportul Enterprise Surveys al Băncii Mondiale, Moldova 2024. Cifrele despre piața bancară și sectorul de creditare nebancară vin din presa economică, nu direct de la BNM sau CNPF, și e posibil să amestece creditele pentru companii cu cele pentru persoane fizice - le tratăm ca estimări, nu ca cifre exacte.
