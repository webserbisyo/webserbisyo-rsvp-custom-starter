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
Never use `.webserbisyo/event.snapshot.json` in live mode.
Never expose hidden custom frontend origins in UI, metadata, or public env.
Never hardcode couple names, dates, venues, sponsors, gifts, or contact details in components.
Never rename platform section keys without updating the registry, docs, and types.
Never put secrets in `NEXT_PUBLIC_*`; these values are browser-public and may be inlined at build time.
Never allow query params to override `NEXT_PUBLIC_WEBSERBISYO_API_URL`.

Always render from platform section order.
Always skip unknown section keys safely.
Always keep RSVP submission platform-owned.
Always customize themes through CSS variables/tokens before changing component colors.
Always run typecheck, lint, and build before delivery.

Starter neutrality:

- The starter must stay a neutral reusable WebSerbisyo wedding base.
- Client-specific visual themes must never be committed as starter defaults.
- Theme presets may exist only as documented optional examples, not default runtime styles.
- Every client custom design belongs in the cloned client repo.
- The default runtime must track the main platform `EventWebsiteRenderer` and public `event-preview-*` CSS baseline.
- Do not invent a separate default starter UI, shell, marketing navbar, landing hero, or editorial layout.
- Keep client customization layered above the protected platform renderer/data adapter baseline.
- Platform renderer icons must go through `src/components/platform/platform-icons.tsx`; do not scatter direct icon library imports across base renderer files.
- The starter RSVP section may iframe the official platform RSVP embed URL when `data.urls.rsvpEmbedUrl` exists, and must keep the central WebSerbisyo RSVP route as a CTA fallback. Do not copy platform server actions or embedded RSVP submission logic into this repo.
- Extra UI libraries such as shadcn, ReactBits, Motion, GSAP, or Framer Motion belong in cloned client repos after baseline validation unless explicitly approved for the starter.

Dashboard preview may pass safe query params such as `eventSlug`, `preview`, and `source`. `eventSlug` can override the configured slug only in local/design/dashboard preview contexts. Guest/live production must not show debug chrome unless design or snapshot mode is active.
