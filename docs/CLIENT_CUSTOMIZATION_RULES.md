# Client Customization Rules

Client repos may customize:

- Layout polish
- Public client-approved imagery
- Theme token overrides
- Typography choices
- Section styling
- Optional custom decoration around existing sections
- Client-specific token presets
- Client-approved public gallery styling after platform/API gallery data exists
- Optional UI libraries after the starter baseline is validated
- Icon swaps through the platform icon adapter

Every client custom design belongs in the cloned client repo. Do not commit client-specific visual identity, venue language, couple names, theme names, or one-off editorial layout back into this reusable starter.

Starter runtime defaults must continue to track the main platform public/account preview renderer. Do not replace the base renderer with a custom landing page, marketing navbar, client-specific hero, or alternate UI kit in this repo.

Client repos must not customize:

- Public API path
- Platform section keys
- RSVP submission behavior
- Backend/database/auth/payment/admin logic
- Hidden custom origin exposure
- Live placeholder behavior
- RSVP anchor and CTA behavior
- Query-string API base URL behavior
- Platform renderer baseline behavior
- Platform data adapter behavior

Keep the starter contract intact. If a platform section key changes, update registry, docs, types, and normalizer together.

Do not hardcode couple names, dates, venues, sponsors, gifts, photos, QR images, or contact details in reusable starter components. Use the public API render model and theme tokens instead.

Theme presets may exist only as documented optional examples. They must not be imported, selected, or applied as default runtime styles in the starter.

Libraries such as shadcn, ReactBits, Motion, GSAP, and Framer Motion may be added in cloned client repos after baseline acceptance. Library usage must not change API fetching, section order, visibility logic, RSVP URL behavior, metadata safety, or live placeholder rules.

Do not import icon libraries directly in protected renderer files. Swap or extend icons through `src/components/platform/platform-icons.tsx`.
