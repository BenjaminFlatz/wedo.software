# Railway Deployment Guide

This project deploys to Railway using Infrastructure as Code. The single
source of truth for every service, variable, volume and domain is
[`.railway/railway.ts`](../.railway/railway.ts) — see
[`.roo/rules/5_deploy.md`](../.roo/rules/5_deploy.md) for the house rules
this file follows. **Do not configure resources by hand in the Railway
dashboard**; anything not declared in `railway.ts` is deleted on the next
apply.

## Services

There is exactly one deployable service. The contact form was replaced
entirely by the self-hosted Chatwoot live chat widget, so no backend or
database is required.

| Service | Source | Port | Notes |
|---|---|---|---|
| `frontend` | `services/frontend/Dockerfile` (Vite build → nginx) | 80 | Public marketing site; SPA fallback via `nginx.conf`; embeds the Chatwoot widget |

## Environment variables

| Variable | Service | How it's set | Purpose |
|---|---|---|---|
| `VITE_CHATWOOT_BASE_URL` | frontend | literal | Chatwoot install URL (not a secret) |
| `VITE_CHATWOOT_WEBSITE_TOKEN` | frontend | literal | Chatwoot website token (ships in the client bundle regardless) |

Every variable read by application code — including the frontend's
build-time `VITE_*` variables consumed via the Dockerfile `ARG`s — is
declared in `railway.ts`'s `env: {}` block. Neither variable exists only
in the Dockerfile default or in `.env.example`.

## First-time setup

1. Confirm the linked environment and export the guard variable:
   ```sh
   railway status
   export RAILWAY_IAC_ENV=production   # or staging
   ```
2. Plan, then apply, `railway.ts`:
   ```sh
   railway iac plan .railway/railway.ts
   railway iac apply .railway/railway.ts
   ```
3. Attach the custom domain to `frontend` (production) or use its
   generated domain (staging).
4. Re-run the plan command and confirm it reports no pending changes:
   ```sh
   railway iac plan .railway/railway.ts
   ```

## Custom domain migration note

This project previously deployed as a static site on GitHub Pages, with
the apex domain configured via a root-level `CNAME` file
(`wedo-software.com`). That file has been removed — the domain is now
attached to the `frontend` service directly in `railway.ts` (see the
`domain` field) and via the DNS records Railway requests when the domain
is generated. Update the domain's DNS records (typically a CNAME/ALIAS to
Railway's provided target) to point at Railway instead of GitHub Pages.

## Guard rails

- Always run `railway iac plan .railway/railway.ts` and read its output
  before applying.
- `RAILWAY_IAC_ENV` must be explicitly `production` or `staging`; the file
  throws rather than guessing.
- After every apply, re-run the plan command to confirm nothing is left
  pending.
