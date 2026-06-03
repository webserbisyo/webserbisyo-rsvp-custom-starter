# Architecture

The main platform repo `webserbisyo-rsvp` owns truth and URLs: wildcard subdomains, dashboards, Supabase, billing, RSVP responses, moderation, publish state, public API, fallback `/r/[slug]`, Website Access, and the future wildcard proxy.

This custom repo renders design only. It fetches published public event data through the public API and connects to one platform event by `NEXT_PUBLIC_EVENT_SLUG`.

Public guest URL remains the client editable subdomain:

```txt
https://{clientSubdomain}.rsvp.webserbisyo.com
```

The platform event slug is the data key. The custom frontend origin URL is the hidden deployed origin stored later in Super Admin as `custom_frontend_origin_url`.

Future wildcard proxy behavior: the main platform serves the custom design behind the public subdomain. This repo must be proxy-aware but must not implement the proxy.
