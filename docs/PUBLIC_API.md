# Public API

The starter fetches:

```txt
GET {NEXT_PUBLIC_WEBSERBISYO_API_URL}/api/public/events/{NEXT_PUBLIC_EVENT_SLUG}
```

Do not assume `/website`. Do not call admin APIs. Do not call Supabase directly.

The API URL builder is centralized in `src/lib/urls.ts`; response handling is centralized in `src/lib/public-event-api.ts`.
