# Customization Layer

The starter architecture has three layers:

- Layer 0: platform core outside this repo
- Layer 1: protected starter baseline inside this repo
- Layer 2: planned future client layer under `src/client/`

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

Layer 2: planned future client layer

- future path: `src/client/`
- intended use: client-specific theme overrides, assets, safe wrapper-level customization, and optional additive UI enhancements
- not implemented in Phase 1

Important Phase 1 note:

- Phase 1 does not create a working `src/client/` runtime layer.
- Phase 1 only clarifies the docs and guard foundations so later phases can add `src/client/` safely.

Rules for future client customization:

- do not change API ownership
- do not change protected data normalization
- do not change section keys
- do not change inline RSVP ownership or anchors
- do not revive removed RSVP routes or embed patterns
- do not fake working submission behavior
