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

## Phase 2 client boundary

- `src/client/` now exists as the future customization zone
- it is inert by default
- future client clones should start with `src/client/client.config.ts`
- do not expect runtime visual changes from Phase 2 alone
- runtime hooks and override mechanisms are deferred to a later phase

## Phase 3 wrapper hook

- `src/client/` is now imported at the page-shell level only
- the active runtime still remains `src/app/page.tsx` -> `src/components/platform/PublicEventPageContent.tsx` -> `src/components/platform/EventWebsiteRenderer.tsx`
- default visual output remains unchanged because `layout.navEnabled` and `layout.footerEnabled` are both `false`
- this phase does not add section overrides
- this phase does not change RSVP behavior
- future phases may safely enable config-driven nav/footer first before any section-override work

## Phase 4 optional nav/footer

- `src/client/client.config.ts` now supports config-driven nav/footer scaffolding
- defaults remain disabled, so the base starter output remains unchanged
- nav links should stay on local anchors such as `#top`, `#venue`, and `#rsvp`
- RSVP remains inline only
- do not add `/rsvp` pages
- do not add redirect or embedded RSVP flows
- multi-page routing is still deferred

## Phase 5 page-level client renderer

- the starter now includes a page-level client renderer switch in `src/client/client.config.ts`
- the default remains `renderer.mode = "platform"` with `allowClientRenderer = false`
- base starter output remains unchanged by default
- `src/components/platform/EventWebsiteRenderer.tsx` remains protected
- section-level slot overrides are still deferred
- future cloned client repos may opt into a custom client renderer after cloning, using real event data only

## Phase 6 library protocol

- client UI libraries should be organized under `src/client/libs/`
- use wrapper hubs where practical, especially for icons
- `lucide-react` is already installed and may be used through `@/client/libs/icons`
- shadcn, Framer Motion, and ReactBits-style libraries are documented for clones only and are not installed in the neutral starter
- see `docs/LIBRARY_PROTOCOL.md` and `docs/CLONE_READINESS_CHECKLIST.md`
