# Cuwan site

The public product site for Cuwan: landing, privacy and terms in Indonesian and English.
It is a Next.js site built with OpenNext and served by the Cloudflare Worker `cuwan` (`wrangler.jsonc`).

The web app (dashboard, bots, exchange keys) lives in `efolusi/cuwan-cloud` on its own host.

## Develop

Node 26.13.1 and pnpm 11.24.0 (`npm install -g pnpm@11.24.0`).

```bash
pnpm install
pnpm dev        # http://localhost:3200
pnpm test
pnpm preview    # OpenNext + wrangler, the way Cloudflare runs it
```

## Deploy

`.github/workflows/deploy.yml` deploys from a `v*` tag on `main`, with the `CLOUDFLARE_API_TOKEN` secret and the
`CLOUDFLARE_ACCOUNT_ID` variable of the `production` environment. Every change reaches `main` through a pull request.
