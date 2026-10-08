import { NextRequest, NextResponse } from 'next/server';
import { addProforma, addPixelEvent } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      refCode,
      companyName,
      contactPerson,
      phone,
      location,
      tinNumber,
      propertyType,
      cameraCount,
      storageDays,
      powerBackup,
      serviceType,
      selectedFeatures = [],
      selectedAddons = [],
      notes,
      estimatedTotalETB = 0,
      source = 'Website Proforma Wizard',
    } = body;

    if (!phone) {
      return NextResponse.json({ success: false, message: 'Phone number is required' }, { status: 400 });
    }

    const saved = addProforma({
      refCode: refCode || `ESS-PRO-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      companyName: companyName || 'Private Client',
      contactPerson: contactPerson || '',
      phone,
      location: location || 'Addis Ababa',
      tinNumber,
      propertyType: propertyType || 'commercial',
      cameraCount: cameraCount || '8',
      storageDays: storageDays || '30',
      powerBackup: powerBackup || 'ups',
      serviceType: serviceType || 'turnkey',
      selectedFeatures,
      selectedAddons,
      notes,
      estimatedTotalETB: Number(estimatedTotalETB) || 85000,
      status: 'new',
      source,
      adminNotes: 'Auto-submitted via Proforma Wizard on website.',
    });

    // Also trigger server-side pixel event for Meta Ads and TikTok tracking
    addPixelEvent({
      platform: 'meta',
      event: 'Lead',
      path: '/proforma',
      data: {
        refCode: saved.refCode,
        value: saved.estimatedTotalETB,
        currency: 'ETB',
        propertyType: saved.propertyType,
      },
    });

    return NextResponse.json({ success: true, proforma: saved });
  } catch (error) {
    console.error('Proforma submission error:', error);
    return NextResponse.json({ success: false, message: 'Failed to record proforma' }, { status: 500 });
  }
}
