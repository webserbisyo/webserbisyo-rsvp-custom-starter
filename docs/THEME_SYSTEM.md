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
- terracotta primary
- clean white/linen cards
- centered invitation sections
- restrained platform-preview rhythm

The starter runtime must not ship a client-specific default theme. Client-specific visual direction belongs only in cloned client repos, and should be token-driven before changing component color classes.

Optional preset examples may be documented for future client repos, but must not become starter defaults:

- `tagaytay-garden-classic`
- `filipiniana-ivory`
- `editorial-cocoa`
- `cinematic-champagne`

Client repos may override tokens for approved design direction. Platform section keys and data parsing must not be changed for theme work.
