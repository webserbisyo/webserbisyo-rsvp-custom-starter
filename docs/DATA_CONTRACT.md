# Data Contract

Current public API success shape:

```ts
{ data: PublicEventDto }
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

Known limitations:

- Gift images are persisted in the platform schema, but uploaded images may not be exposed reliably in the current public render model.
- Guestbook standalone endpoint is placeholder; render approved messages only when included in the public DTO.
- Gift wallet endpoint is placeholder; do not implement wallet fetching.
- RSVP custom questions may exist in platform content, but starter v1 links to the central RSVP route and does not submit directly.
