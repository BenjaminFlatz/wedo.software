import { useEffect } from 'react';

declare global {
  interface Window {
    chatwootSettings?: {
      position?: 'left' | 'right';
      type?: 'standard' | 'expanded_bubble';
      launcherTitle?: string;
      darkMode?: 'light' | 'dark' | 'auto';
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

const CHATWOOT_BASE_URL = import.meta.env.VITE_CHATWOOT_BASE_URL;
const CHATWOOT_WEBSITE_TOKEN = import.meta.env.VITE_CHATWOOT_WEBSITE_TOKEN;
const SCRIPT_ID = 'chatwoot-sdk';

// The whole site is a fixed dark glassmorphic theme (no light mode / theme
// toggle), so the widget is always synced to Chatwoot's own dark skin.
const COLOR_SCHEME: 'dark' = 'dark';

export function useChatwoot(): void {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return; // never inject twice
    if (!CHATWOOT_BASE_URL || !CHATWOOT_WEBSITE_TOKEN) return; // env vars not configured

    window.chatwootSettings = {
      position: 'right',
      type: 'standard',
      launcherTitle: '',
      darkMode: COLOR_SCHEME,
    };

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = `${CHATWOOT_BASE_URL}/packs/js/sdk.js`;
    script.async = true;
    script.onload = () => {
      window.chatwootSDK?.run({ websiteToken: CHATWOOT_WEBSITE_TOKEN, baseUrl: CHATWOOT_BASE_URL });
      // Re-assert the color scheme once the widget has fully initialized —
      // covers the case where the iframe finishes booting after `run()`.
      window.$chatwoot?.setColorScheme?.(COLOR_SCHEME);
    };
    document.body.appendChild(script);
  }, []);
}

/** Opens the Chatwoot chat widget. Used by "contact us" call-to-actions
 * throughout the site instead of a traditional contact form/backend. */
export function openChatwoot(): void {
  window.$chatwoot?.toggle('open');
}
