'use client';

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    ttq?: { track: (name: string, params?: Params) => void; page: () => void };
  }
}

const KEY = 'ess_attribution';

export type Attribution = {
  traffic_source: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  landing_path?: string;
};

function detectSource(): string {
  const ua = navigator.userAgent || '';
  const ref = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, '') : '';
  if (/musical_ly|BytedanceWebview|TikTok/i.test(ua) || /tiktok/.test(ref)) return 'tiktok';
  if (/FBAN|FBAV|FB_IAB/i.test(ua) || /facebook|fb\.com|l\.facebook|lm\.facebook/.test(ref)) return 'facebook';
  if (/t\.me|telegram/.test(ref)) return 'telegram';
  if (/google\./.test(ref)) return 'google';
  if (ref) return ref;
  return 'direct';
}

/** First-touch attribution, kept for the browser session. UTM params win over auto-detection. */
export function getAttribution(): Attribution {
  try {
    const saved = sessionStorage.getItem(KEY);
    if (saved) return JSON.parse(saved) as Attribution;
    const q = new URLSearchParams(window.location.search);
    const a: Attribution = {
      traffic_source: q.get('utm_source') || detectSource(),
      utm_source: q.get('utm_source') || undefined,
      utm_medium: q.get('utm_medium') || undefined,
      utm_campaign: q.get('utm_campaign') || undefined,
      utm_content: q.get('utm_content') || undefined,
      landing_path: window.location.pathname,
    };
    sessionStorage.setItem(KEY, JSON.stringify(a));
    return a;
  } catch {
    return { traffic_source: 'unknown' };
  }
}

export function track(event: string, params: Params = {}) {
  if (typeof window === 'undefined') return;
  const attr = getAttribution();
  const payload: Params = { ...attr, ...params, page_path: window.location.pathname };
  window.gtag?.('event', event, payload);
  if (event === 'cta_click') {
    // Standard "Contact" conversion for ad platforms
    window.fbq?.('track', 'Contact', { content_name: String(params.cta_type || '') });
    window.ttq?.track('Contact', { content_name: String(params.cta_type || '') });
  } else if (event === 'view_solution') {
    window.fbq?.('track', 'ViewContent', { content_name: String(params.solution || '') });
    window.ttq?.track('ViewContent', { content_name: String(params.solution || '') });
  }
  if (process.env.NODE_ENV !== 'production') console.debug('[track]', event, payload);
}
