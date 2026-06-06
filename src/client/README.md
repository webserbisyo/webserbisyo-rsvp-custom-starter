# Client Boundary

`src/client/` is the inert client customization boundary introduced in Phase 2.

Use this folder in future client clones for:

- client-specific config
- client-specific visual styles
- client-specific assets
- optional additive components
- optional library integration notes

Protected files remain outside this folder:

- `src/lib/*`
- `src/types/*`
- `src/components/platform/*`
- `src/app/page.tsx`

Rules:

- no `/rsvp`
- no iframe RSVP
- no backend, Supabase, or server actions
- no fake submit or fake success
- keep RSVP inline only with `#rsvp` and `#rsvp-form`

Phase 2 note:

- this boundary exists now, but it is not wired into runtime yet
- runtime hooks and override mechanisms are deferred to a later phase
