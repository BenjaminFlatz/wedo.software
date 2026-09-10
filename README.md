# WeDo Software

Marketing site for WeDo Software, structured per
[`.roo/rules/01-overview.md`](.roo/rules/01-overview.md). There is no
backend: the only way to get in touch is the embedded Chatwoot live chat
widget.

## Structure

```text
services/
└── frontend/   # React + Vite + TypeScript SPA — .roo/rules/04-react.md
.railway/       # Railway Infrastructure as Code — .roo/rules/5_deploy.md
docs/           # Deployment guide
docker-compose.yml
.env.example
```

## Local development

```sh
cd services/frontend
npm install
npm run dev
```

### Via Docker Compose

```sh
cp .env.example .env
docker compose up --build
```

The site is served at http://localhost:8080.

## Live chat

The frontend embeds a self-hosted Chatwoot widget
(`services/frontend/src/shared/hooks/useChatwoot.ts`,
`.roo/rules/06-chatwoot.md`), configured via the `VITE_CHATWOOT_BASE_URL`
and `VITE_CHATWOOT_WEBSITE_TOKEN` build-time variables. The homepage's
"Haben Sie Fragen?" section and its "Chat starten" button
(`services/frontend/src/features/home/components/Contact.tsx`) open the
widget directly via `window.$chatwoot.toggle('open')` — there is no
contact form or backend.

## Deployment

Deployed to Railway using Infrastructure as Code. See
[`docs/RAILWAY.md`](docs/RAILWAY.md) for the full guide and
[`.railway/railway.ts`](.railway/railway.ts) for the service definition.
