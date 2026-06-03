# Performance

Keep assets, images, fonts, and bundles light. Proxy overhead is not the main issue; heavy client assets are.

Avoid large animation packages and unnecessary UI libraries.

Live fetches currently use conservative `cache: "no-store"` for launch safety. Revisit caching only when platform publish/unpublish behavior and proxy behavior are confirmed.
