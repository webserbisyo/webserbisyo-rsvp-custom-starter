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

Every client custom design belongs in the cloned client repo. Do not commit client-specific visual identity, venue language, couple names, theme names, or one-off editorial layout back into this reusable starter.

Client repos must not customize:

- Public API path
- Platform section keys
- RSVP submission behavior
- Backend/database/auth/payment/admin logic
- Hidden custom origin exposure
- Live placeholder behavior
- Header RSVP behavior that scrolls to the local `#rsvp` section first
- Query-string API base URL behavior

Keep the starter contract intact. If a platform section key changes, update registry, docs, types, and normalizer together.

Do not hardcode couple names, dates, venues, sponsors, gifts, photos, QR images, or contact details in reusable starter components. Use the public API render model and theme tokens instead.

Theme presets may exist only as documented optional examples. They must not be imported, selected, or applied as default runtime styles in the starter.
