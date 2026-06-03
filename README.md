# WebSerbisyo RSVP Custom Starter

Reusable frontend-only custom website starter for WebSerbisyo RSVP wedding sites.

This repo renders public design only. It fetches published event data from the main platform public API using `NEXT_PUBLIC_EVENT_SLUG`.

It is not the main platform, not a per-client repo, not an admin app, not a database, and not an RSVP submission backend.

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

Live mode requires:

```env
NEXT_PUBLIC_WEBSERBISYO_API_URL=https://webserbisyo.com
NEXT_PUBLIC_EVENT_SLUG=your-platform-event-slug
NEXT_PUBLIC_DESIGN_MODE=false
```

Live mode never falls back to sample data. Missing config renders an unavailable/setup state.

## Public API

The starter fetches:

```txt
GET {NEXT_PUBLIC_WEBSERBISYO_API_URL}/api/public/events/{NEXT_PUBLIC_EVENT_SLUG}
```

The API path is centralized in `src/lib/urls.ts` and `src/lib/public-event-api.ts`.

## Prefetch

```bash
npm run prefetch:event -- alexander-morales-wedding-rsvp-20260513-9435
```

This writes `.webserbisyo/event.snapshot.json`. Snapshots are ignored by git.

## Deploy

Deploy the repo to Vercel with the public env values above. The resulting `.vercel.app` origin is hidden from guests and later pasted into Super Admin as `custom_frontend_origin_url`.

Guests continue to use:

```txt
https://{clientSubdomain}.rsvp.webserbisyo.com
```

The main platform will later proxy that public wildcard URL to the hidden custom frontend origin.
