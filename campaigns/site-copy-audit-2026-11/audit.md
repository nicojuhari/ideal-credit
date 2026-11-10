---
type: copy-audit
campaign: site-copy-audit-2026-11
awareness_level: 3 (solution-aware, business-first)
date: 2026-11-10
score: 47/70 before → 56/70 after (site-level, 1 pass)
---

# Site copy audit, 2026-11-10

Data: LIVE (voice-profile.md 2026-11-09, voc.md 49 quotes, strategy.md, brief 2026-11-10)

Rules checked on every page: plain full sentences with a subject, Moldovan terms
(ÎI, SFS, rulată, certificat de înmatriculare), no " - " joins, no clever lines, no
mention of banks or other lenders, no promise of *when* money arrives, evergreen
(nothing that goes stale weekly), and every claim matches the proof list.

## Scores (site-level, calibrated)

| Dimension | Before | After | Why |
|---|---|---|---|
| Clarity | 6 | 8 | Vague endings ("cea mai bună variantă"), FAQ answers that didn't answer, a glossary written like a law text |
| Specificity | 8 | 9 | Already strong (numbers, document names); fixed wrong/contradicting facts |
| Voice | 7 | 9 | Dash joins, "second-hand", Russian word in the form, exclamation mark |
| Desire | 6 | 7 | Unchanged by design: evergreen copy, no hype |
| Proof | 7 | 9 | Removed claims outside the proof list (refinanțare, 22 reviews, "suma nu se schimbă") |
| Urgency | 6 | 6 | Honest absence. No fake scarcity, by design |
| Flow | 7 | 8 | One idea per section; one consistent CTA |

Total 47 → 56 (threshold 56). Past this, the
limit is proof (no client stories), not the copy.

## Page by page

### Shared (header, footer, schema, home FAQ list)
- Header menu: "Pentru orice scop, fără destinație fixă" contradicted the strategy (the goal matters). Rewrote all 6 menu lines.
- Footer group "Personale" → "Persoane fizice".
- FAQ list (home + Google schema): **wrong fact fixed**: "suma nu se schimbă" (the payment goes down each month). Removed "Pot refinanța un credit existent? Preluăm credite..." (refinanțare is retired). Removed "situația mea nu e perfectă" (distressed framing). Fixed the business documents answer (it said 3 months and "evidență contabilă", the business page says 3-6 months and the Registrul de stat extract). Merged duplicate "sumă" questions; added the real maximums.
- Schema HowTo: "în cel mai scurt timp" and "Responsabilitate financiară" replaced with real facts.

### Home
- Hero subtitle ended in "îți propunem cea mai bună variantă" (says nothing). Now: "Apoi îți spunem ce sumă și ce termen ți se potrivesc." Same fix on all 6 credit pages.
- Removed "· 22 de recenzii" (stale with every new review).

### /credite
Redesigned in the previous step. Share image updated to the new H1.

### Credit pages
- **Afaceri**: clean. Template for the rest.
- **Investițional**: document list said "Certificatul de înregistrare"; aligned to "Extrasul din Registrul de stat".
- **Agricultură**: "Se poate." answer now says what a grace period is; "ajunge ca dovadă" (ambiguous) → "este suficient ca dovadă".
- **Nevoi personale**: "Vacanță planificată" replaced by "Studii sau tratament" (fits the goal-first strategy). "Îți spunem limita înainte să depui cererea" (the retired before/after framing) → "la prima discuție". The bugetari FAQ didn't answer its question; now it says conditions are the same and why the analysis is simpler.
- **Reparație**: clean.
- **Automobil**: "second-hand" → "rulată"; "Actul tehnic" → "Certificatul de înmatriculare"; caroserie line had no information.

### Calculator
Defaulted to equal payments ("Anuitate"), while every Ideal Credit example uses payments that go down. Now defaults to "Rate care scad", with the line "Așa calculăm creditele la Ideal Credit". Labels in plain words.

### Cerere online
- Purpose options listed "Refinanțare" and "Procurare bun imobil" (not offered). Now: afaceri, nevoi personale, reparație, automobil, altele.
- "(garant / поручитель)" → plain explanation in Romanian.
- Consent paragraph rewritten in short sentences. "Cerere trimisă cu succes!" → no exclamation mark.
- Meta said "Fără vizite la birou" while the form requires coming to the office to sign. Fixed.

### Contacte, Despre noi
Rewritten in the previous step. Two fragment sentences fixed on Despre noi. Share image updated.

### Dicționar financiar
The page promised "explicați pe înțelesul tuturor", but definitions were legal text. All 18 rewritten in plain words.

### Legal pages, 404, error
Copy fine for its purpose. Legal text not edited (see owner questions).

## Owner questions (not changed, need a decision)
1. **Age limit.** Reparație and Automobil say "între 23 și 55 de ani"; Nevoi personale accepts pensions. Which is right?
2. **Application form max is 300.000 lei**, but business credits go to 500.000. Business clients can't apply online above 300.000. Raise it, or keep the form for persons only?
3. **Footer law 202/2013 box**: it states other payments can't exceed 0,04%/zi, and the site states a late penalty of 0,1%/zi (different base, but a reader will see a contradiction). Worth a check with whoever handles compliance.
4. **Terms page** lists "credite ipotecare", which are not offered. Legal text, so left as is.
5. **Bugetari**: confirm there are no special conditions (the new FAQ says the conditions are the same).
6. **Calculator page "Rate egale" option**: do you offer equal payments at all? If not, remove the toggle.

## A/B tests (traffic is low, so big swings only)
- Home hero subtitle: mechanism line (now) vs. cost line ("Plătești doar dobânda. 0 lei comisioane."). Metric: clicks on "Cerere online" + calls.
- Credit pages: hero primary CTA "Solicită un credit" vs. "Sună-ne" (phone first, per brief). Metric: calls + form starts.

## Owner answers, 2026-11-10 (applied)
1. Age: 23+ everywhere (reparație, automobil fixed).
2. Online form maximum raised to 500.000 lei.
3. Penalty, checked against Law 202/2013 art. 15¹ and RI-02 (next-icm `docs/regulamente`): for persons, the penalty is a fixed sum in lei per day, max 0,04% of the credit per day. For business, set individually (0,1%/day of the overdue sum). Personal pages now show 0,04%, business pages keep 0,1%, FAQ explains both, footer law box labelled "pentru persoane fizice". Home calculator strip shows "Achitare înainte de termen 0 lei" instead of a penalty that differs by client type.
4. "credite ipotecare" removed from the terms page.
5. Equal payments offered on request: calculator note says so.
