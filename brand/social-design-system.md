## Last Updated

2026-09-06

# Social Post Design System - Ideal Credit

**2026-09-06 - v4 alignment (pending choice):** the website is being redesigned to the "v4 dark,
sharp" system (warm near-black `#100E0C`, orange `#FF9A00`, Archivo + IBM Plex Mono, zero
radius, zero shadows, hairlines only). The chosen template ("Panou de date", dark for Tuesday, light for
Thursday) lives in `campaigns/social/templates/` (`dark.html`, `light.html`, `node build.mjs`
to export). Locked values are in [[creative-kit]]; the Color System and Typography sections
below still describe the old `#0b0b0b` / Inter spec and are superseded by it. File layout is now
one folder per post (`content.md` + `image.png`) - see [[social-media-strategy]]. The logo mark
is no longer placed in-frame; the `idealcredit.md` wordmark in the panel header replaces it (the
Logo & Sign-off section below is superseded on that point).

Visual spec for every short post and carousel described in
[[social-media-strategy]]. Applies to Facebook, LinkedIn, and the Instagram
repost of the same creative.

## Principle

We are a **pure content publisher on Moldovan business/finance** - medium-to-
premium visual quality, typography and real numbers doing the work. Every
frame should look like it belongs to a serious financial desk, not a meme
page and not a stock-photo ad.

**No AI-generated imagery. No generic/stock "business people shaking hands"
photos. No decorative nonsense pictures.** If a frame needs an image, it's
either a real, licensed photo (Moldovan context, un-staged) or it's typography
+ data on a clean background. When in doubt, leave it as typography - a
well-set number on a clean background always outperforms a filler image here.

---

## Canvas Sizes

| Use | Size | Notes |
| --- | --- | --- |
| Short post (single image) | 1080 x 1350 px (4:5) | Feed-native on both FB and IG, most vertical real estate in-feed |
| Carousel slide | 1080 x 1350 px (4:5) | Same size for every slide in the set - never mix aspect ratios within one carousel |
| LinkedIn repost | Same 1080 x 1350 export | No separate LinkedIn crop needed - the format works natively there too |
| Safe margin | 80px on all sides | Nothing but the background touches the edge; text/numbers never sit closer than 80px to any edge |

---

## Color System

Pulled directly from the site's token set (`app/globals.css`) so social
content and the website read as one brand, not two.

**Backgrounds (pick one per post, stay consistent within a carousel):**

| Token | Hex | Use |
| --- | --- | --- |
| `black-800` (primary) | `#0b0b0b` | Default post background - matches site background exactly |
| `black-600` (card) | `#111111` | Slightly lifted surface, e.g. a boxed stat or quote block |
| `black-400` (raised) | `#212121` | Sparingly, for a contrast panel inside a slide (e.g. source citation strip) |

**Brand accent (the number/hook color):**

| Token | Hex | Use |
| --- | --- | --- |
| `brand-500` | `#ff9a00` | The hero number on hook slides, key stat callouts, source-slide accent line |
| Brand gradient | `linear-gradient(135deg, #ffb347 0%, #ff9a00 50%, #ff6a00 100%)` | Optional on the hook number only, for the carousel's opening slide - never on body text |

**Text:**

| Token | Hex | Use |
| --- | --- | --- |
| White | `#fafafa` | Headlines, hero numbers, high-emphasis text |
| `gray-500` | `#aaaaaa` | Body copy, context lines |
| `gray-700` | `#818181` | Source citation, fine print, slide numbers |

**Secondary accents (use rarely, only when a post needs to contrast two data
points - e.g. rate up vs. rate down, credit vs. deposit):**

| Token | Hex | Use |
| --- | --- | --- |
| `green-500` | `#6c8f58` | Positive/favorable number in a two-number comparison |
| `blue-500` | `#567aa1` | Neutral second data point, or a LinkedIn-leaning slide that wants a cooler accent |

**Rule:** one background tone + brand orange + white/gray text is the default
for 95% of posts. Green/blue only appear when a post is explicitly comparing
two numbers and needs to visually separate them.

---

## Typography

