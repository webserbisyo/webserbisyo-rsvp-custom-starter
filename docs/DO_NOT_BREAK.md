# Do Not Break

Protected files:

- `AGENTS.md`
- `src/lib/env.ts`
- `src/lib/public-event-api.ts`
- `src/lib/normalize-public-event.ts`
- `src/lib/rsvp-url.ts`
- `src/lib/platform-render-model.ts`
- `src/components/platform/EventWebsiteRenderer.tsx`
- `src/components/platform/PublicEventPageContent.tsx`
- `src/components/platform/platform-icons.tsx`
- `src/config/wedding-section-registry.ts`
- `src/types/public-event.ts`
- `docs/DATA_CONTRACT.md`
- `docs/SECTIONS.md`
- `docs/ARCHITECTURE.md`

Rules:

- No backend database.
- No Supabase packages.
- No placeholders in live mode.
- No direct RSVP submission.
- No platform server actions copied into the starter.
- No hidden origin exposure.
- No snapshot usage in live mode.
- No fake QR or fake media in live mode.
- No admin, billing, payment, auth, or private RSVP response logic.
- No secrets in `NEXT_PUBLIC_*`; these values are browser-public.
- No query-string API base URL override.
- No dashboard preview canonical metadata.
- No direct header RSVP jump to the platform form; scroll to the custom RSVP section first.
- No client-specific theme, venue, couple, visual identity, or editorial treatment as the starter default.
- No theme preset as default runtime styling. Presets may be documented examples only.
- No invented default starter shell, marketing navbar, landing hero, or separate renderer.
- No UI libraries such as shadcn, ReactBits, Motion, GSAP, or Framer Motion in the starter unless explicitly approved.
- `lucide-react` is allowed only for platform visual parity and only behind `src/components/platform/platform-icons.tsx`.

Protected preview behavior:

- `eventSlug` query override is allowed only for local/design/dashboard preview contexts.
- `preview=dashboard` or `source=dashboard` may show `Custom Preview`.
- Hidden custom frontend origins must stay out of UI, metadata, and public env.

Protected starter shape:

- The starter stays neutral and reusable.
- Client visual design work belongs in cloned client repos.
- Default runtime must track the main platform `EventWebsiteRenderer` public template and `event-preview-*` CSS structure.
- The platform renderer and data adapter are protected base layers; client customization is a separate layer.
- User-entered/client-entered text must wrap safely and never overflow its card or pill.
