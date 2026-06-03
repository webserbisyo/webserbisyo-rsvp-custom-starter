# Agent Instructions

This repo is frontend-only. It renders public custom event design for WebSerbisyo RSVP.

Before editing, read:

- `AGENTS.md`
- `docs/DO_NOT_BREAK.md`
- `docs/DATA_CONTRACT.md`
- `docs/SECTIONS.md`
- `docs/ARCHITECTURE.md`

Never add Supabase service role keys.
Never add `DATABASE_URL`.
Never add admin secrets.
Never add payment secrets.
Never add auth, billing, payment, or admin logic.
Never bypass the WebSerbisyo public API.
Never show placeholders in live mode.
Never hardcode couple names, dates, venues, sponsors, gifts, or contact details in components.
Never rename platform section keys without updating the registry, docs, and types.

Always render from platform section order.
Always skip unknown section keys safely.
Always use the central RSVP route for v1.
Always run typecheck, lint, and build before delivery.
