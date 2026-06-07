# Agent Instructions

This repo is the neutral reusable WebSerbisyo RSVP custom starter.

Read before editing:

- `AGENTS.md`
- `docs/DO_NOT_BREAK.md`
- `docs/CLIENT_GUIDE.md`
- `docs/SECTION_MAP.md`
- `docs/AI_QUICKREF.md`

Protected runtime/data layer:

- `src/app/page.tsx`
- `src/components/platform/*`
- `src/lib/env.ts`
- `src/lib/public-event-api.ts`
- `src/lib/normalize-public-event.ts`
- `src/lib/platform-render-model.ts`
- `src/lib/rsvp-url.ts`
- `src/types/public-event.ts`

Rules:

- Keep this repo frontend-only.
- Do not bypass the WebSerbisyo public API.
- Do not add Supabase, server actions, database logic, auth, admin, billing, or payment logic.
- Do not revive `/r/[slug]/rsvp`, `/r/[slug]/rsvp/embed`, iframe RSVP, `postMessage`, or `rsvpEmbedUrl`.
- Keep homepage RSVP anchors stable on `/` with `#rsvp` and `#rsvp-form`.
- Use local `/rsvp` for the dedicated custom RSVP page.
- Do not fake RSVP success or simulate working submission behavior.
- Do not put client-specific design, copy, or editorial layout into protected starter platform files.
- Do not hardcode couple names, dates, venues, sponsors, gifts, or contact details in reusable starter runtime files.

Customization guidance:

- This Phase 1 repo change adds docs and guard foundations only.
- `src/client/` is the planned future client-editable boundary. Do not assume it is implemented yet.
- Future client customization should target `src/client/` once that boundary exists.
- Until then, do not treat protected platform/data files as general customization targets.

Starter expectations:

- Keep the starter neutral and reusable.
- Preserve the current runtime flow: `src/app/page.tsx` -> `src/components/platform/PublicEventPageContent.tsx` -> `src/components/platform/EventWebsiteRenderer.tsx`.
- Preserve one-page inline RSVP behavior and local anchor scrolling.
- Preserve platform section order, safe unknown-key skipping, and public-data ownership.
