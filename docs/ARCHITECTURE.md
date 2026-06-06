# Architecture

The main platform repo `webserbisyo-rsvp` owns truth and URLs: wildcard subdomains, dashboards, Supabase, billing, RSVP responses, moderation, publish state, public API, fallback `/r/[slug]`, Website Access, and the future wildcard proxy.

This custom repo renders design only. It fetches published public event data through the public API and connects to one platform event by `NEXT_PUBLIC_EVENT_SLUG`.

The protected runtime has three layers:

- Platform renderer baseline: `src/components/platform/*`, which mirrors the main platform `EventWebsiteRenderer` public template and `event-preview-*` CSS rhythm.
- Data adapter layer: public API data is normalized and adapted into the platform-compatible render model without changing API ownership.
- Customization layer: cloned client repos may add approved theme overrides, custom assets, and optional section styling after the baseline is validated.

The starter RSVP section is part of the same one-page event website flow. The starter must not depend on removed platform RSVP routes, iframe embeds, or copied backend submission logic.

The starter default must not introduce a separate marketing shell, navbar, hero, client theme, or custom UI kit. Those belong only in cloned client repos.

Public guest URL remains the client editable subdomain:

```txt
https://{clientSubdomain}.rsvp.webserbisyo.com
```

The platform event slug is the data key. The custom frontend origin URL is the hidden deployed origin stored later in Super Admin as `custom_frontend_origin_url`.

Future wildcard proxy behavior: the main platform serves the custom design behind the public subdomain. This repo must be proxy-aware but must not implement the proxy.

Dashboard preview behavior: the main platform may iframe or open the hidden custom origin with safe query params such as `eventSlug`, `preview=dashboard`, and `source=dashboard`. The custom starter may use the query slug only for local/design/dashboard preview contexts and must never read an API base URL from the query string.
