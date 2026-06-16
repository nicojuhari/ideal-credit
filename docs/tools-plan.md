# Plan: Website Tools - Ideal Credit

Three interactive tools forming a conversion funnel into `cerere-de-credit-online`.

**Status:** Planning - not started
**Last updated:** 2026-06-03

---

## Financial Parameters (confirmed)

| Parameter     | Value                                     |
| ------------- | ----------------------------------------- |
| Interest rate | 4% / month                                |
| Commission    | 0%                                        |
| Discounts     | Case-by-case for loyal and repeat clients |

DAE (compound): `(1 + 0.04)^12 − 1 ≈ 60.1% / year`

---

## Funnel Architecture

```
Blog / Homepage / Credit product pages
         │
         ▼
[Tool 3] Calculator Credit     [Tool 2] Calculator ROI
         │                              │
         └──────────┬───────────────────┘
                    │  CTA: "Aplică"
                    ▼
         [Tool 1] Test Eligibilitate
                    │
              ┌─────┴──────┐
           ≥70%           <70%
              │              │
              ▼              ▼
     Cerere de Credit    Fail screen
       Online (exist)    (category breakdown
                          + phone CTA /
                          near-fail capture)
```

Gate: ALL traffic to `/cerere-de-credit-online` passes through the quiz (personal + business).
Implemented via `sessionStorage` token (`quiz_passed=true`) set on pass.

---

## Build Order

| Priority | Tool               | Route                 |
| -------- | ------------------ | --------------------- |
| 1        | Calculator Credit  | `/calculator-credit`  |
| 2        | Test Eligibilitate | `/test-eligibilitate` |
| 3        | Calculator ROI     | `/calculator-roi`     |

---

## Tool 1: Test de Eligibilitate

**Route:** `/test-eligibilitate`
**Scope:** Both personal and business credit applicants.
**Purpose:** Filter gate using a points-based score. ≥70% of max → pass to cerere-online. <70% → fail screen with actionable feedback.

### Architecture

Questions live in a single config file: `data/eligibility-questions.ts`.
To add a question, add an entry - no UI code changes needed.

```ts
// Question shape
{
  id: string
  category: "gate" | "financial" | "readiness" | "trust"
  question: string           // Romanian text shown to user
  options: {
    label: string            // Answer text
    points: number           // Points earned if selected
    hardFail?: boolean       // true = instant fail regardless of total score
  }[]
}

// Config also exports:
export const PASS_THRESHOLD = 0.70   // 70% of max points
```

Score = `(earned_points / max_possible_points) × 100%`
Points are never shown to the user.

---

### Question Set (draft - point values to calibrate)

**Group A - Gate (hard fails apply here)**

| #   | Question                                  | Options + Points                                                                                      |
| --- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| A1  | Ești rezident în Republica Moldova?       | Da: required / Nu: hardFail                                                                           |
| A2  | Ai o sursă regulată de venit?             | Angajat oficial: 15 / Pensionar: 12 / Activitate proprie (SRL/ÎI): 10 / Sezonier: 6 / Nu am: hardFail |
| A3  | Ai restanțe active la credite în prezent? | Nu: 15 / Am avut, rezolvate: 5 / Da, am acum: hardFail                                                |

> hardFail options set score = 0 and skip remaining questions immediately.

**Group B - Financial profile**

| #   | Question                               | Options + Points                                            |
| --- | -------------------------------------- | ----------------------------------------------------------- |
| B1  | Care este venitul tău lunar net?       | < 5.000 MDL: 0 / 5–15k: 5 / 15–40k: 10 / > 40k: 15          |
| B2  | Câți bani ai nevoie?                   | 10–50k: 10 / 50–150k: 8 / 150–300k: 5                       |
| B3  | Alte rate lunare la credite existente? | Nu am: 10 / Sub 20% din venit: 8 / 20–40%: 4 / Peste 40%: 0 |

