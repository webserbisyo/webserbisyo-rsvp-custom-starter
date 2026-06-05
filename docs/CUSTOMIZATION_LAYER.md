# Customization Layer

The starter has a protected base layer and a separate customization layer.

Protected base:

- `src/components/platform/*`
- public API fetcher
- normalized public event data
- platform render model adapter
- section order and visibility rules
- RSVP URL builder
- metadata safety
- design/live/snapshot mode rules
- media safety primitives
- platform icon adapter

Customization belongs in cloned client repos after the baseline is validated against the main platform preview/public renderer.

Client repos may add:

- approved visual theme overrides
- public client assets
- section styling overrides
- optional UI libraries
- optional animation enhancements
- future gallery styling when real platform gallery data exists

Client customization must not change API ownership, section keys, RSVP URL behavior, direct submission rules, metadata safety, or live placeholder rules.

Client repos may swap the icon implementation through `src/components/platform/platform-icons.tsx`. Do not scatter direct icon library imports across protected renderer files.

The reusable starter default must not become a custom theme, marketing page, or alternate renderer.
