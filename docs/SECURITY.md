# Security

Forbidden env names:

- `SUPABASE_SERVICE_ROLE_KEY`
- `DATABASE_URL`
- `RESEND_API_KEY`
- `PAYMENT_PROVIDER_SECRET`
- `ADMIN_SECRET`

Do not add auth, billing, payment, admin, database, service role, or private RSVP logic. Do not expose private platform data or hidden custom origins to guests.