**Silent DTI check:** After B1 + B2, compute implied monthly payment at 4%/mo over 24 months.
If payment > 40% of declared income → cap Group B score at 50% of its max, regardless of answers.
Show soft nudge: _"Suma solicitată pare mare față de venit - consideră o sumă mai mică."_

**Group C - Readiness & purpose**

| #   | Question                                    | Options + Points                                                                                |
| --- | ------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| C1  | Scopul creditului                           | Investiție / renovare / echipament: 10 / Nevoi personale: 8 / Refinanțare: 6 / Nu știu exact: 2 |
| C2  | Poți veni la oficiu (Chișinău sau Căușeni)? | Da: 10 / Pot aranja: 5 / Nu: 0                                                                  |
| C3  | De cât timp ai venitul actual?              | 3+ ani: 10 / 1–3 ani: 7 / 6–12 luni: 4 / < 6 luni: 1                                            |

**Group D - Trust signals (bonus)**

| #   | Question                            | Options + Points                          |
| --- | ----------------------------------- | ----------------------------------------- |
| D1  | Ai mai luat credit la Ideal Credit? | Da, fără probleme: 10 / Nu, prima dată: 0 |
| D2  | Poți oferi un fidejusor (garant)?   | Da: 8 / Nu știu încă: 3 / Nu: 0           |
| D3  | Ai bunuri imobile în proprietate?   | Da: 5 / Nu: 0                             |

**Max possible (draft): ~123 pts. Pass at 70% ≈ 86 pts.**
Point values to be calibrated against real rejection patterns.

---

### Result Screens

**PASS (≥70%)** - green screen

- _"Profilul tău îndeplinește criteriile noastre."_
- CTA: `Completează cererea online →` → `/cerere-de-credit-online`
- Sets `quiz_passed=true` + quiz payload in sessionStorage
- Quiz answers pre-fill cerere fields: B1 → `venituri`, B2 → `suma`, C1 → `scopul_creditului`
- Shows recommended credit product based on C1 answer

**FAIL (< 70%)** - category breakdown, not raw score

```
Profilul tău              ████████░░  68%

Eligibilitate de bază     ██████████  ✓
Profil financiar          ████░░░░░░  ✗  ← weak category
Disponibilitate           ████████░░  ✓
Semnale de încredere      ██████░░░░  ~
```

One specific sentence naming the main blocker (e.g., _"Rata creditelor existente depășește 40% din venit."_)
CTA: `Sună-ne să discutăm: 069 xxx xxx`

**Near-fail (55–69%)** - two additional options shown below the fail screen:

- `Recalculează cu fidejusor →` - sets D2 = "Da", recalculates score instantly, shows new result
- `Lasă numărul tău - te contactăm când ești pregătit` - optional phone capture field for warm lead follow-up

**Repeat client fast-track:**
If D1 = "Da, fără probleme" → skip Groups B/C/D remainder → instant PASS:
_"Ca client existent, ești pre-aprobat. Continuă direct cu cererea."_

---

### Gate Mechanism

```ts
// /cerere-de-credit-online/page.tsx - add at top of component
useEffect(() => {
    if (sessionStorage.getItem("quiz_passed") !== "true") {
        router.replace("/test-eligibilitate");
    }
}, []);
```

Token is sessionStorage (expires when tab closes). Direct bookmarked links → quiz first.

---

## Tool 2: Calculator ROI

**Route:** `/calculator-roi`
**Purpose:** Help users decide if credit makes financial sense for a specific investment. Answers: _"Merită creditul?"_

### Inputs

| Field                                | Default            |
| ------------------------------------ | ------------------ |
| Suma creditului                      | 50,000 MDL         |
| Creștere lunară estimată a venitului | - (required)       |
| Începând cu luna N                   | 3                  |
| Termen credit                        | 24 luni            |
| Rata dobânzii                        | 4%/lună (editable) |

No commission field (confirmed 0%).

### Computed Values

```
r                   = 0.04
monthly_payment     = P × r(1+r)^n / ((1+r)^n − 1)
monthly_net_gain    = revenue_increase − monthly_payment
break_even_month    = first month where Σ monthly_net_gain > 0
total_credit_cost   = (monthly_payment × n) − P
ROI                 = (Σ monthly_net_gain / total_credit_cost) × 100%
```

