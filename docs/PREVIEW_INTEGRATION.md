# Preview Integration

The main WebSerbisyo RSVP platform may iframe or open this custom frontend from dashboard preview screens after Super Admin saves `custom_frontend_origin_url` and enables the custom website.

This repo remains frontend-only. It still fetches event data only from:

```txt
{NEXT_PUBLIC_WEBSERBISYO_API_URL}/api/public/events/{eventSlug}
```

## Safe Query Params

Supported preview query params:

- `eventSlug`
- `preview`
- `source`

`eventSlug` may override `NEXT_PUBLIC_EVENT_SLUG` only in safe preview contexts:

- `preview=dashboard`
- `source=dashboard`
- local development
- explicit design mode

The API base URL is never read from the query string. It must come from `NEXT_PUBLIC_WEBSERBISYO_API_URL`.

## Dashboard Badge

`preview=dashboard` or `source=dashboard` may show a subtle `Custom Preview` badge. Guest/live production mode should not show debug badges unless design mode or snapshot mode is active.

## Public URL Rules

The custom frontend origin is a hidden infrastructure URL, not the public guest URL.

Guests should continue to use the main platform public wildcard URL:

```txt
https://{clientSubdomain}.rsvp.webserbisyo.com
```

The public canonical URL should prefer `data.urls.publicWebsiteUrl`. Dashboard preview mode omits canonical metadata and marks the page noindex so iframe/open preview cannot poison SEO.

Never expose the hidden custom frontend origin in UI, public metadata, guest docs, or `NEXT_PUBLIC_*` values.
