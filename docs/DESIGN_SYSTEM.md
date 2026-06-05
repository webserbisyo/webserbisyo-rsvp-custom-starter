# Design System

Default styling is warm, neutral, and wedding-focused: ivory and linen backgrounds, cocoa and charcoal text, terracotta accents, clean cards, centered invitation sections, mobile-first spacing, 44px tap targets, visible focus states, and reduced-motion support.

Do not commit client-specific visual themes as starter defaults. Client-specific styling belongs in cloned client repos. Optional theme presets may be documented as examples only, not applied by runtime starter code.

Use local UI primitives in `src/components/ui`. Do not install shadcn or large animation/icon libraries for the starter foundation.

Theme work should start from CSS variables in `src/styles/tokens.css` and `src/styles/theme.css`. Avoid random component-level color edits. See `docs/THEME_SYSTEM.md`.
