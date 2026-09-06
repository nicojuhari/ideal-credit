# Social post templates (v4 - "Panou de date")

The chosen template, in two themes. Tokens from the v4 website redesign: warm near-black
`#100E0C`, brand orange `#FF9A00`, Archivo for text, IBM Plex Mono for figures and labels, zero
radius, zero shadows, hairlines only. Rules: `brand/social-design-system.md`,
`brand/social-media-strategy.md`, `brand/creative-kit.md`.

| File | What |
| --- | --- |
| `dark.html` | Tuesday post (Past success). Dark panel. |
| `light.html` | Thursday post (Tips & tricks). Cream panel, ink text. |
| `posts.js` | Post data - one object per post: `out` folder, `theme`, kicker, figure, unit, context, source. |
| `build.mjs` | Exports every post to `campaigns/social/<out>/image.png` via headless Google Chrome. |
| `schedule.mjs` | Schedules one post on every Buffer channel (LinkedIn, Instagram, Facebook) via the Buffer GraphQL API. Needs `BUFFER_API_KEY` in `.env.local` and a public image URL. |
| `export.sh` | Low-level single export: `./export.sh dark.html <index> <out.png>`. |
| `index.html` | Gallery of both themes for every post in `posts.js`. |
| `base.css`, `template.js` | Shared tokens, slot filling, figure auto-fit. |

## Producing a week

1. Write the two `content.md` files in `campaigns/social/YYYY-MM/week-N/01/` and `02/`.
2. Add both posts to `posts.js` - copy kicker, figure, unit, context and source verbatim
   (diacritics included). `01` is `theme: "dark"`, `02` is `theme: "light"`.
3. Run:
   ```
   node campaigns/social/templates/build.mjs
   ```
   Each post's `image.png` lands next to its `content.md`. Pass a folder to build one post only.
4. Commit and push the week's folders to `main` - the public repo doubles as the image host
   Buffer needs (its API has no upload endpoint, only public URLs).
5. Schedule each post on all three channels:
   ```
   node campaigns/social/templates/schedule.mjs 2026-09/week-2/02 \
     https://raw.githubusercontent.com/nicojuhari/ideal-credit/main/campaigns/social/2026-09/week-2/02/image.png
   ```
   If you re-export an image that was already scheduled, pin the URL to the new commit SHA
   instead of `main` (GitHub's raw CDN caches the `main` path for a few minutes) and edit the
   existing Buffer posts rather than creating new ones.
   Default time is 10:00 Chișinău on the `publish` date from `posts.js`; pass
   `YYYY-MM-DDTHH:MM` to override, `--dry-run` to preview, `--only=facebook` for one channel.

Fonts load from Google Fonts, so export needs network.
