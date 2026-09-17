# Blog Editorial Strategy — Dincolo de Cifre

## Last Updated

2026-09-16 — full reset. Replaces the old keyword-popularity blog model. Retires
`campaigns/blog-archive/` and the old `campaigns/content-plan/` briefs (see
`assets.md` Retired Assets for what was removed and why). Builds on — and
finally closes — the editorial pivot decided in `positioning.md` (Angle 6/9/10,
2026-09-11) and the blog rules in `site-architecture.md`, which were written
but never executed.

---

## Identity

**Name: Dincolo de Cifre** ("Beyond the Numbers")

Supersedes the earlier "Biroul de Analiză" candidate in `positioning.md` Angle
6 — same underlying idea (the lender that reads Moldova's numbers properly),
broader framing. "Biroul de Analiză" read as bureaucratic and entrepreneur-only;
"Dincolo de Cifre" scales to the full intended audience (business owners,
other finance companies, government, smart generalists, students) and states
the actual promise directly: every piece exists to show what's past the
headline number — the real story, transaction, or mechanism most people don't
see.

Distinct editorial identity from the Ideal Credit sales voice, but stays at
`idealcredit.md/blog` — not a separate domain or brand.

**Language: Romanian only** (decided 2026-09-16). No blog route exists yet in
the codebase — this is a from-scratch build, not a retrofit. Bilingual (EN
route at `/en/blog/*` with reciprocal hreflang) was considered and rejected:
it doubles the cost of every article at the exact moment the strategy commits
to quality-over-quantity, and the stated audience (government, Moldovan
finance companies, business owners) reads Romanian. Individual pieces can be
translated selectively later if one earns outside attention — not a standing
bilingual commitment.

## Purpose

The blog is not a traffic funnel and not a place to explain how Ideal Credit's
products work (that is the service layer's job — see `site-architecture.md`,
"nothing transactional in the blog, nothing editorial in the services").

It exists to earn authority by being genuinely worth reading on its own —
facts, stats, and stories about business, finance, investments, and money,
Moldova or not — for an audience that includes people who will never apply for
a loan: government, other finance companies, students, smart generalists.

## Register (closes the open dependency in `voice-profile.md` / `site-architecture.md`)

The blog writes at a **higher sophistication level than the rest of the site**
(site + FAQ: plain, 2/10. Blog: numerate peer, 6-7/10).

The precise rule (2026-09-16 clarification):

- **Don't explain standard financial vocabulary.** No "ce este DAE," no
  "ce este un credit." The reader already knows this.
- **Do unpack complex mechanisms, situations, and transactions** — especially
  ones that look simple on the surface but aren't, or that most people don't
  understand the true story behind. Explain these in simple, clear sentences.
  Professional tone throughout, never dumbed down, never jargon for its own
  sake.
- In short: skip Finance 101. Do the investigation. Write the explanation of
  *that* in plain language.

This replaces the stale `blog` entry in `voice-profile.md` (the old "teacher
mode... links to the application form" guidance belongs to the retired model).

**Human, not literal (added 2026-09-17).** Write the way people in Moldova
actually talk about money and business, not a stiff, literal-translation
register. Grammatically correct, never slang for its own sake, but idiomatic
over bureaucratic — a natural phrase a smart person would actually say beats
a technically-precise one that reads like it was assembled word-by-word.
Caught in article 1: "creditori serioși care se bat **pe** același client"
read as confusing when parsed literally (fight *on top of* the client).
The fix kept the natural, colloquial "se bat" (lenders fighting over
customers is exactly how a Moldovan business owner would put it) and only
swapped the preposition — "se bat **pentru** același client" — rather than
retreating to a flatter, more formal alternative like "concurează pentru
aceiași clienți." When a phrase reads unclear, prefer the smallest fix that
keeps the human register over rewriting into safer, blander formal Romanian.

Also caught in article 1, same root cause — words that are technically
correct Romanian but not words people around here actually reach for in
this context: **"durabil"** (a rate drop "scade durabil") replaced with
**"pe termen lung"**; **"mai adâncă"** (a "deeper" capital market — a
literal translation of the English finance term "market depth") replaced
with **"mai dezvoltată"** / **"puțin dezvoltată."** Same test applies every
time: would a Moldovan business owner or analyst actually say this word in
conversation, or only encounter it in a translated report? If the latter,
find the word they'd actually use.

## Design & typography (added 2026-09-16, after reviewing article 1 live)

- **No repeated branding chrome.** The blog doesn't restate "Dincolo de Cifre"
  as an eyebrow label on every page, and it doesn't explain itself ("this blog
  exists to...") anywhere in the UI. The listing page is just the wordmark and
  the list. The article page is just the title and the piece — no eyebrow, no
  "back to Dincolo de Cifre" (the back link reads "Toate articolele").
- **No reading-time estimate.** It's one more number to keep accurate for no
  real benefit here — dropped. Articles show only the publish date.
- **Paragraphs: 1-2 sentences.** No exceptions for "explaining" paragraphs.
  If a paragraph needs a third sentence, it's two paragraphs.
- **A small, disciplined type scale.** In practice: one size for the h1, one
  for h2 section headers, one body size (prose, dek, table cells, closing
  note), one small/mono size (meta line, table headers, chart axis labels).
  Not a new size for every element - that's what made the first draft of
  article 1 feel cluttered.
- **Captions get their own, smaller tier** (added 2026-09-16) — any
  supplementary text attached to an image, chart, or table (a source note, a
  "figure 1" line) is smaller than the small/mono tier above, not the same
  size. Use the shared `components/blog/Caption.tsx` component so this stays
  consistent across every future chart or image, not just article 1's.
- **Fixed-width chart columns must be sized to content, not padded.** Article
  1's first pass gave the bar chart's category-label column a flat 110px,
  which ate most of the width on a narrow phone screen and left the small
  bars barely visible. Size it to the longest label plus a little room
  (article 1 needed 88px for "Media UE"), not a round number chosen upfront.

## Cover images: no (added 2026-09-16)

Articles don't get a cover/hero photo. The blog's visual language is the data
itself — tables and charts under "Cifrele" already are the lead visual, and
adding a decorative stock or AI-generated image on top would be exactly the
generic blog-imagery this identity is defined against (same reasoning as the
"no-AI-imagery rule" in `brand/creative-kit.md` for social). The OG image
(auto-generated per article via `lib/og.tsx`, same system every other page on
the site uses) already covers the social-share thumbnail need. If a future
article's actual subject calls for a real photo (an interview, a specific
place), decide it case by case — this isn't a standing template requirement.

## Social promo (added 2026-09-16)

Every article ships with a companion social post - **one unified caption for
LinkedIn and Facebook**, same register as the "linkedin" tone in
`voice-profile.md` (professional, expertise-forward, leads with the insight
not "new blog post!"). Hashtags only if they fit naturally, not required.

Stored as an MDX comment (`{/* ... */}`) at the bottom of the article's own
`page.mdx`, right after `<ClosingNote>` - not a separate file in
`campaigns/social/`. Keeps the promo copy next to the piece it promotes,
ready to copy into Buffer when scheduling. No custom image needed: the link
preview uses the article's own `opengraph-image.tsx` automatically.

## Discoverability (added 2026-09-16)

The only link to the blog anywhere on the site is in the footer, under
"Companie" ("Dincolo de Cifre"). No homepage module yet - owner decision:
revisit adding a homepage section once there are 3+ articles published, not
before. Don't add one preemptively for a single article.

## Comparison integrity (added 2026-09-16)

When an article compares its actual subject against others (article 1:
Moldova vs. seven other markets), **the subject stays in the primary
table/chart.** Do not omit it to a closing footnote for the sake of a
definitional caveat (e.g. "this is a bank-sector figure, Ideal Credit is
non-bank") - that makes the central visual answer a different question than
the one the headline asks. Instead, label the caveat directly on the data
point (e.g. "Moldova (sector bancar)") and explain it briefly, right after the
table, not as a delayed reveal.

## No fixed taxonomy — deliberate

Considered and rejected a 5-pillar category structure (Cost of Money, Moldova
Economy, Business & Capital, Global/History, Personal Finance). Owner decision,
2026-09-16: **no topic restrictions by category.** Categories/tags can emerge
later from what's actually published, not be designed upfront. Pre-defined
pillars would just recreate the keyword-plan mindset this reset is moving away
from.

## The Topic Gate

The only filter. A topic is approved if all three are true:

1. **On-subject** — business, finance, investment, or money related. Moldova
   or global, doesn't matter.
2. **Real substance** — there's enough real material (data, a mechanism, a
   genuine story) to write it well, not pad it.
3. **Valuable** — a numerate reader (business owner, finance professional,
   government, smart generalist, student) would read it even with no brand on
   it. It's not disguised how-to/product content — that belongs on service
   pages, not here.
4. **Complete** — added 2026-09-16, after reviewing article 1. A topic implies
   a small set of real reader questions (for "why is credit expensive here":
   what drives it, why is it regulated the way it is, could it get cheaper,
   and how does this place compare). The draft must answer each one somewhere
   findable, under a heading that names the question — not just illustrate one
   dimension of the topic and call it done. This is a check to run at the
   structure gate (3), not just at draft time - an outline missing one of the
   topic's real questions gets sent back before any prose is written.

No volume target. Quality over quantity is the explicit goal — this is not a
publishing-cadence content calendar, it's a slow, deliberate publication.

## Workflow — one topic at a time, five gates

Every article goes through five sequential approvals before it's published.
Nothing skips ahead. Never batch multiple topics through the pipeline at once.

1. **Topic pitch** — I bring one topic, checked against the gate above, with a
   one-paragraph rationale for why it's interesting and who it's for. You
   approve, reject, or redirect it.
2. **Research** — I research the topic (data, sourcing, the actual mechanism
   or story, competitive/uniqueness check — has anyone in Moldova already
   written this well?). I bring back findings and the angle. You approve or
   send back for more digging.
3. **Structure** — title + subtitle/section outline, shown before any prose is
   written. You approve or revise the structure.
4. **Draft** — full article, written using the `direct-response-copy` skill
   (Romanian output, register per this doc, not the skill's default
   internet-native sales voice). 5-10% soft promotion max (zero product
   mentions in body; one closing-module connection to Ideal Credit, one link —
   per `site-architecture.md` "soft-promotion rule"). Refined 2026-09-16: keep
   the closing module to a single sentence, not the 2-3 originally specified -
   matches the "1-2 sentence paragraph" rule above and reads as quieter, less
   like ad copy.
5. **Audit** — added 2026-09-16, mandatory, runs every time after the draft
   is written, before it's marked ready to publish. Re-read the piece with
   fresh eyes against these four checks:
   - **Easy reading** — every paragraph is 1-2 sentences (see Design &
     typography above); no sentence so dense with clauses that a reader has
     to re-read it.
   - **Clear message** — each section answers the question its heading asks;
     no claim left vague when a specific number or source is available.
   - **Valued, not padded** — every sentence earns its place; cut anything
     that restates a point already made.
   - **No spam or nonsense** — no AI-cliché filler ("e important de
     menționat," "practic," empty transitions), no mismatched punctuation or
     typos, no inconsistent data ordering between a table and its chart.
   - **SEO metadata length** — added 2026-09-17. Run `npm run check:blog`
     and fix anything it flags before publishing (see "SEO metadata length"
     below for the limits and why).
   - **Body length** — added 2026-09-17. Same `npm run check:blog` run
     checks word count too (see "Body length" below). A thin result means
     go back and find more real substance, not pad existing sentences.
   Fix what's found directly in the draft. This is a full pass, not a
   skim — it caught real issues in article 1 (a stray 3-sentence paragraph,
   a mismatched quotation mark, a table row out of the chart's sort order).
   Article 3 caught a different kind: two real but easily-confused numbers
   (60,000 homeowners vs. ~40,000 loans - a loan can have two co-owners)
   introduced without reconciling them, which reads as an inconsistency even
   though both figures are correct. When two related numbers for the same
   fact appear in an article, reconcile them in the same sentence the first
   time the second one shows up - don't just cite each in isolation and trust
   the reader to work out why they differ.

## SEO metadata length (added 2026-09-17)

The on-page H1 and dek (`post.title` / `post.dek` in `lib/blog-posts.ts`) are
reader-facing and stay as long as the headline needs. The `<title>` tag and
meta description in each article's `export const metadata` block are a
**separate, shorter pair written for the SERP snippet** - they were drifting
out of sync with no check catching it (article 3's first draft: a 72-char
title and a 190-char description, both well past what Google displays before
truncating).

Limits (character count, used as a proxy for Google's actual pixel-width
truncation):

- **Title** (including the fixed `" | Dincolo de Cifre"` suffix): ≤ 60
  characters.
- **Description**: 120-156 characters. Under 120 reads thin; over 156 risks
  mid-sentence truncation in the search result.

Run `npm run check:blog` (script: `scripts/check-blog.mjs`) as part of the
Audit gate, before an article is marked ready to publish. It reads every
`app/blog/(articles)/*/page.mdx`, checks the top-level `title` and
`description` against these limits, and exits non-zero if any article fails -
safe to wire into a pre-publish check later if that becomes useful.

## Body length (added 2026-09-17)

Target **800-1000 words**. Floor: **700 words** - below that, don't pad
existing sentences to hit the number. A short article is a symptom, not the
problem: it usually means the topic didn't have enough real substance, or the
draft only explored one dimension of it and stopped. Go back to the Topic
Gate's "Complete" check and the Research gate - find the angle, the
comparison, the mechanism, or the story that was missing - rather than
stretching what's already there.

The same `npm run check:blog` run reports word count (reader-facing text
only - imports, the metadata block, JSX/chart data, and the social-promo
comment are excluded from the count) alongside the metadata-length check.

Audit (2026-09-17) of the first three articles against this floor: article 3
(`dobanda-negativa-danemarca`, 770 words) is close, a real paragraph short.
Articles 1 and 2 (636 and 573 words) are meaningfully under - both were
data-recitation pieces that stopped at illustrating one dimension of their
topic instead of answering the topic's full set of real reader questions;
see the per-article notes wherever this gets addressed.

## Open items carried from earlier work (still valid, unchanged by this doc)

- The 5-10% soft-promotion rule and "nothing transactional in the blog" — see
  `site-architecture.md`, Blog Rules.
- Angle 9 ("De partea cealaltă a mesei" / The Insider's Ledger) stays available
  as an in-body device — an aggregate, anonymized data point from Ideal
  Credit's own portfolio, used sparingly, reads as authority not promotion.
