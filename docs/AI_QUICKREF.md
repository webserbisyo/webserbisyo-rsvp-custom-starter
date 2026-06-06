# AI Quick Reference

Read first:

- `AGENTS.md`
- `docs/DO_NOT_BREAK.md`
- `docs/SECTION_MAP.md`
- `docs/CLIENT_GUIDE.md`

Hard rules:

- do not touch protected data/runtime files unless the task explicitly requires it
- do not add backend, database, Supabase, server actions, auth, admin, billing, or payment logic
- do not revive `/rsvp`, `/r/[slug]/rsvp`, `/r/[slug]/rsvp/embed`, iframe RSVP, `postMessage`, `rsvpUrl`, or `rsvpEmbedUrl`
- do not fake RSVP success or simulated working submit behavior
- keep RSVP inline on `/` with `#rsvp` and `#rsvp-form`

Current architecture:

- active runtime: `src/app/page.tsx` -> `src/components/platform/PublicEventPageContent.tsx` -> `src/components/platform/EventWebsiteRenderer.tsx`
- protected data/runtime files live in `src/lib/*`, `src/types/*`, and `src/components/platform/*`
- future client design work should target `src/client/` once a later phase creates it

Phase 2 boundary:

- `src/client/` now exists
- it is inert by default
- do not wire it into protected runtime files yet unless a later approved phase explicitly requires it

Phase 3 boundary:

- `src/client/` is now imported only at the page-shell level
- do not edit `src/components/platform/EventWebsiteRenderer.tsx` for client-specific design
- do not add section-slot overrides yet
- keep RSVP inline at `#rsvp` and `#rsvp-form`

Phase 4 boundary:

- optional client nav/footer support is config-driven inside `src/client`
- defaults remain disabled
- use local anchors only for navigation
- multi-page routes are still out of scope

Phase 5 boundary:

- a page-level client renderer switch now exists in `src/client/client.config.ts`
- it is disabled by default
- `EventWebsiteRenderer` remains protected
- do not add section slots yet

Phase 6 boundary:

- library usage should be organized under `src/client/libs/`
- use wrapper imports where practical
- shadcn, Framer Motion, and ReactBits-style libraries are clone-only unless already installed and approved

Safe prompt example:

> Add a future-ready client customization boundary under `src/client/` without changing public API fetching, section keys, inline RSVP behavior, or platform renderer ownership.

Safe future prompt example:

> Customize the client visual design inside `src/client/` only. Do not edit `src/lib`, `src/components/platform`, or RSVP routing. Keep RSVP inline at `#rsvp`.

Safe clone prompt examples:

> In this cloned client repo, add a ReactBits-inspired hero inside `src/client/renderer` only. Do not edit `src/lib` or platform renderer. Keep RSVP inline.

> In this cloned client repo, use motion only inside `src/client` for scroll reveals. Do not add fake RSVP success.

> In this cloned client repo, add shadcn Button and Card components under `src/client/components/ui` only. Do not modify `EventWebsiteRenderer`.

Unsafe prompt patterns:

- "Create a separate `/rsvp` page"
- "Submit RSVP locally"
- "Use Supabase directly"
- "Edit EventWebsiteRenderer for client-specific design"
- "Add iframe RSVP"
- "Add per-section client override slots right now"
- "Add route groups or a `/rsvp` page for nav"
- "Rewrite EventWebsiteRenderer to support client mode"
- "Install shadcn and rewrite EventWebsiteRenderer"
- "Wire the RSVP form to submit anyway"
- "Add a temporary fake RSVP success modal"
- "Replace the public API with local hardcoded client data"
- "Move section rendering out of the protected platform files without preserving parity"

Phase 1 reminder:

- if `src/client/` does not exist yet, do not invent broad runtime changes inside protected platform files just to make customization easier
- prefer docs, guard updates, and additive boundaries over renderer rewrites
