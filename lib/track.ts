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

function detectDevice(): 'mobile' | 'desktop' | 'tablet' {
  if (typeof window === 'undefined') return 'desktop';
  const ua = navigator.userAgent;
  if (/iPad|Tablet/i.test(ua)) return 'tablet';
  if (/Mobile|Android|iP(hone|od)/i.test(ua)) return 'mobile';
  return 'desktop';
}

function detectCity(): string {
  // Can be refined, default regional hub based on tz or locale
  return 'Addis Ababa';
}

export function track(event: string, params: Params = {}) {
  if (typeof window === 'undefined') return;
  const attr = getAttribution();
  const payload: Params = { ...attr, ...params, page_path: window.location.pathname };
  
  // Third-party platform scripts
  window.gtag?.('event', event, payload);
  
  if (event === 'cta_click') {
    window.fbq?.('track', 'Contact', { content_name: String(params.cta_type || '') });
    window.ttq?.track('Contact', { content_name: String(params.cta_type || '') });

    // Send to internal server API for admin portal
    try {
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'cta',
          kind: params.cta_type || 'whatsapp',
          location: params.location || 'unknown',
          message: params.message || '',
          path: window.location.pathname,
          source: attr.utm_source || attr.traffic_source || 'direct',
        }),
      }).catch(() => {});
    } catch {
      // ignore
    }
  } else if (event === 'page_view') {
    try {
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'visit',
          path: window.location.pathname,
          title: typeof document !== 'undefined' ? document.title : '',
          traffic_source: attr.utm_source || attr.traffic_source || 'direct',
          utm_source: attr.utm_source,
          utm_medium: attr.utm_medium,
          utm_campaign: attr.utm_campaign,
          utm_content: attr.utm_content,
          device: detectDevice(),
          city: detectCity(),
          referrer: typeof document !== 'undefined' ? document.referrer : '',
        }),
      }).catch(() => {});
    } catch {
      // ignore
    }
  } else if (event === 'view_solution') {
    window.fbq?.('track', 'ViewContent', { content_name: String(params.solution || '') });
    window.ttq?.track('ViewContent', { content_name: String(params.solution || '') });
  }

  // Also log pixel events to admin telemetry
  if (event === 'cta_click' || event === 'view_solution' || event === 'proforma_submit') {
    try {
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'pixel',
          platform: 'meta',
          event: event === 'cta_click' ? 'Contact' : event === 'proforma_submit' ? 'Lead' : 'ViewContent',
          path: window.location.pathname,
          data: payload,
        }),
      }).catch(() => {});
    } catch {
      // ignore
    }
  }

  if (process.env.NODE_ENV !== 'production') console.debug('[track]', event, payload);
}
