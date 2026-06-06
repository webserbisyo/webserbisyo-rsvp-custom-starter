# Client Boundary

`src/client/` is the client customization boundary introduced in Phase 2 and minimally wired in Phase 3.

Use this folder in future client clones for:

- client-specific config
- client-specific visual styles
- client-specific assets
- optional additive components
- optional library integration notes
- wrapper-level UI hooks that do not replace protected platform rendering
- organized library wrappers under `src/client/libs/`

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
- keep nav links on local anchors only
- do not add multi-page route groups here yet
- do not edit `src/components/platform/PublicEventPageContent.tsx` or `src/components/platform/EventWebsiteRenderer.tsx` to switch renderers
- prefer `src/client/libs/*` wrapper imports when a library hub exists
- shadcn, ReactBits-style libraries, and motion libraries are clone-only unless already installed and approved

Phase 5 note:

- this boundary is now imported at the page-shell level only
- nav and footer are now config-driven
- default visual output remains unchanged because nav and footer are still disabled
- the page-level client renderer switch now exists, but it is disabled by default
- runtime hooks remain limited to the page wrapper in this phase
- section override mechanisms are deferred to a later phase
- multi-page routing is still deferred
- the library protocol now lives in `src/client/libs/README.md` and `docs/LIBRARY_PROTOCOL.md`

Responsiveness workflow:

- use `docs/RESPONSIVENESS.md` as the clone responsiveness contract
- use `src/client/responsive.ts` for shared breakpoint and checklist guidance
- test at `375px`, `768px`, and `1280px`
- retest after enabling client nav, client footer, or the client renderer
- retest after adding Lucide, shadcn, ReactBits-style components, or motion libraries in a clone
- keep inline RSVP visible and usable at `#rsvp` and `#rsvp-form`
- do not introduce horizontal overflow while styling client-specific sections
