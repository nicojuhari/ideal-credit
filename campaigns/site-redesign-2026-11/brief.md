---
type: brief
campaign: site-redesign-2026-11
date: 2026-11-10
---

# Brief: site redesign, step 1 (copy)

Data: LIVE (voc.md 49 quotes, competitors.md 6 competitors, owner answers 2026-11-10)

## Goal
More business leads. The site should show what the company is for: helping
businesses, with a serious analysis of every client, no promises it can't keep, and
no costs added on top of the interest.

## Pages in scope
1. Home `/`. H1 is locked (owner decision 2026-11-09): "Credite nebancare pentru
   afaceri și nevoi personale."
2. `/credite/credit-pentru-afaceri`. It becomes the template for the other product pages.

## Awareness
Business owners are **solution-aware**. They know banks and OCNs exist and compare them
by collateral and penalties (VOC-O02). Lead with the mechanism (analysis) and the cost
structure (one cost), not with the problem.

## Angle
**"Un singur cost: dobânda. Și un răspuns corect înainte de semnătură."**
- Not "cheaper". At 4%/month (DAE about 60%) we are the price ceiling for business credit
  (competitors.md). "We don't overcharge" fails one comparison.
- What is true and checkable: our DAE equals the bare interest (4%/month gives
  60,1%), so nothing is added. Competitors add disbursement fees (up to 3-3,5%),
  monthly administration fees (0,3%-0,9%) and late penalties up to 1%/day
  (competitors.md).
- The analysis is framed as protecting the client ("ca să nu iei mai mult decât îți
  trebuie"), not as vetting (audience.md Surprise 1).

## Proof inventory (only these may be claimed)
| Fact | Source |
|---|---|
| 16 years on the market (since 15.04.2010) | lib/utils.ts |
| 2 offices: Căușeni (bd. Mihai Eminescu 17), Chișinău (str. Ginta Latină 18, of. 5) | Google Business Profile, owner screenshots |
| Google: 5,0 Căușeni (12 reviews), 4,9 Chișinău (10 reviews) = 22 reviews | owner screenshots 2026-11-10 |
| 4 out of 10 clients come back | owner, 2026-11-10 |
| Interest 4%/month fixed, on the remaining balance; negotiable lower by risk, amount, guarantees | owner + calculator |
| 0 lei disbursement fee, 0 monthly fee, free early repayment | site FAQ + DAE = bare interest |
| Late penalty 0,1% per day | owner, 2026-11-10 |
| No life insurance. Insurance only on pledged property when there is a gaj | owner, 2026-11-10 |
| Decision in 1-2 working days; money the same or next working day after signing | business page |
| 10.000-500.000 lei; SRL, ÎI, GȚ; firms with 4-6 months of activity financed | lib/schema.ts, business FAQ |
| First credit: fidejusor (usually the administrator) required | business FAQ |
| Documents checked by email, WhatsApp or Viber; repayment remote | Process.tsx |
| We often advise less: "sometimes they want to finance a lot of unnecessary things" | owner, 2026-11-10 (pattern, not a case) |

| 20-30 business contracts a year (one firm can hold 2 contracts) | owner, 2026-11-10 |
| Analysis order: 1) is the goal realistic, 2) how they repay if it works and if it doesn't, 3) guarantees and gaj | owner, 2026-11-10 |
| First call about 15 minutes; hours Mon-Fri 8:30-16:30 | owner, 2026-11-10 |
| SFS filings (dări de seamă) not required, may be checked | owner, 2026-11-10 |
| Banks decide in 2-3 days, so speed is not a differentiator vs banks | owner, 2026-11-10 (interpreted) |

**Do not claim:** site testimonials (none verified; no review texts available); a specific "we said less" case.

## Cost example (computed with the site calculator, ideal-credit package)
100.000 lei, 24 luni, 4%/lună from the remaining balance:
- Rata 1: 8.167 lei. Ultima rată: 4.325 lei.
- Dobândă totală: 50.000 lei. Total de plată: 150.000 lei. Comisioane: 0 lei. DAE: 60,21%.
- Paid off after 12 months: interest paid about 37.000 lei (no early-repayment fee).

## VoC used
- VOC-P01 "ignorând ciclul agricol și realitățile din teren" → we look at the cycle.
- VOC-D01 "dialog și comunicare" → phone first.
- VOC-O01 "kantore care o sa scoata de la tine dublu" → one cost, printed.
- VOC-O02 "De ce nu de la Banca?" → the "when the bank is better" block.
- VOC-O05 "deja treaba lui ce face cu banii" → frame the analysis as protecting them.
- VOC-D04 "проявляли понимание" in late months → the "if a month goes wrong" block.

## Voice constraints
brand/voice-profile.md: short sentences, "tu", no " - " joins, Moldovan terms, no
"rapid" as the claim, no "garantat/100%/fără refuz", no exclamation marks, numbers
in digits (50.000 lei). Never use "kantora". CTA: "Discutăm situația ta" first, form second.

## Layout direction for step 2 (design)
Dark, premium, easy to scan: a 12-column grid, generous spacing, one idea per
section, numbers as the visual anchor (the cost table is the hero's companion).
Every section: a short H2, at most 3 short paragraphs or a 2-4 cell grid.
