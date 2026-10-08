import { NextRequest, NextResponse } from 'next/server';
import { addVisit, addCtaClick, addPixelEvent } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const type = body.type;

    if (type === 'visit') {
      const {
        path = '/',
        title = '',
        traffic_source = 'direct',
        utm_source,
        utm_medium,
        utm_campaign,
        utm_content,
        device = 'desktop',
        city = 'Addis Ababa',
        referrer = '',
      } = body;

      addVisit({
        path,
        title,
        traffic_source,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_content,
        device: device === 'mobile' || device === 'tablet' ? device : 'desktop',
        city,
        referrer,
      });

      return NextResponse.json({ success: true });
    }

    if (type === 'cta') {
      const { kind = 'whatsapp', location = 'unknown', message, path = '/', source = 'direct' } = body;
      addCtaClick({
        kind,
        location,
        message,
        path,
        source,
      });
      return NextResponse.json({ success: true });
    }

    if (type === 'pixel') {
      const { platform = 'meta', event = 'PageView', data, path = '/' } = body;
      addPixelEvent({
        platform,
        event,
        data,
        path,
      });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, message: 'Invalid tracking type' }, { status: 400 });
  } catch (error) {
    // Silently return 200 so client analytics never breaks user experience
    console.error('Tracking API error:', error);
    return NextResponse.json({ success: false }, { status: 200 });
  }
}
