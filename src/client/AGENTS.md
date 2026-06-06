# Client Boundary Instructions

This folder is the planned AI-safe customization boundary for future cloned client repos.

Rules:

- Future client visual customization belongs here.
- This Phase 3 boundary is imported only at the page-shell level.
- Default visual output remains unchanged because wrapper features are disabled by default.
- Do not edit protected platform/data files for client styling.
- Do not bypass the WebSerbisyo public API.
- Do not add backend, database, Supabase, or server actions.
- Do not add auth, admin, billing, or payment logic.
- Do not add standalone RSVP routes or route-based RSVP flows.
- Do not add embedded RSVP modes, cross-window messaging, or legacy RSVP URL helpers.
- Do not simulate working RSVP submission outcomes.
- RSVP remains inline on `/` with `#rsvp` and `#rsvp-form`.

Safe direction:

- Put future client-specific config, assets, styles, components, and optional libraries under `src/client/`.
- Keep runtime hooks limited to wrapper-level concerns in this phase.
- Keep nav and footer config-driven and anchor-based.
- Keep the client renderer switch disabled by default in the neutral starter.
- Keep per-section override wiring deferred until a later approved phase.
- Keep multi-page routing deferred.
