# AI Prompts

## Styling-only edits

Read `AGENTS.md`, `docs/DO_NOT_BREAK.md`, `docs/DATA_CONTRACT.md`, `docs/SECTIONS.md`, and `docs/ARCHITECTURE.md`. Update only styling and frontend components. Do not change API paths, env names, section keys, RSVP behavior, or live placeholder rules.

## Adding a section

Read `AGENTS.md`, `docs/DO_NOT_BREAK.md`, `docs/DATA_CONTRACT.md`, `docs/SECTIONS.md`, and `docs/ARCHITECTURE.md`. Add the section only if the platform key exists. Update registry, types, docs, visibility handling, and tests/checks. Unknown keys must remain safe.

## Debugging fetch/data issues

Read `AGENTS.md`, `docs/DO_NOT_BREAK.md`, `docs/DATA_CONTRACT.md`, `docs/SECTIONS.md`, and `docs/ARCHITECTURE.md`. Inspect `src/lib/env.ts`, `src/lib/urls.ts`, `src/lib/public-event-api.ts`, and `src/lib/normalize-public-event.ts`. Do not add admin APIs, Supabase, or draft content fetching.

## Preparing a per-client custom repo

Read `AGENTS.md`, `docs/DO_NOT_BREAK.md`, `docs/DATA_CONTRACT.md`, `docs/SECTIONS.md`, and `docs/ARCHITECTURE.md`. Keep the repo frontend-only. Replace styles/assets with client-approved public content, set the event slug, deploy to Vercel, and paste the hidden origin in Super Admin.
