# wedo-software.com

Resilient systems. Scalable software. Seamless automation.

This repository contains the production marketing site and platform showcase
for **wedo-software.com**, founded by Benjamin Flatz (Dornbirn, Austria). The
business runs a dual revenue model — proprietary SaaS products (Stream A) and
custom software engineering services (Stream B) — see
[`wedo/README.md`](wedo/README.md) for the full business manifest.

## Structure

```text
.
├── services/
│   └── frontend/          # React + Vite + TypeScript SPA (the entire product)
│       ├── src/
│       │   ├── features/
│       │   │   ├── home/    # Hero, Products, Services, TechStack, Contact
│       │   │   └── legal/   # Impressum, Datenschutz pages
│       │   └── shared/      # Navbar, Footer, Chatwoot integration
│       └── public/          # Static assets (logo, favicon)
├── .railway/               # Railway Infrastructure-as-Code deployment
├── docs/RAILWAY.md         # Human-readable deployment guide
├── docker-compose.yml      # Local container orchestration
└── wedo/README.md          # Business manifest & AI-model alignment guide
```

There is **no backend service**. The site is a single static frontend
application; the only contact channel is a self-hosted
[Chatwoot](https://www.chatwoot.com/) live-chat widget (see
[`.roo/rules/06-chatwoot.md`](.roo/rules/06-chatwoot.md) for the integration
pattern used).

## What's on the site

- **Hero** — a WebGL/Three.js network animation communicating systemic,
  resilient engineering.
- **Products** — live, shipped proprietary platforms (Stream A): the
  financial analytics app, the web-scraping & lead-generation engine, and the
  Pilzkraft e-commerce vertical.
- **Services** — custom engineering offerings (Stream B): AI automation & LLM
  agents, enterprise web scraping, full-stack application development, and
  cloud architecture & DevOps.
- **Tech Stack** — the technologies and professional background behind the
  work.
- **Contact** — a single call-to-action that opens the Chatwoot live chat.
  No contact form, no backend, no submitted data at rest.

## Development

```bash
cd services/frontend
npm install
npm run dev      # start the Vite dev server
npm run build     # type-check and produce a production build
```

## Deployment

The project deploys to [Railway](https://railway.app) using Infrastructure as
Code. See [`docs/RAILWAY.md`](docs/RAILWAY.md) for the full guide and
[`.railway/railway.ts`](.railway/railway.ts) for the declared topology.

```bash
docker compose up --build
```

## Rules & Conventions

Architectural and coding conventions for this repository are documented under
[`.roo/rules/`](.roo/rules/), covering the React/Vite frontend, Railway IaC
deployment, and the Chatwoot integration pattern.
