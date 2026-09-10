# Railway IaC

`railway.ts` in this directory is the single source of truth for the
project's Railway topology. See [`docs/RAILWAY.md`](../docs/RAILWAY.md)
for the full deployment guide and [`.roo/rules/5_deploy.md`](../.roo/rules/5_deploy.md)
for the house rules it follows.

```sh
cd .railway
npm install
export RAILWAY_IAC_ENV=production   # or staging
npm run plan
npm run apply
```

The `railway/iac` package and Node's built-in type declarations are
dev-only dependencies of this directory — they are not required by either
application service.
