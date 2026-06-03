# Prefetch

Run:

```bash
npm run prefetch:event -- alexander-morales-wedding-rsvp-20260513-9435
```

or:

```bash
npm run prefetch:event alexander-morales-wedding-rsvp-20260513-9435
```

The script reads `NEXT_PUBLIC_WEBSERBISYO_API_URL` or defaults to `https://webserbisyo.com`, fetches `/api/public/events/[slug]`, and writes `.webserbisyo/event.snapshot.json`.
