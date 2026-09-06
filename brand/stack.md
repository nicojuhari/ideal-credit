# Marketing Stack - Ideal Credit

Last updated: 2026-09-06

## CMS

- **Storyblok** ✓ connected - powers blog/content at idealcredit.md

## Backend

- **ICM API** ✓ connected - loan application processing

## Email ESP

- ✗ not connected

## Analytics

- **Google Analytics** (GA4) - ID: G-YXDZGPPXPH (in codebase, not in .env)
- **Hotjar** - in codebase
- **Facebook Pixel** - ID: 2254113158275780 (in codebase)

## Paid Ads / Social

- Facebook Pixel connected (tracking)
- **Buffer** ✓ connected (2026-09-06) - `BUFFER_API_KEY` in `.env.local`, GraphQL at api.buffer.com. Channels: LinkedIn "Ideal Credit", Instagram "idealcredit.md", Facebook "Ideal Credit". Script: `campaigns/social/templates/schedule.mjs`

## AI / Generation

- Replicate API: ✗ not connected

## MCP Servers

- None detected

## Notes

- Site: https://idealcredit.md
- Market: Moldova (Romanian language)
- Mid-migration from Nuxt 4 → Next.js (see CLAUDE.md)
