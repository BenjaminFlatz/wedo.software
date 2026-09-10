import { useEffect } from 'react';

declare global {
  interface Window {
    chatwootSettings?: {
      position?: 'left' | 'right';
      type?: 'standard' | 'expanded_bubble';
      launcherTitle?: string;
    };
    chatwootSDK?: {
      run: (config: { websiteToken: string; baseUrl: string }) => void;
    };
    $chatwoot?: {
      toggle: (state?: 'open' | 'close') => void;
      setColorScheme?: (scheme: 'light' | 'dark') => void;
    };
  }
}

const CHATWOOT_BASE_URL = import.meta.env.VITE_CHATWOOT_BASE_URL || 'https://chatwoot.wedo-software.com';
const CHATWOOT_WEBSITE_TOKEN = import.meta.env.VITE_CHATWOOT_WEBSITE_TOKEN || 'JnugYLngRwnCRdc3oW2G76t2';
const SCRIPT_ID = 'chatwoot-sdk';

export function useChatwoot(): void {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return; // never inject twice

    window.chatwootSettings = { position: 'right', type: 'standard', launcherTitle: '' };

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = `${CHATWOOT_BASE_URL}/packs/js/sdk.js`;
    script.async = true;
    script.onload = () => {
      window.chatwootSDK?.run({ websiteToken: CHATWOOT_WEBSITE_TOKEN, baseUrl: CHATWOOT_BASE_URL });
    };
    document.body.appendChild(script);
  }, []);
}

/** Opens the Chatwoot chat widget. Used by "contact us" call-to-actions
 * throughout the site instead of a traditional contact form/backend. */
export function openChatwoot(): void {
  window.$chatwoot?.toggle('open');
}
