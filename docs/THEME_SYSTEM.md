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

Future preset names:

- `tagaytay-garden-classic`
- `filipiniana-ivory`
- `editorial-cocoa`
- `cinematic-champagne`

Client repos may override tokens for approved design direction. Platform section keys and data parsing must not be changed for theme work.
