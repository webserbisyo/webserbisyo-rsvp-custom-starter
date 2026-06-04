# Website Flow

Section order comes from the public API. The starter must not hardcode a live default order.

Required wedding sections are `host_info`, `main_event`, `venue`, and `rsvp_form`.

Optional sections render only when enabled and non-empty in live mode.

`contact_socials` is displayed as a footer-style section when included. The platform may not force it last, so `SectionRenderer` collects it and renders it after main sections.

The RSVP section is CTA-only and links to the central route. It does not submit directly.

RSVP URL priority:

- `data.urls.rsvpUrl`
- `data.rsvp.url` or compatible public RSVP URL fields
- `{NEXT_PUBLIC_WEBSERBISYO_API_URL}/r/{slug}/rsvp`

Live mode must not render sample content, fake photos, or fake QR codes. Snapshot data is local-only and only available while design mode is enabled.
