# Do Not Break

Protected files:

- `AGENTS.md`
- `src/lib/env.ts`
- `src/lib/public-event-api.ts`
- `src/lib/normalize-public-event.ts`
- `src/lib/rsvp-url.ts`
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
- No hidden origin exposure.
- No snapshot usage in live mode.
- No fake QR or fake media in live mode.
- No admin, billing, payment, auth, or private RSVP response logic.
- No secrets in `NEXT_PUBLIC_*`; these values are browser-public.
