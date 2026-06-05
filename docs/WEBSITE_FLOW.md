# Website Flow

Section order comes from the public API. The starter must not hardcode a live default order.

The starter default runtime must mirror the main platform wedding preview/public renderer structure. It should read as the reusable platform baseline, not as a landing page, marketing website, or finished client theme.

Required wedding sections are `host_info`, `main_event`, `venue`, and `rsvp_form`.

Optional sections render only when enabled and non-empty in live mode.

The reusable wedding flow should preserve the platform preview section/card rhythm:

- Couple Info
- Countdown
- Music & Effects
- Ceremony
- Venue
- Reception
- Timeline / Program
- Entourage
- Principal Sponsors
- Attire / Motif
- Extra Info
- Gift Details
- Guestbook
- Love Story
- RSVP CTA section
- Contact / Footer

Gallery is a future platform-supported foundation section. In live mode, render it only when the public API provides real gallery images. Design mode may include an empty gallery note for implementation review.

`contact_socials` is displayed as a footer-style section inside the same platform frame when included.

The RSVP section supports platform-owned modes only:

- `iframe`: render the official platform RSVP embed when `data.urls.rsvpEmbedUrl` exists.
- `cta`: fall back to the central route when no embed URL is provided.
- `future-api`: reserved until the main platform publishes a supported public custom frontend submission contract with validation, CSRF/rate-limit, and error handling rules.

Do not copy platform server actions, Supabase logic, or direct RSVP submission handlers into custom starter or client repos.

Default header behavior:

- The starter default does not render a marketing navbar because the main platform public renderer does not.
- The visible RSVP section keeps the `#rsvp` anchor.
- If an official embed URL exists, the RSVP form appears inside the section through an iframe.
- If the embed URL is missing or blocked, the fallback CTA opens the central RSVP route.

RSVP URL priority:

- Embed iframe source: `data.urls.rsvpEmbedUrl` only.
- `data.urls.rsvpUrl`
- `data.rsvp.url` or compatible public RSVP URL fields
- `{NEXT_PUBLIC_WEBSERBISYO_API_URL}/r/{slug}/rsvp`

Live mode must not render sample content, fake photos, or fake QR codes. Snapshot data is local-only and only available while design mode is enabled.

Stable anchors:

- `#couple`
- `#countdown`
- `#ceremony`
- `#venue`
- `#reception`
- `#timeline`
- `#attire`
- `#gifts`
- `#messages`
- `#rsvp`
- `#contact`
