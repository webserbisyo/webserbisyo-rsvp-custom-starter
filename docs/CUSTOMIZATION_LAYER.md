# Customization Layer

The starter architecture has three layers:

- Layer 0: platform core outside this repo
- Layer 1: protected starter baseline inside this repo
- Layer 2: client layer under `src/client/`

Layer 0: platform core outside this repo

- public API ownership
- RSVP backend ownership
- section key contract
- moderation, publishing, and hidden custom origin ownership

Layer 1: protected starter baseline

- active runtime flow: `src/app/page.tsx` -> `src/components/platform/PublicEventPageContent.tsx` -> `src/components/platform/EventWebsiteRenderer.tsx`
- public API fetcher
- normalized public event data
- platform render-model adapter
- inline RSVP anchors and one-page flow
- metadata safety
- neutral starter CSS baseline

Layer 2: client layer

- future path: `src/client/`
- intended use: client-specific theme overrides, assets, safe wrapper-level customization, and optional additive UI enhancements
- present in Phase 2 as an inert boundary
- imported in Phase 3 only at the page-shell level

Important Phase 2 note:

- `src/client/` now exists.
- It is currently wired only through a minimal page-shell wrapper.
- Default output remains unchanged because the wrapper config is disabled by default.
- Protected platform files remain the source of truth until a later runtime-hook phase is approved.

Current Phase 3 limit:

- no section slots
- no per-section override registry wiring
- no edits to `src/components/platform/EventWebsiteRenderer.tsx`
- no changes to RSVP behavior

Current Phase 4 limit:

- optional nav/footer support is allowed only through `src/client` config and wrapper components
- defaults remain disabled
- no multi-page routes
- no route groups
- no section-slot registry wiring

Rules for future client customization:

- do not change API ownership
- do not change protected data normalization
- do not change section keys
- do not change inline RSVP ownership or anchors
- do not revive removed RSVP routes or embed patterns
- do not fake working submission behavior
