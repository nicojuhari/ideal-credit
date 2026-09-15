# Site Architecture - Ideal Credit

## Last Updated

2026-09-11 (round 2) by owner decision - closes the `/faq` question, locks the
`/credite` hub structure, redirects blog-merge destinations that pointed at the
now-cancelled `/faq` page, and sets the home page H1. Supersedes the round-1 spec
below where the two conflict; round-1 reasoning (two-part model, no-hub decision,
7-block template, redirect table) otherwise stands.

---

## The Two-Part Model

The site splits into two layers with no overlap:

| Layer                             | Job            | Content                                                  | Success metric                           |
| --------------------------------- | -------------- | -------------------------------------------------------- | ---------------------------------------- |
| **Services** (`/credite/*`, home) | Convert        | What / Pentru cine / Cum / Cât costă / Documente / FAQ   | Applications submitted                   |
| **Blog** (`/blog/*`)              | Earn authority | Business, finance, investments, Moldovan & world economy | Brand searches, links, returning readers |

**No `/faq` route.** FAQ is not a page - it is block 7 on every `/credite/<slug>`
page (`CreditFAQ`, product-specific), plus the general/cross-product FAQ already
living on the home page (`FAQ` component, `FAQ_ITEMS` in `lib/constants.ts`) and the
hub-level FAQ already on `/credite` (`hubFaqItems`). This matches what's already
built - no new component needed, only a content merge into the existing ones.
Decided 2026-09-11 (round 2), overriding the round-1 "New pages required: `/faq`"
line below.

**The rule:** nothing transactional in the blog, nothing editorial in the services.

Every "how do I get a credit / what documents do I need / how long does it take"
question is answered on the service layer - home page, service pages, FAQ. The blog
never explains the product.

---

## Structural Decision: No Hub Pages

The site is **flat** under `/credite/`. There is deliberately no `/credite/afaceri`
or `/credite/personale` intermediate page.

**Why:** a hub at `/credite/afaceri` would target the same head term as
`/credite/credit-pentru-afaceri-mici` and cannibalize it. Two pages competing for
"credit pentru afaceri" means neither ranks. Owner decision, 2026-09-11.

**The same logic applies to modifiers.** Keyword variants like "credit afaceri fără
gaj" or "credit pentru extindere afacere" do **not** get their own pages - they are
served as **sections and FAQ entries** inside the relevant service page. A separate
`fara-gaj` page would cannibalize the business pages for the identical intent.

`/credite` (the index) remains, but it is a **directory + generic head-term page**
only. It targets "credite nebancare" / "credite nebancare Moldova" - the generic
term the site already ranks for - plus the "ce este un OCN / de ce OCN" framing.
It never targets a product term. No intent overlap, no cannibalization.

### Refinanțare / consolidare: subservice, not a page (decided 2026-09-11, round 3)

Same logic as the modifiers above, plus a lead-quality reason specific to this one.
`/credite/refinantare` is retired. Refinanțare/consolidare now appears only as:

