# Do Not Break

Phase 1 scope:

- This phase creates docs and guard foundations only.
- Do not change runtime rendering behavior in Phase 1.
- Do not change data fetching, normalization, section keys, or RSVP behavior in Phase 1.

Protected files:

- `src/lib/public-event-api.ts`
- `src/lib/normalize-public-event.ts`
- `src/lib/platform-render-model.ts`
- `src/lib/env.ts`
- `src/types/public-event.ts`
- `src/components/platform/EventWebsiteRenderer.tsx`
- `src/components/platform/PublicEventPageContent.tsx`
- `src/lib/rsvp-url.ts`
- `src/config/wedding-section-registry.ts`
- `src/app/page.tsx`

Protected runtime contract:

- The active runtime path is `src/app/page.tsx` -> `src/components/platform/PublicEventPageContent.tsx` -> `src/components/platform/EventWebsiteRenderer.tsx`.
- RSVP stays inline on `/`.
- Required RSVP anchors remain `#rsvp` and `#rsvp-form`.
- No `/rsvp` route.
- No `/r/[slug]/rsvp` route.
- No `/r/[slug]/rsvp/embed` route.
- No iframe or `postMessage` RSVP behavior.
- No `rsvpUrl` or `rsvpEmbedUrl`.
- No fake RSVP success or simulated working submission.
- No direct RSVP submission until an official public WebSerbisyo contract exists.

Protected architecture rules:

- Do not bypass the WebSerbisyo public API.
- Do not add backend/database logic.
- Do not add Supabase packages or service-role usage.
- Do not add server actions, auth, admin, billing, or payment logic.
- Do not expose hidden custom frontend origins in UI, metadata, or public env.
- Do not rename platform section keys without updating registry, docs, and types together.

Planned customization boundary:

- `src/client/` is the client-editable boundary introduced in Phase 2.
- It is inert by default in this phase.
- Do not import `src/client/client-registry.ts` into the platform renderer yet.
- Do not wire section slots or section overrides yet.
- Do not use `src/client/` as a reason to weaken security, API ownership, or RSVP protections.
- Treat protected platform/data files as non-customization targets unless a later approved runtime-hook phase explicitly changes that.

Starter neutrality:

- The starter must remain a neutral reusable base.
- Client-specific visual identity, venue language, couple names, or one-off editorial design must not become starter defaults.
- Client work belongs in future client-boundary files, not in protected platform/data files.
