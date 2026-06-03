# Deployment

Local setup:

```bash
cp .env.example .env.local
npm run dev
```

Vercel setup:

- Set `NEXT_PUBLIC_WEBSERBISYO_API_URL`.
- Set `NEXT_PUBLIC_EVENT_SLUG`.
- Set `NEXT_PUBLIC_DESIGN_MODE=false`.
- Set `NEXT_PUBLIC_TEMPLATE_ID`.

Deploy the app. Copy the hidden deploy origin URL, then paste it in Super Admin as `custom_frontend_origin_url` and enable the custom website.

Guests still use `https://{clientSubdomain}.rsvp.webserbisyo.com`. The main platform wildcard proxy will later serve the custom design through that public URL.
