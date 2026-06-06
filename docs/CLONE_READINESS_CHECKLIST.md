# Clone Readiness Checklist

1. Clone from this starter.
2. Set public env vars.
3. Keep the main platform public API as the data source.
4. Verify `/` renders.
5. Verify `#rsvp` and `#rsvp-form` exist.
6. Enable the client renderer only in a clone when ready.
7. Add UI libraries only under `src/client` patterns.
8. Run validation.
9. Deploy to a hidden Vercel origin.
10. Paste the hidden origin into the platform custom frontend origin field later.

Never do these in the starter or clone baseline:

- add a `/rsvp` route
- add iframe RSVP
- add backend or Supabase logic
- add fake RSVP success
