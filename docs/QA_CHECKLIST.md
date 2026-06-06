# QA Checklist

- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `git diff --check`
- Confirm `src/app/page.tsx` renders the platform-compatible public page, not `SiteShell`, `SiteHeader`, `SiteFooter`, or the old section renderer.
- Compare the default runtime against the main platform public/account preview section/card rhythm.
- Confirm live mode has required env values.
- Confirm design mode sample content is not used in live mode.
- Confirm RSVP appears inline on the homepage and uses the local `#rsvp` section anchor.
- Confirm no default runtime button redirects guests to removed platform RSVP routes.
- Confirm live mode does not show fake QR/photos or gallery placeholders.
