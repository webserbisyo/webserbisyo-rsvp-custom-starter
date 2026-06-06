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

Safe prompt example:

> Add a future-ready client customization boundary under `src/client/` without changing public API fetching, section keys, inline RSVP behavior, or platform renderer ownership.

Unsafe prompt patterns:

- "Create a separate `/rsvp` page"
- "Wire the RSVP form to submit anyway"
- "Add a temporary fake RSVP success modal"
- "Replace the public API with local hardcoded client data"
- "Move section rendering out of the protected platform files without preserving parity"

Phase 1 reminder:

- if `src/client/` does not exist yet, do not invent broad runtime changes inside protected platform files just to make customization easier
- prefer docs, guard updates, and additive boundaries over renderer rewrites
