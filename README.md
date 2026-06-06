# WebSerbisyo RSVP Custom Starter

Reusable frontend-only custom website starter for WebSerbisyo RSVP wedding sites.

This repo renders public design only. It fetches published event data from the main platform public API using `NEXT_PUBLIC_EVENT_SLUG`.

It is not the main platform, not a per-client repo, not an admin app, not a database, and not an RSVP submission backend.

The default runtime baseline mirrors the main platform wedding public/account preview renderer. New client repos should start from that platform-compatible `event-preview-*` section/card structure before any client design work happens.

## Quick Start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Default design mode uses safe sample data:

```env
NEXT_PUBLIC_DESIGN_MODE=true
```

Design mode displays a visible badge. If `.webserbisyo/event.snapshot.json` exists, design mode may use it for local layout testing.

Live mode requires:

```env
NEXT_PUBLIC_WEBSERBISYO_API_URL=https://webserbisyo.com
NEXT_PUBLIC_EVENT_SLUG=your-platform-event-slug
NEXT_PUBLIC_DESIGN_MODE=false
```

Live mode never falls back to sample data or snapshots. Missing config renders an unavailable/setup state.

All `NEXT_PUBLIC_*` values are browser-public and can be inlined at build time. Never put secrets, hidden custom origins, admin tokens, service role keys, database URLs, or payment secrets there.

## Public API

The starter fetches:

```txt
GET {NEXT_PUBLIC_WEBSERBISYO_API_URL}/api/public/events/{NEXT_PUBLIC_EVENT_SLUG}
```

The API path is centralized in `src/lib/urls.ts` and `src/lib/public-event-api.ts`.

Dashboard preview may pass `eventSlug`, `preview`, and `source`. The query slug is accepted only for local/design/dashboard preview contexts. The API base URL is never accepted from query params.

## Prefetch

```bash
npm run prefetch:event -- your-platform-event-slug
```

This writes `.webserbisyo/event.snapshot.json`. Snapshots are ignored by git.

Snapshots are local-only and are never used when `NEXT_PUBLIC_DESIGN_MODE=false`.

## Deploy

Deploy the repo to Vercel with the public env values above. The resulting `.vercel.app` origin is hidden from guests and later pasted into Super Admin as `custom_frontend_origin_url`.

Guests continue to use:

```txt
https://{clientSubdomain}.rsvp.webserbisyo.com
```

The main platform will later proxy that public wildcard URL to the hidden custom frontend origin.

The RSVP section stays inline within the same one-page event flow. This starter does not depend on removed platform RSVP routes, removed RSVP embed modes, or direct RSVP submission logic.

See `docs/MODES.md`, `docs/DATA_CONTRACT.md`, `docs/PREVIEW_INTEGRATION.md`, `docs/ASSET_SYSTEM.md`, `docs/MEDIA_GUIDE.md`, and `docs/THEME_SYSTEM.md` before customizing the starter.
