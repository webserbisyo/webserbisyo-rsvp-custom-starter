# Theme System

Use CSS variables and Tailwind token aliases. Do not spread one-off color edits across section components.

Core files:

- `src/styles/tokens.css`
- `src/styles/theme.css`
- `src/styles/typography.css`
- `src/styles/components.css`
- `src/styles/globals.css`
- `tailwind.config.ts`

Token families:

- background
- surface
- text
- muted
- primary / terracotta
- sage
- gold
- border
- focus
- radius
- shadow
- success / warning / error

Default starter tone:

- ivory base
- sage support
- terracotta primary
- gold accent

Keep client-specific design work token-driven before changing component color classes. Countdown animation uses CSS only and must respect `prefers-reduced-motion`.

Future preset names:

- `tagaytay-garden-classic`
- `filipiniana-ivory`
- `editorial-cocoa`
- `cinematic-champagne`

Client repos may override tokens for approved design direction. Platform section keys and data parsing must not be changed for theme work.