- A **situation row** in Block 1 on `credit-pentru-afaceri-mici` ("Consolidare
  credite → Aduni creditele existente într-unul singur, cu o rată mai mică") - the
  capital de lucru section on that same page is a separate situation, not a
  reference point for this one.
- A **situation row + short section** on `credit-pentru-nevoi-personale` (personal
  side - this is where most of the retired page's traffic actually was).
- **No dedicated CTA, no own hero, no own FAQ block.** It's an option surfaced once
  the client's real situation is understood in the phone consultation (Core
  Philosophy - see `positioning.md`), not a front door someone can walk through
  directly by searching "refinanțare."

**Why (owner, 2026-09-11):** the standalone page attracted bad-quality applications

- people moving debt from one pocket to another with no underlying goal, which is
  also why `keyword-plan.md` already excluded it as a _content_ target. This extends
  the same reasoning to the page itself: the URL and its independent CTA were doing
  the inviting.

**Redirect:** `/credite/refinantare` → `/credite/credit-pentru-nevoi-personale#consolidare`
(the more common personal-side case; business pages cross-link to the same concept
without needing the redirect to point there too).

### `/credite` index structure: two groups (decided 2026-09-11, round 2)

The index organizes its product list into exactly **two groups** - `credite afaceri`
and `credite de consum / personale` - nothing finer. This is not a new hub (no new
URL, no group-level page); it is how the single `/credite` page presents its card
grid and how the "ce este un OCN" copy is scoped.

**This is already built.** `components/ServiciiList.tsx` renders exactly this split
(`businessProducts` / `personalProducts`, two labeled columns) and `app/page.tsx`
mirrors it in the home page's "Alege soluția potrivită" section. The instruction
here is to keep this grouping as the permanent IA - not to add a third group, not to
promote either group to its own route - and to write the `/credite` index's own
body copy (the "ce este un OCN" / generic-term content flagged as an open item in
round 1) around these same two groups rather than as an undifferentiated list.

---

## Page Inventory: 11 → 6

### Active service pages (flat, `/credite/<slug>`)

**Business (3)**

- `credit-pentru-afaceri-mici` - primary business page, now also carries capital de lucru as a section (`#capital-de-lucru`)
- `credit-investitional`
- `credit-pentru-agricultura`

**Personal (3)**

- `credit-pentru-automobil`
- `credit-pentru-reparatie`
- `credit-pentru-nevoi-personale`

No maintenance category anymore - `refinantare` is retired as a page (see below).

### Retired

| Page                      | Action                                                                                  | Reason                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `credit-pina-la-salariu`  | Delete + 301                                                                            | Product discontinued (keyword-plan.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `credit-pentru-bugetari`  | Fold into `credit-pentru-nevoi-personale` as a section                                  | It is an _audience_, not a purpose. Every other page is organized by what the money does; keeping it standalone breaks the logic and splits intent with nevoi-personale.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `refinantare`             | Delete + 301, fold in as a subservice section                                           | Owner decision, 2026-09-11 (round 3): the dedicated page generated bad-quality applications - people just moving debt from one lender to another with no concrete goal ("same clients with bad history, just moving debts, no concrete goal"). Giving it a page and a CTA of its own invites exactly that application. As a section on pages organized around a real purpose (grow the business, cover a personal expense), it's offered as an _option once the real need is understood_ - not as its own front door.                                                                                    |
| `credit-capital-de-lucru` | Delete + 301, fold into `credit-pentru-afaceri-mici` as a section (`#capital-de-lucru`) | Owner decision, 2026-09-11 (round 4): "it's part of this" - capital de lucru is a _use_ of a business credit, not a distinct product. It was already listed as a situation row on `credit-pentru-afaceri-mici` linking out to its own page; that page-vs-section split was the exact cannibalization pattern the no-hub/no-modifier-pages rule above already rules out. The scenarios grid (creanțe blocate, sezon aglomerat, angajări noi, contract mare) and its two most distinctive FAQ entries moved into the afaceri-mici page; the rest of its content duplicated what afaceri-mici already said. |

### New pages required

None. (Round 1 listed `/faq` here - cancelled 2026-09-11, round 2. See "No `/faq`
route" above: cross-product questions distribute into the existing home-page FAQ,
the `/credite` hub FAQ, and the per-page `CreditFAQ` blocks instead.)

---

## Home Page H1 (decided 2026-09-11, round 2)

New H1: **"Credite pentru succes."**

Replaces the current `HeroHome` H1 ("Credite nebancare pentru afaceri și consum").
This is not a new coinage - it's the existing brand tagline, already live as the
quoted line on `/despre-noi` ("Credite pentru succes!"). Promoting it to the literal
homepage H1 is a copy change, not a new angle: it sits comfortably under Angle 1
(The Local Growth Partner) in `positioning.md` - "succes" carries the same
building/growth register as the angle's headline direction - without replacing that
angle's language, which stays available for subheads and CTAs.

Scope note: this entry records the decision. Implementing it is a one-line code
change in `components/home/HeroHome.tsx`, not done as part of this doc pass - flag
if you want it shipped now.

---

## The Service Page Template

Seven blocks, identical order on every service page. Maps directly onto the
components already in the codebase.

| #   | Block                                 | Answers                                                                       | Component                                                      | Absorbs from blog                                   |
| --- | ------------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------- |
| 1   | **Ce este**                           | Amount, term, what it funds - expressed as _situations_, not product features | `ServiceHero` + `ServiceFeatureGrid`                           | -                                                   |
| 2   | **Pentru cine**                       | Who qualifies, what credit history actually matters                           | `CreditPageContent.eligibleIf`                                 | `istoricul-de-credit-si-sansele-tale`               |
| 3   | **Cum funcționează**                  | The 4-stage process, compact                                                  | `HowItWorks`                                                   | `credit-rapid-decizie-in-ore`                       |
| 4   | **Cât costă**                         | DAE explained, total cost, fixed rate, transparency                           | `CreditPageContent.description` + link to `/calculator-credit` | `costul-real-al-unui-credit-nebancar`               |
| 5   | **De ce noi** _(business pages only)_ | OCN vs bank; honest answer on why the rate is higher                          | `WhyBento`                                                     | `ocn-vs-banca-credit-afaceri-moldova`               |
| 6   | **Documente**                         | Exact list + explicit "what you will NOT be asked for"                        | `CreditPageContent.documents` + `note`                         | `documente-necesare-...`, `credit-cu-buletinul-...` |
| 7   | **FAQ**                               | 5-8 product-specific questions                                                | `CreditFAQ`                                                    | per-article FAQ sections                            |

**Block 6 note:** the "ce NU ți se cere" framing is a differentiator - no competitor
states it. Keep it on every page.

---

## Blog Merge Map - all 8 existing articles

The blog empties completely and restarts as editorial.

| Current article                             | Destination                                                                                                                                                                                                 |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ghid-credit-afaceri-ocn-moldova`           | `/credite/credit-pentru-afaceri-mici` - distributed across blocks 1-7                                                                                                                                       |
| `ocn-vs-banca-credit-afaceri-moldova`       | Block 5 on all 4 business pages + `/credite` index ("de ce OCN")                                                                                                                                            |
| `documente-necesare-credit-afaceri-moldova` | Block 6, business pages                                                                                                                                                                                     |
| `credit-cu-buletinul-ce-cere-ideal-credit`  | Block 6, personal pages (incl. fidejusor rules)                                                                                                                                                             |
| `costul-real-al-unui-credit-nebancar`       | Block 4 everywhere + `/calculator-credit`; the general DAE question folds into the **home page FAQ** (`FAQ_ITEMS`)                                                                                          |
| `credit-rapid-decizie-in-ore`               | Block 3 everywhere + home + `/despre-noi`                                                                                                                                                                   |
| `istoricul-de-credit-si-sansele-tale`       | Block 2 everywhere + the **home page FAQ** (general credit-history question, not product-specific)                                                                                                          |
| `cum-alegi-credit-nebancar-pentru-afaceri`  | Splits: "is the lender authorized" → `/autoritatea-de-supraveghere` + `/despre-noi`; the rest → **`/credite` hub FAQ** (it's a cross-product "how do I choose" question, which is what the hub page is for) |

**Net result:** no new standalone pages created by the merge, and no `/faq` page
either (round 2 decision). Everything lands on home, service pages, the `/credite`
hub, or the calculator - every one of those already exists and already has a FAQ
surface built in.

---

## Redirect Table (critical - do not skip)

Merging without 301s discards whatever ranking equity these URLs hold.

### Blog → service layer

```
/blog/ghid-credit-afaceri-ocn-moldova          → /credite/credit-pentru-afaceri-mici
/blog/ocn-vs-banca-credit-afaceri-moldova      → /credite/credit-pentru-afaceri-mici#de-ce-ocn
/blog/documente-necesare-credit-afaceri-moldova→ /credite/credit-pentru-afaceri-mici#documente
/blog/credit-cu-buletinul-ce-cere-ideal-credit → /credite/credit-pentru-nevoi-personale#documente
/blog/costul-real-al-unui-credit-nebancar      → /calculator-credit
/blog/credit-rapid-decizie-in-ore              → /despre-noi#proces
/blog/istoricul-de-credit-si-sansele-tale      → /#faq
/blog/cum-alegi-credit-nebancar-pentru-afaceri → /credite#faq
```

No `#faq` anchor exists yet on the home page or the `/credite` FAQ sections -
add `id="faq"` to both when the merge is built, same as the `#de-ce-ocn` /
`#documente` anchors already flagged below.

### Page consolidation

```
/credite/credit-pina-la-salariu   → /credite/credit-pentru-nevoi-personale
/credite/credit-pentru-bugetari   → /credite/credit-pentru-nevoi-personale#bugetari
/credite/refinantare              → /credite/credit-pentru-nevoi-personale#consolidare
```

Update `app/sitemap.ts` to drop retired URLs in the same change.

---

## Blog Rules

### Topic gate

A topic is approved only if it passes **both** tests:

1. Would a numerate reader - business owner, accountant, investor - read this if it
   had no brand on it?
2. Does it involve real numbers: data, statistics, a mechanism, an investigation?

If an idea explains a process, a document list, or how to apply → **it is a service
page, not an article.**

Topics are approved manually, one at a time, and researched individually on request.
Volume is not a goal.

### The 5-10% soft-promotion rule

The promotion is **positional, not proportional** - which is what makes the ratio
enforceable on every article.

- **Body copy:** zero product mentions, zero CTAs, zero internal links to `/credite/*`
- **Closing module:** 2-3 sentences connecting the analysis to what Ideal Credit
  does, then one link. This is the entire promotional surface.
- **Optional, high value:** a single in-body data point sourced from Ideal Credit's
  own book - e.g. "in our portfolio, agricultural clients concentrate ~60% of
  drawdowns in March-April." This reads as authority, not promotion, and no
  competitor can replicate it.

### Register

The blog writes at a **higher sophistication level than the rest of the site.**
See `voice-profile.md` - this requires a documented two-register split:

- Site + FAQ: 2/10 sophistication (plain Romanian, DAE always explained)
- Blog: 6-7/10 (numerate peer, no over-explaining)

Without this written down, the blog gets drafted at the site's level and loses the
audience it exists to attract.

---

## Consequence for keyword-plan.md (partially reconciled)

`brand/keyword-plan.md` (2026-09-11) originally planned the business pillars as
**blog articles**. That is invalid under an editorial blog: every commercial and
how-to keyword target must be served by the **service layer** instead.

**Done, 2026-09-11 (round 2/3):** the "Credit afaceri fără gaj Moldova" row is
edited directly in `keyword-plan.md` (content-calendar entry, priority table, and
briefs table all marked superseded) and the refinanțare exclusion note there now
also records the page's retirement, not just the content exclusion.

**Still open** (not yet edited into `keyword-plan.md`):

| Keyword plan cluster                | Was                | Now                                                                                              |
| ----------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------ |
| Credit pentru extindere afacere     | Blog/Guide         | Section on `credit-investitional`                                                                |
| Credit capital circulant            | Blog/Guide         | Section (`#capital-de-lucru`) on `credit-pentru-afaceri-mici` - no longer its own page (round 4) |
| Ce documente trebuie credit afaceri | Published article  | Block 6, business pages                                                                          |
| Bancă vs OCN                        | Published article  | Block 5, business pages                                                                          |
| Ce este DAE / cum calculezi rata    | Blog articles      | `/calculator-credit` + home page FAQ                                                             |
| Finanțare Căușeni și regiune        | Local landing page | Stays a landing page - local intent, no cannibalization                                          |
| Educație financiară pillar          | Blog               | **Retired** - it is how-to content, which the new blog excludes                                  |

**Also note:** three of the eight merged articles were published only recently and
are marked DONE in the keyword plan. This rebuild retires them as standalone URLs.
That is the intended trade - their content survives inside the service pages - but
the rest of `keyword-plan.md` (pillars 1-3, the priority table, the content
calendar, the briefs table) still needs the same treatment as the two rows already
fixed, so the two documents fully stop contradicting each other.
