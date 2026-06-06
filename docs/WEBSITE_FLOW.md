# Website Flow

The website flow is one page on `/`.

Rules:

- section order comes from the public API
- the starter must not hardcode a live default order
- the active runtime stays inside the one-page platform-compatible flow

RSVP flow:

- Inline RSVP stays within the same page
- use local anchor scrolling only
- required anchors are `#rsvp` and `#rsvp-form`
- do not add a separate RSVP page
- do not use removed platform RSVP routes
- do not use iframe or embed RSVP
- do not add submit wiring in the starter

Current section rhythm:

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
- RSVP
- Gift Details
- Guestbook
- Love Story
- Contact / Footer

Current anchor guidance:

- `#countdown`
- `#rsvp`
- `#rsvp-form`
- other sections currently use `data-preview-section` markers in the active platform renderer

Live-mode rules:

- no sample content
- no fake photos
- no fake QR codes
- no fake RSVP success