**Font: Inter** (same as the site - `next/font/google`, already loaded as
`--font-sans`). No secondary display font. Consistency across every slide
comes from weight and size, not from mixing typefaces.

| Role | Weight | Size (on 1080x1350 canvas) | Notes |
| --- | --- | --- | --- |
| Kicker label | Bold / 700 | 24-28px | Uppercase, +3-4px letter-spacing, `brand-500`, small square/dot marker to its left. Sits above the hero number, every post - see Kicker Label section below |
| Hero number (hook slide) | Bold / 700 | 180-260px | Dominates the frame - see Layout below |
| Slide headline | Semibold / 600 | 64-80px | One line if possible, two max |
| Body / context text | Regular / 400 | 40-48px | 2-3 short lines max per slide |
| Landing line (closing slide) | Medium / 500 | 52-64px | Slightly heavier than body - it's the line people screenshot |
| Source citation | Regular / 400 | 26-30px | Always `gray-700`, always same position |
| Slide counter (carousel only, e.g. "2/6") | Regular / 400 | 24px | Top or bottom corner, `gray-700`, optional but recommended for carousel completion rate |

Line height: 1.15 for numbers/headlines, 1.4 for body text. Letter-spacing:
default (no tracking tricks, no all-caps body text - caps only for very short
labels like "SURSĂ").

---

## Backgrounds & Texture

- **Default:** flat `black-800` (`#0b0b0b`). Clean, no texture. This is
  correct for most slides - it puts all the weight on the number.
- **Optional subtle texture (use sparingly, max 1-2 slides per carousel):**
  the site's existing `.bg-squares` grid pattern (faint `#212121` grid lines
  on `#0b0b0b`, radial mask fading at the edges) - reuse this exact pattern
  for the hook slide only, to tie the post visually to the website without
  adding noise everywhere.
- **Noise overlay:** the site's `.noise` texture (3.5% opacity fractal noise)
  may be applied globally to add a slight premium film-grain feel - optional,
  consistent choice either on for every post or off for every post, not mixed
  post-to-post.
- **Never:** photo backgrounds behind text, gradients used decoratively
  (gradient is reserved for the hero number only), colored full-bleed
  backgrounds outside the black palette, any AI-generated illustration or
  scene.

---

## Layout Templates

### Short post (single image)

```
┌────────────────────────────────┐
│  80px margin                    │
│                                  │
│  ■ KICKER LABEL                 │  ← brand-500, uppercase, small marker, per lane (see below)
│                                  │
│         HERO NUMBER             │  ← brand-500 or brand gradient, centered
│                                  │     or left-aligned, 180-260px
│      one line of context        │  ← white/gray-500, 40-48px, max 2 lines
│                                  │
│                                  │
│                                  │
│  Sursă: [source]         [logo] │  ← gray-700, bottom-left; logo bottom-right
└────────────────────────────────┘
```

Kicker, one number, one context line, source, logo. Nothing else.

#### Kicker Label (every post, no exceptions)

A short, uppercase label above the hero number that tells the reader what kind of post this is
before the number lands - it also breaks up the empty space between the top margin and the
hero number. Fixed wording per content lane, not freeform copy invented per post - consistency
here is what makes it read as a system rather than decoration.

| Lane (per [[social-media-strategy]]) | Kicker label |
| --- | --- |
| Past success | POVESTE REALĂ |
| Money, business & credit facts / statistics | FAPT & CIFRĂ |
| Tips & tricks | SFAT PRACTIC |
| History & mechanisms | ISTORIE FINANCIARĂ |
| Global finance & investment numbers | CIFRĂ GLOBALĂ |
| Credit & loan news | ȘTIRE |
| Legal rules, decoded | REGULĂ DECODATĂ |

Style: `brand-500` (`#ff9a00`), Bold/700, 24-28px, uppercase, +3-4px letter-spacing, small
square or dot marker immediately to its left (also `brand-500`). Position: top-left, inside the
80px safe margin, directly above the hero number - same position on every post. Every post's
`.md` file should record which lane it's in (already required in the frontmatter) and the kicker
label follows automatically from that lane - no separate creative decision needed per post.