### Verdict

| Condition                           | Verdict                    | Color  |
| ----------------------------------- | -------------------------- | ------ |
| ROI > 50% AND break-even ≤ month 18 | Rentabil                   | Green  |
| ROI 10–50% OR break-even > 18       | Marginal - merită discutat | Yellow |
| ROI < 10% OR negative               | Riscant                    | Red    |

**Display:** Verdict card + 3 key numbers (rată lunară / câștig net/lună / break-even luna N) + expandable month-by-month table.
**CTA:** `Creditul e rentabil → Testează eligibilitatea` → `/test-eligibilitate`

> **Open question:** Standalone page only, or also embedded as a section on credit product pages (e.g., `credit-investitional`, `credit-capital-de-lucru`)?

---

## Tool 3: Calculator Credit

**Route:** `/calculator-credit`
**Purpose:** Full payment schedule before applying. User sees exact cost with amortization table.

### Inputs

| Field              | Range / Default                                        |
| ------------------ | ------------------------------------------------------ |
| Suma               | 10,000–300,000 MDL (slider + input)                    |
| Rata dobânzii      | 4%/lună default (editable - for comparison with banks) |
| Termen             | 6–60 luni (slider + input)                             |
| Tip rambursare     | Anuitate / Principal egal (toggle)                     |
| Perioadă de grație | 0–6 luni (optional)                                    |

No commission fields (confirmed 0%).

### Outputs

```
Plată lunară        = PMT fixed (anuitate) or range X–Y MDL (principal egal)
Total plătit        = Σ all payments
Dobândă totală      = total plătit − principal
DAE                 = (1.04)^12 − 1 ≈ 60.1%  [fixed when rate = 4%/mo]
```

Callout: _"Clienții fideli pot beneficia de rate reduse. Află la birou."_

### Amortization Table (expandable)

| Luna | Plată | Principal | Dobândă | Sold rămas |
| ---- | ----- | --------- | ------- | ---------- |

### Chart

Area chart: balance remaining over time. Simple - Recharts or lightweight alternative.

### Payment Math

**Anuitate (equal payments):**

```
r = 0.04
PMT = P × r(1+r)^n / ((1+r)^n − 1)
interest_t  = balance_t × r
principal_t = PMT − interest_t
```

**Principal egal (decreasing payments):**

```
principal_t = P / n
interest_t  = balance_t × r
payment_t   = principal_t + interest_t
```

### URL State

Serialize inputs to query params - shareable and deep-linkable from product pages:

```
/calculator-credit?suma=50000&termen=24&rata=4&tip=anuitate
```

**CTA:** `Vrei acest credit? → Testează eligibilitatea` → `/test-eligibilitate`

**Note:** Check `ideal-credit` npm package for `createGrafic` / `calcDAE` exports before writing new math - may be reusable.

---

## Confirmed Decisions

- **Quiz scope:** Both personal AND business credit (all cerere-online traffic)
- **Quiz lead capture:** Silent routing - no contact info collected during quiz. Fail screen shows office phone. Near-fail shows optional phone field only.
- **Discounts:** Manual / case-by-case at office. Calculator shows static callout, no quiz logic needed.
- **Commission:** 0% - no commission fields in calculator or ROI tool.
- **Interest rate default:** 4%/month across all tools.

---

## Technical Notes

- All 3 tools: `"use client"` components (pure browser-side, no server needed)
- Reuse: `Slider`, `Input`, `Select`, `Button` from shadcn/ui; `motion` / `AnimatePresence` from `framer-motion` (already used in cerere-online)
- Question config: `data/eligibility-questions.ts` - plain TS array, no UI changes needed to add questions
- Pre-fill cerere from quiz: extend sessionStorage payload beyond the `quiz_passed` token
- Gate redirect: add `useEffect` check at top of `/cerere-de-credit-online/page.tsx`
