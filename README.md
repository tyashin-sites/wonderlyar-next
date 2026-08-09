# WonderlyAR — Tyashin Next.js site

Customer storefront for **WonderlyAR** (AR learning platform for early childhood
education, a shadow brand of Thridify), ported from the original Lovable/Vite
SPA to Next.js 15 (App Router) on Cloudflare Workers via OpenNext.

- **Tyashin project:** `6a788b21adf117091b299967` (slug `aditya-website-mslvvasp`)
- **Worker:** `site-wonderlyar-next`
- **Live:** https://aditya-website-mslvvasp.sites.tyashin.com

## Stack

Next 15 · React 19 · `@opennextjs/cloudflare` · Tailwind v3 (the SPA's
coral/teal HSL token system carried over verbatim) · Nunito + Quicksand via
`next/font`.

## Architecture notes

- **SSR everywhere it matters** — every route ships page-specific metadata via
  `src/lib/seo.ts` and one interlinked schema.org `@graph`
  (`src/lib/knowledge-graph.ts`).
- **Site-native blog** at `/blog` + `/blog/[slug]` — SSR from the platform's
  public blog API (server-only `TYASHIN_API_KEY`), 404s until the Blog plugin
  has published posts; nav/footer links appear automatically once posts exist.
- **Forms proxy server-side** — `/api/contact` → Contact Form & Lead Capture
  plugin; `/api/newsletter` → Newsletter plugin. The API key never reaches the
  client bundle.
- **Platform-owned paths** (`/brand-kit.css`, `/sitemap.xml`, `/robots.txt`,
  RSS aliases) are intercepted by Tyashin dispatch in production;
  `next.config.ts` rewrites them for direct workers.dev access.
- **Plugin scripts** (chatbot, YOM analytics, consent banner) are edge-injected
  by the dispatch layer — do NOT add script tags here.
- `/sitemap-pages.xml` is generated from `src/lib/site-routes.ts` — add every
  new indexable page there.

## Deploy

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`, installed by
the platform's `/github/adopt` endpoint — never hand-edit it) builds with
OpenNext, deploys the Worker, syncs project secrets, and notifies the Tyashin
build webhook.

Local build check:

```bash
nvm use 24
npm run typecheck && npx @opennextjs/cloudflare build
```

## Robots

`ROBOTS_NOINDEX` var in `wrangler.jsonc` gates a site-wide noindex. It must be
`"false"` in production — flip it and redeploy as part of any cutover.
