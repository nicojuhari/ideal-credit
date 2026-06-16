# Blog Strategy & Rebuild Plan

Updated: 2026-05-18

---

## Format Decision: MDX

**Why MDX, not TSX or JSON:**

- Content stays in markdown (readable, easy to edit without touching code)
- Can embed React components inside (CTA boxes, info boxes, calculator links)
- Next.js App Router has native MDX support via `@next/mdx`
- Individual files per article - easy to add, edit, or remove one without touching others
- Static generation at build time - zero server cost, fast load

**Architecture:**

```
app/blog/
  page.tsx                              ← listing page (will change from Storyblok to static registry)
  [slug]/page.tsx                       ← DELETE after migration (was Storyblok dynamic)
  cum-alegi-credit-nebancar-pentru-afaceri/page.mdx
  istoricul-de-credit-si-sansele-tale/page.mdx
  credit-cu-buletinul-ce-cere-ideal-credit/page.mdx
  credit-rapid-decizie-in-ore/page.mdx
  costul-real-al-unui-credit-nebancar/page.mdx
  [new articles...]

lib/
  blog-posts.ts                         ← metadata registry for listing page

mdx-components.tsx                      ← custom MDX components (CTA box, Info, etc.)
```

**Redirects (next.config.ts):**

```
/blog/cum-sa-alegi-cel-mai-bun-credit-nebancar-pentru-afaceri → /blog/cum-alegi-credit-nebancar-pentru-afaceri
/blog/istoria-de-credit-si-impactul-asupra-finantelor-tale    → /blog/istoricul-de-credit-si-sansele-tale
/blog/credite-doar-cu-buletinul-mituri-vs-realitate           → /blog/credit-cu-buletinul-ce-cere-ideal-credit
/blog/ce-este-un-credit-rapid-si-cand-avem-nevoie-de-el       → /blog/credit-rapid-decizie-in-ore
/blog/dobanda-si-care-sunt-costurile-reale-ale-unui-credit    → /blog/costul-real-al-unui-credit-nebancar
/blog/istoria-aparitiei-banilor-si-rolul-lor-in-dezvoltarea-economica → /blog (informational, redirect to listing)
/blog/de-la-imprumuturi-in-antichitate-la-finantarea-moderna  → /blog (delete, redirect to listing)
/blog/ce-se-intampla-daca-nu-poti-rambursa-un-credit          → /blog (wrong audience, redirect to listing)
```

---

## Articles to Rewrite (5 existing)

| #   | New slug                                   | New title                                                                  | Old slug                                                | Priority           |
| --- | ------------------------------------------ | -------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------ |
| 1   | `cum-alegi-credit-nebancar-pentru-afaceri` | Cum alegi un credit nebancar pentru afacere - ghid practic                 | cum-sa-alegi-cel-mai-bun-credit-nebancar-pentru-afaceri | HIGH (5m26s dwell) |
| 2   | `istoricul-de-credit-si-sansele-tale`      | Istoricul de credit: cum îți afectează șansele la un credit nebancar       | istoria-de-credit-si-impactul-asupra-finantelor-tale    | MEDIUM (4m23s)     |
| 3   | `credit-cu-buletinul-ce-cere-ideal-credit` | Credit cu buletinul - ce se cere și ce nu, la Ideal Credit                 | credite-doar-cu-buletinul-mituri-vs-realitate           | MEDIUM             |
| 4   | `credit-rapid-decizie-in-ore`              | Decizie în 1–3 ore: cum funcționează procesul de creditare la Ideal Credit | ce-este-un-credit-rapid-si-cand-avem-nevoie-de-el       | MEDIUM             |
| 5   | `costul-real-al-unui-credit-nebancar`      | Costul real al unui credit nebancar - dobândă, DAE, ce plătești lunar      | dobanda-si-care-sunt-costurile-reale-ale-unui-credit    | MEDIUM             |

---

## New Articles (8 new - decision-intent only)

Rule: every article must target someone who is actively considering applying.
Rule: no article competes with existing product pages (they target different search intent).

| #   | Slug                                           | Title                                                                        | Angle                                                                                     | Doesn't compete with                                                                       |
| --- | ---------------------------------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 6   | `fidejusor-garant-credit-nebancar`             | Fidejusor la credit nebancar - cine poate fi și ce înseamnă                  | Addresses the #1 hesitation: "I need a guarantor but don't know what that means for them" | No existing page covers this                                                               |
| 7   | `ma-calific-pentru-credit-nebancar`            | Mă calific pentru un credit nebancar? Criterii reale pentru 2026             | Self-qualification checklist - attracts people who aren't sure they qualify               | Product pages list requirements but don't answer "do I qualify specifically"               |
| 8   | `documente-necesare-credit-afacere`            | Ce documente ai nevoie pentru un credit de afacere - lista completă          | Practical prep guide - people gathering documents are about to apply                      | Product pages mention "extrase bancare" but don't give a complete preparation guide        |
| 9   | `capital-de-lucru-vs-credit-investitional`     | Capital de lucru sau credit investițional - care se potrivește afacerii tale | Helps business owners choose between two products                                         | Each product page explains one product; this is the comparison for people deciding         |
| 10  | `cat-pot-imprumuta-credit-nebancar`            | Cât pot împrumuta? Cum se calculează suma la un credit nebancar              | Explains the factors behind loan limits + links to calculator                             | Product pages say "până la 300.000 lei" but don't explain how the limit is determined      |
| 11  | `credit-firma-noua-6-luni-activitate`          | Credit pentru firmă nouă - se poate cu 6 luni de activitate?                 | Targets new business owners who think they don't qualify                                  | Product page says "activitate economică înregistrată" - this answers "how new is too new?" |
| 12  | `cum-verifici-ca-un-creditor-nebancar-e-sigur` | Cum verifici că un creditor nebancar e sigur și autorizat în Moldova         | Trust/safety article - attracts careful borrowers doing due diligence                     | No existing page covers CNPF licensing, what to check before signing                       |
| 13  | `credit-nebancar-vs-banca-diferente-reale`     | Credit nebancar vs bancă - diferențele reale pentru antreprenori din Moldova | Comparison that positions non-bank credit correctly - without attacking banks             | No existing page covers this comparison                                                    |

---

## What makes each new article different from product pages

Product pages answer: "What do you offer and what are the conditions?"
Blog articles answer: "How do I make the right decision?" / "Do I qualify?" / "What should I know before I sign?"

These are two different moments in the buyer journey. Product pages are for people ready to evaluate an offer. Blog articles are for people still figuring out if they should apply at all - which is exactly where Ideal Credit's consultation philosophy pays off.

---

## Tone for all articles

- Honest: if something is required (fidejusor, extrase bancare), say so clearly and explain why - not defensively
- Specific: use real MDL amounts, real timelines from Ideal Credit's actual process
- First-person plural where appropriate: "La noi, analizăm individual. Un incident din trecut nu e refuz automat."
- Ends with consultation CTA - not a hard sell, an invitation: "Discutăm 15 minute și îți spunem concret ce e posibil."
- No generic statistics ("73% of consumers...") - only Ideal Credit data or Moldova-specific figures
