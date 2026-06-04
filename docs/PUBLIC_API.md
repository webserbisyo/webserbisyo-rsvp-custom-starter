# Public API

The starter fetches:

```txt
GET {NEXT_PUBLIC_WEBSERBISYO_API_URL}/api/public/events/{NEXT_PUBLIC_EVENT_SLUG}
```

Do not assume `/website`. Do not call admin APIs. Do not call Supabase directly.

The API URL builder is centralized in `src/lib/urls.ts`; response handling is centralized in `src/lib/public-event-api.ts`.

The fetcher supports only the public success envelope:

```ts
{ data: PublicEventDto }
```

Malformed responses render a controlled unavailable state. Raw errors are not thrown into the UI.

Supported improved fields include `data.content.layout.sectionOrder`, `data.content.layout.enabledSections`, `data.content.sections`, `data.guestbookMessages`, `data.urls.rsvpUrl`, `data.urls.publicWebsiteUrl`, and `data.formatted`.

Current supported public fields include:

- `data.urls.fallbackUrl`
- `data.urls.rsvpUrl`
- `data.urls.publicWebsiteUrl`
- `data.formatted.*`
- `data.sectionsByKey`
- `data.content.layout.sectionOrder`
- `data.content.layout.enabledSections`
- `data.content.sections`
- `data.publicGuestbookMessages`

Preview query params may choose a safe event slug, but they must never choose the API base URL. `NEXT_PUBLIC_WEBSERBISYO_API_URL` remains the only API origin.

RSVP remains link-only. The starter resolves RSVP URLs in this order:

- `data.urls.rsvpUrl`
- compatible normalized public RSVP URL fields
- `{NEXT_PUBLIC_WEBSERBISYO_API_URL}/r/{slug}/rsvp`
