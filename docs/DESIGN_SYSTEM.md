# Design System

Default styling follows the main platform public/account preview renderer: warm ivory public page, centered `event-preview-frame--public`, compact section cards, label pills, platform dividers, and neutral wedding typography.

Do not commit client-specific visual themes as starter defaults. Client-specific styling belongs in cloned client repos. Optional theme presets may be documented as examples only, not applied by runtime starter code.

Use local UI primitives in `src/components/ui`. Do not install shadcn or large animation/icon libraries for the starter foundation.

Theme work in the starter should preserve the platform baseline first. CSS variables in `src/styles/tokens.css` and `src/styles/theme.css` support later client repo customization; they must not transform the starter default into a separate theme. See `docs/THEME_SYSTEM.md`.
