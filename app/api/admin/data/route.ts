import { NextRequest, NextResponse } from 'next/server';
import {
  validateSession,
  getVisits,
  getProformas,
  getAdsMetrics,
  getPixelEvents,
  getCtaClicks,
  getSettings,
  saveSettings,
  updateProformaStatus,
  deleteProforma,
} from '@/lib/db';

export async function GET(req: NextRequest) {
  const token = req.cookies.get('ess_admin_token')?.value || req.headers.get('authorization')?.replace('Bearer ', '');
  if (!validateSession(token)) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  const visits = getVisits();
  const proformas = getProformas();
  const adsMetrics = getAdsMetrics();
  const pixelEvents = getPixelEvents();
  const ctaClicks = getCtaClicks();
  const settings = getSettings();

  // Aggregate stats
  const totalVisits = visits.length;
  const totalProformas = proformas.length;
  const newProformas = proformas.filter((p) => p.status === 'new').length;
  const totalCtaClicks = ctaClicks.length;
  const whatsappClicks = ctaClicks.filter((c) => c.kind === 'whatsapp').length;
  const telegramClicks = ctaClicks.filter((c) => c.kind === 'telegram').length;
  const callClicks = ctaClicks.filter((c) => c.kind === 'call').length;

  const totalAdSpend = adsMetrics.reduce((sum, a) => sum + a.spendETB, 0);
  const totalAdLeads = adsMetrics.reduce((sum, a) => sum + a.leads, 0);
  const totalEstimatedPipeline = proformas.reduce((sum, p) => sum + (p.estimatedTotalETB || 0), 0);

  // Group visits by source
  const sourcesMap: Record<string, number> = {};
  visits.forEach((v) => {
    const s = v.traffic_source || 'direct';
    sourcesMap[s] = (sourcesMap[s] || 0) + 1;
  });

  // Group visits by path
  const pathsMap: Record<string, number> = {};
  visits.forEach((v) => {
    const p = v.path || '/';
    pathsMap[p] = (pathsMap[p] || 0) + 1;
  });

  // Group visits by regional city
  const citiesMap: Record<string, number> = {};
  visits.forEach((v) => {
    const c = v.city || 'Addis Ababa';
    citiesMap[c] = (citiesMap[c] || 0) + 1;
  });

  return NextResponse.json({
    success: true,
    overview: {
      totalVisits,
      totalProformas,
      newProformas,
      totalCtaClicks,
      whatsappClicks,
      telegramClicks,
      callClicks,
      totalAdSpend,
      totalAdLeads,
      totalEstimatedPipeline,
      conversionRate: totalVisits > 0 ? (((totalProformas + totalCtaClicks) / totalVisits) * 100).toFixed(1) : '0',
    },
    sourcesMap,
    pathsMap,
    citiesMap,
    visits: visits.slice(0, 100), // latest 100
    proformas,
    adsMetrics,
    pixelEvents: pixelEvents.slice(0, 100), // latest 100
    ctaClicks: ctaClicks.slice(0, 100),
    settings: {
      metaPixelId: settings.metaPixelId,
      tikTokPixelId: settings.tikTokPixelId,
      googleAnalyticsId: settings.googleAnalyticsId,
      telegramChannel: settings.telegramChannel,
      currency: settings.currency,
    },
  });
}

export async function POST(req: NextRequest) {
  const token = req.cookies.get('ess_admin_token')?.value || req.headers.get('authorization')?.replace('Bearer ', '');
  if (!validateSession(token)) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const action = body.action;

    if (action === 'update_proforma_status') {
      const { id, status, adminNotes } = body;
      const ok = updateProformaStatus(id, status, adminNotes);
      if (!ok) return NextResponse.json({ success: false, message: 'Proforma not found' }, { status: 404 });
      return NextResponse.json({ success: true, message: 'Proforma status updated successfully' });
    }

    if (action === 'save_settings') {
      const { metaPixelId, tikTokPixelId, googleAnalyticsId, telegramChannel } = body;
      saveSettings({ metaPixelId, tikTokPixelId, googleAnalyticsId, telegramChannel });
      return NextResponse.json({ success: true, message: 'Marketing & Pixel settings saved successfully' });
    }

    if (action === 'delete_proforma') {
      const { id } = body;
      deleteProforma(id);
      return NextResponse.json({ success: true, message: 'Proforma record deleted' });
    }

    return NextResponse.json({ success: false, message: 'Unknown action' }, { status: 400 });
  } catch (error) {
    console.error('Admin data POST error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
