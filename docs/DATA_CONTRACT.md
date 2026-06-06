# Data Contract

Current public API success shape:

```ts
{ data: PublicEventDto }
```

Supported section order/content shapes:

```ts
data.sections // ordered string array from the platform
data.content.layout.sectionOrder
data.content.layout.enabledSections
data.content.sections
data.sectionsByKey
data.guestbookMessages
data.publicGuestbookMessages
data.urls.publicWebsiteUrl
data.urls.fallbackUrl
data.formatted
```

Current error shape:

```ts
{
  error: {
    code: string;
    message: string;
    scope: string;
    fieldErrors?: Record<string, string[] | undefined>;
  }
}
```

Only public-safe fields may be consumed. Do not fetch or render draft `content_json`, admin fields, payment fields, private RSVP response data, Supabase data, or `custom_frontend_origin_url`.

The normalizer owns all tolerated platform shape differences. Section components should consume the normalized render model and their normalized section content, not parse deep raw API objects independently.

Unknown section keys must be skipped safely. Disabled sections must stay hidden. Optional empty sections must hide in live mode.

Known limitations:

- Gift images are persisted in the platform schema, but uploaded images may not be exposed reliably in the current public render model.
- Guestbook standalone endpoint is placeholder; render approved messages only when included in the public DTO.
- Gift wallet endpoint is placeholder; do not implement wallet fetching.
- RSVP custom questions may exist in platform content, but the starter does not submit directly.
- The main platform no longer exposes separate public RSVP URLs for the starter. Keep RSVP inline in the one-page flow and treat submission integration as platform-owned until an official public contract is published.
- Public canonical URLs should prefer `data.urls.publicWebsiteUrl` and must never expose hidden `.vercel.app` origins.
- Dashboard preview may pass a safe `eventSlug` query override, but the public API base URL must always come from `NEXT_PUBLIC_WEBSERBISYO_API_URL`.
