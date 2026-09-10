// Infrastructure as Code for the WeDo Software project on Railway.
//
// This file is the single source of truth for every service, variable,
// domain and volume in the linked environment, per
// .roo/rules/5_deploy.md. Do not configure resources by hand in the
// Railway dashboard once this file is in use — hand-made changes are
// invisible to it and are deleted on the next apply.
//
// Before planning or applying, confirm which environment is linked
// (`railway status`) and export RAILWAY_IAC_ENV to match. This file
// fails closed rather than guessing its target environment.

import { defineProject, preserve } from 'railway/iac';

type IacEnvironment = 'production' | 'staging';

function resolveEnvironment(): IacEnvironment {
  const value = process.env.RAILWAY_IAC_ENV;

  if (value === 'production' || value === 'staging') {
    return value;
  }

  throw new Error(
    'RAILWAY_IAC_ENV must be explicitly set to "production" or "staging" before planning or applying this file.',
  );
}

const environment = resolveEnvironment();

export default defineProject(({ service }) => {
  // Frontend — static React/Vite bundle served by nginx
  // (services/frontend). There is no backend: the contact form was
  // replaced entirely by the self-hosted Chatwoot live chat widget, so
  // this project has exactly one deployable service. nginx does not read
  // Railway's injected $PORT, so the port is fixed explicitly rather
  // than auto-detected.
  const frontend = service('frontend', {
    source: {
      type: 'dockerfile',
      context: 'services/frontend',
      dockerfile: 'Dockerfile',
    },
    port: 80,
    env: {
      // The Chatwoot website token is not a secret — it ships in the
      // client bundle regardless of where it is set — so it is safe to
      // declare as a plain literal rather than preserve().
      VITE_CHATWOOT_BASE_URL: 'https://chatwoot.wedo-software.com',
      VITE_CHATWOOT_WEBSITE_TOKEN: preserve(),
    },
    // Custom domain only attached in production; staging uses Railway's
    // generated domain.
    domain: environment === 'production' ? 'wedo-software.com' : undefined,
  });

  return { frontend };
});