**Text budget: hook + small part of the opening, nothing more.** The image
carries just enough to stop the scroll and open the loop - the hero number
and a single short line (max ~12 words) that frames what it is. It does
**not** carry the reveal, the comparison, the second stat, or the "what this
actually means" - that's the caption's job. If a draft image has a secondary
bolded line, a second number, or a multi-clause explanation stacked under the
context line, that content moves to the caption text, not into a smaller
font in the frame. A short post's image should feel almost too simple by
itself - the caption is where the full picture lands.

If a number genuinely needs a second data point to make sense in-frame (not
just to add depth), it's a two-column split (number left, number right,
divider between) - never added text below the first number.

### Carousel (6-slide default) — PAUSED, not in current rotation

Per [[social-media-strategy]], carousels are paused - every post is single-image for now.
Spec kept here so the format can be switched back on later without rebuilding it from
scratch; nothing below applies to posts being built today.

Every slide shares the same margin, same source-line position, same logo
position - only the content role changes. Slide counter in the corner helps
swipe-through completion.

1. **Hook slide** - hero number only, centered, brand gradient allowed here
   specifically, optional `.bg-squares` texture. No context text yet - the
   open loop is the whole point.
2. **Context slide** - headline-weight text only (what people assume), no
   number needed, plain `black-800` background.
3. **Reveal slide** - smaller number/stat (60-90px, not hero-scale) paired
   with the explanation sentence below it.
4. **Full-picture slide** - body text only, two short lines max, this is the
   "yes, and" slide, not another number dump.
5. **Landing slide** - the send-to-someone line, medium weight, slightly
   larger than body text, can sit alone with generous white space - this is
   the most-screenshotted slide, give it room.
6. **Source slide** - small, centered or bottom-aligned, `gray-700`, logo
   present. Same template every single carousel so it becomes a recognizable
   sign-off.

---

## Logo & Sign-off

- Use `public/ideal-credit-logo.svg` (the circular orange mark) at small
  scale - bottom-right corner, ~64-80px diameter, consistent position on
  every slide and every short post.
- No wordmark needed in-frame beyond the mark itself - the account handle
  already carries the name.
- Per [[social-media-strategy]]: the in-frame image still stays pure content -
  no CTA button, no "Aplică" language, no price/product graphic in the
  design itself. The logo mark is the only brand presence inside the image.
- The written brand sign-off ("Ideal Credit - credite pentru succes!" +
  hashtags) lives in the caption, every single post, not in the image - see
  [[social-media-strategy]] for the exact caption structure.

---

## Do / Don't

**DO:**
- Include the kicker label above the hero number on every post, using the fixed lane-to-label
  mapping above - no post skips it, no post invents new kicker wording
- Keep every slide to one idea, one number, generous white space
- Reuse the exact same source-citation and logo position across every post -
  repetition builds recognizability
- Use real photography only if it's genuinely Moldovan context (a real
  market, a real office exterior, a real product) - never staged stock
- Default to typography-only slides; treat imagery as the exception, not the
  norm

**DON'T:**
- No post without its kicker label, and no ad-hoc kicker wording outside the lane mapping above
- No AI-generated images, illustrations, or "hero" scenes
- No generic stock photography (handshakes, people pointing at laptops,
  smiling call-center models)
- No emoji used as design elements (small, sparing use in captions is fine -
  never inside the graphic itself)
- No more than one accent color (beyond brand orange) per post
- No mixing canvas sizes within a single carousel
- No gradients or textures on body-text slides - save the visual flourishes
  for the hook slide only

---

## Export Checklist

1. 1080 x 1350px, sRGB, PNG (or JPG at 90%+ quality for photo-inclusive
   slides)
2. Consistent margin (80px) and logo/source position across the whole set
3. Text contrast checked against background (white/gray-500 on `black-800`
   passes easily; never place body text directly on the brand-orange
   gradient)
4. File naming: `NN-topic-slug_1.png` (e.g. `01-bnm-rata-de-baza_1.png`), living next to its
   matching `.md` file in `campaigns/social/YYYY-MM/week-N/` - see File Organization in
   [[social-media-strategy]]
