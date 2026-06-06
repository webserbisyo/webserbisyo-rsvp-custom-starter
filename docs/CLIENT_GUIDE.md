# Client Guide

Use this repo as the neutral starting point for a future client clone.

Basic workflow:

1. Clone this starter.
2. Configure public env vars for live mode.
3. Verify the baseline against the current platform-compatible runtime.
4. Add client-specific design work only through the future client boundary once it exists.

Live-mode env:

- `NEXT_PUBLIC_WEBSERBISYO_API_URL`
- `NEXT_PUBLIC_EVENT_SLUG`
- `NEXT_PUBLIC_DESIGN_MODE=false`

Rules for future client clones:

- keep the platform data layer untouched
- keep `src/lib/public-event-api.ts`, `src/lib/normalize-public-event.ts`, `src/lib/platform-render-model.ts`, and `src/types/public-event.ts` unchanged unless a platform contract update requires it
- use real platform data instead of hardcoded event content in the reusable baseline
- keep RSVP inline on `/`
- keep `#rsvp` and `#rsvp-form`
- do not add `/rsvp`
- do not add iframe RSVP
- do not wire fake RSVP submit or fake success behavior
- do not expose hidden origin URLs as public guest URLs

Deployment note:

- the hidden Vercel origin is an implementation detail
- the platform/Super Admin will connect that hidden origin later
- guests should continue to use the public WebSerbisyo guest domain, not the hidden deployment URL

Phase 1 note:

- `src/client/` is planned as the future safe customization boundary
- this phase only documents that direction; it does not implement it yet
