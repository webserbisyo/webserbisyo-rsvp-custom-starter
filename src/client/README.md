# Client Boundary

`src/client/` is the client customization boundary introduced in Phase 2 and minimally wired in Phase 3.

Use this folder in future client clones for:

- client-specific config
- client-specific visual styles
- client-specific assets
- optional additive components
- optional library integration notes
- wrapper-level UI hooks that do not replace protected platform rendering

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
- do not edit `src/components/platform/EventWebsiteRenderer.tsx` for client-specific design
- do not add section-slot overrides here yet

Phase 3 note:

- this boundary is now imported at the page-shell level only
- default visual output remains unchanged because nav and footer are disabled
- runtime hooks are limited to the page wrapper in this phase
- section override mechanisms are deferred to a later phase
