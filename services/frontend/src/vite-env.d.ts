/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CHATWOOT_BASE_URL?: string;
  readonly VITE_CHATWOOT_WEBSITE_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
