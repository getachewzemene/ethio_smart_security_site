'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  HardDrive,
  Cpu,
  BatteryCharging,
  Sliders,
  Send,
  FileText,
  CheckCircle,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { site, whatsappLink } from '@/lib/site';
import { useLanguage } from '@/lib/i18n';

export default function SecuritySystemCalculator() {
  const { isAm } = useLanguage();

  const [cameraCount, setCameraCount] = useState(8);
  const [resolution, setResolution] = useState<'2mp' | '5mp' | '8mp'>('5mp');
  const [retentionDays, setRetentionDays] = useState(30);
  const [recordingMode, setRecordingMode] = useState<'continuous' | 'motion'>('continuous');

  // Daily gigabytes per camera using smart H.265+ codec
  const dailyGbMap: Record<string, { continuous: number; motion: number }> = {
    '2mp': { continuous: 18, motion: 10 },
    '5mp': { continuous: 30, motion: 18 },
    '8mp': { continuous: 50, motion: 30 },
  };

  const dailyRate = dailyGbMap[resolution][recordingMode];
  const totalGb = Math.round(cameraCount * dailyRate * retentionDays);
  const totalTb = (totalGb / 1000).toFixed(1);

  // Determine recommended HDD setup
  let recommendedHdd = '4TB WD Purple Surveillance Drive';
  if (totalGb <= 1000) recommendedHdd = '1TB WD Purple Surveillance Drive';
  else if (totalGb <= 2000) recommendedHdd = '2TB WD Purple Surveillance Drive';
  else if (totalGb <= 4000) recommendedHdd = '4TB WD Purple Surveillance Drive';
  else if (totalGb <= 8000) recommendedHdd = '8TB WD Purple Surveillance Drive';
  else if (totalGb <= 16000) recommendedHdd = '16TB (2x 8TB WD Purple RAID)';
  else recommendedHdd = 'Enterprise Multi-Bay NVR (32TB Storage Pool)';

  // Determine recommended NVR channel count
  let recommendedNvr = '8-Channel 4K PoE NVR';
  if (cameraCount <= 4) recommendedNvr = '4-Channel 4K PoE NVR';
  else if (cameraCount <= 8) recommendedNvr = '8-Channel 4K PoE NVR';
  else if (cameraCount <= 16) recommendedNvr = '16-Channel 4K Enterprise NVR';
  else if (cameraCount <= 32) recommendedNvr = '32-Channel Rackmount 4K NVR';
  else recommendedNvr = '64-Channel Enterprise Server NVR';

  // Determine recommended UPS backup
  let recommendedUps = '1000VA / 600W Smart UPS (2 – 3 hrs)';
  if (cameraCount <= 4) recommendedUps = '650VA / 360W Surge & Battery UPS (1 – 2 hrs)';
  else if (cameraCount <= 8) recommendedUps = '1000VA / 600W Centralized UPS (2 – 3 hrs)';
  else if (cameraCount <= 16) recommendedUps = '1500VA / 900W Online Enterprise UPS (2 – 4 hrs)';
  else recommendedUps = '2000VA+ Online Pure Sine Wave UPS / Solar Hybrid';

  const resLabels = {
    '2mp': isAm ? '2MP (1080p Full HD)' : '2MP (1080p Full HD)',
    '5mp': isAm ? '5MP (ColorVu የቀለም እይታ)' : '5MP (ColorVu Night Vision)',
    '8mp': isAm ? '8MP (4K Ultra-HD Enterprise)' : '8MP (4K Ultra-HD Enterprise)',
  };

  const generateCalcWaMessage = () => {
    return `*INTERACTIVE CCTV SPECIFICATION ESTIMATE*
Calculated via Ethio Smart Security System Builder
---------------------------------------------
📹 Camera Count: ${cameraCount} Cameras
🔍 Resolution: ${resLabels[resolution]}
📅 Retention Target: ${retentionDays} Days
🔄 Mode: ${recordingMode === 'continuous' ? '24/7 Continuous' : 'Smart AI Motion Only'}
💾 Calculated Storage: ~${totalTb} TB (${totalGb} GB)
📦 Recommended Drive: ${recommendedHdd}
🖲️ Recommended NVR: ${recommendedNvr}
🔋 Power Backup: ${recommendedUps}
---------------------------------------------
Please send current quotation and hardware availability for this configuration.`;
  };

  return (
    <section className="section" id="cctv-calculator">
      <div className="wrap">
        <div className="sec-head">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--green)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            <Sparkles size={16} /> {isAm ? 'የሲስተም መገንቢያ መሳሪያ' : 'Interactive System Builder'}
          </div>
          <h2>{isAm ? 'የሲሲቲቪ ካሜራ እና የቪዲዮ ማከማቻ ስሌት (CCTV Calculator)' : 'CCTV System & Storage Calculator'}</h2>
          <p>
            {isAm
              ? 'የካሜራ ብዛትዎን እና የሚፈልጉትን የቀረጻ ጊዜ ይምረጡ፤ ተስማሚውን የሃርድ ዲስክ መጠን፣ የመቅረጫ (NVR) አቅም እና የባትሪ ድጋፍ በቅጽበት ያሰሉ።'
              : 'Estimate exact surveillance storage requirements, recorder channel capacity, and UPS power backup based on your premises.'}
          </p>
        </div>

        <div className="calc-wrapper">
          {/* Controls Column */}
          <div className="calc-controls">
            {/* 1. Camera Count */}
            <div>
              <div className="calc-group-title">
                <span>{isAm ? '1. የካሜራዎች ብዛት' : '1. Number of Cameras'}</span>
                <strong style={{ fontSize: '1.25rem', color: 'var(--orange)' }}>{cameraCount} {isAm ? 'ካሜራዎች' : 'Cams'}</strong>
              </div>
              <div className="calc-slider-wrap">
                <input
                  type="range"
                  min="2"
                  max="32"
                  step="1"
                  value={cameraCount}
                  onChange={(e) => setCameraCount(Number(e.target.value))}
                  className="calc-slider"
                  aria-label="Camera Count Slider"
                />
                <div className="calc-chips-row">
                  {[4, 8, 16, 24, 32].map((cnt) => (
                    <button
                      key={cnt}
                      type="button"
                      className={`calc-chip-btn ${cameraCount === cnt ? 'active' : ''}`}
                      onClick={() => setCameraCount(cnt)}
                    >
                      {cnt} {isAm ? 'ካሜራ' : 'Cameras'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Resolution */}
            <div>
              <div className="calc-group-title">
                <span>{isAm ? '2. የካሜራ ጥራት (Resolution)' : '2. Camera Resolution'}</span>
              </div>
              <div className="calc-chips-row">
                {(['2mp', '5mp', '8mp'] as const).map((res) => (
                  <button
                    key={res}
                    type="button"
                    className={`calc-chip-btn ${resolution === res ? 'active' : ''}`}
                    onClick={() => setResolution(res)}
                  >
                    {resLabels[res]}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Storage Retention Days */}
            <div>
              <div className="calc-group-title">
                <span>{isAm ? '3. የቪዲዮ ማከማቻ ጊዜ (ቀናት)' : '3. Recording Retention Days'}</span>
                <strong style={{ color: 'var(--ink)' }}>{retentionDays} {isAm ? 'ቀናት' : 'Days'}</strong>
              </div>
              <div className="calc-chips-row">
                {[15, 30, 60, 90].map((days) => (
                  <button
                    key={days}
                    type="button"
                    className={`calc-chip-btn ${retentionDays === days ? 'active' : ''}`}
                    onClick={() => setRetentionDays(days)}
                  >
                    {days} {isAm ? 'ቀናት' : 'Days'}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Recording Mode */}
            <div>
              <div className="calc-group-title">
                <span>{isAm ? '4. የቀረጻ ሁኔታ' : '4. Recording Profile'}</span>
              </div>
              <div className="calc-chips-row">
                <button
                  type="button"
                  className={`calc-chip-btn ${recordingMode === 'continuous' ? 'active' : ''}`}
                  onClick={() => setRecordingMode('continuous')}
                >
                  {isAm ? '24/7 የማያቋርጥ ቀረጻ (Continuous)' : '24/7 Continuous Recording'}
                </button>
                <button
                  type="button"
                  className={`calc-chip-btn ${recordingMode === 'motion' ? 'active' : ''}`}
                  onClick={() => setRecordingMode('motion')}
                >
                  {isAm ? 'በእንቅስቃሴ ብቻ (AI Motion Detection)' : 'Smart AI Motion Only'}
                </button>
              </div>
            </div>
          </div>

          {/* Live Specification Summary Panel */}
          <div className="calc-summary-panel">
            <div className="calc-result-header">
              <span className="calc-result-title">
                {isAm ? 'የተሰላ የሃርድዌር ፍላጎት' : 'Recommended Engineering Spec'}
              </span>
              <div className="calc-result-main">{totalTb} TB</div>
              <p className="calc-result-sub">
                {isAm
                  ? `ለ${cameraCount} ካሜራዎች እና ለ${retentionDays} ቀናት የሚያስፈልግ ጠቅላላ ማከማቻ (~${totalGb.toLocaleString()} GB)`
                  : `Total raw surveillance storage required for ${cameraCount} cameras over ${retentionDays} days (~${totalGb.toLocaleString()} GB)`}
              </p>
            </div>

            <div className="calc-breakdown-list">
              <div className="calc-breakdown-row">
                <span><HardDrive size={16} style={{ display: 'inline', verticalAlign: '-3px', marginRight: 6 }} /> {isAm ? 'የሚመከር ሃርድ ዲስክ' : 'Surveillance Drive'}:</span>
                <strong>{recommendedHdd}</strong>
              </div>

              <div className="calc-breakdown-row">
                <span><Cpu size={16} style={{ display: 'inline', verticalAlign: '-3px', marginRight: 6 }} /> {isAm ? 'የመቅረጫ አቅም (NVR)' : 'Recorder Channel'}:</span>
                <strong>{recommendedNvr}</strong>
              </div>

              <div className="calc-breakdown-row">
                <span><BatteryCharging size={16} style={{ display: 'inline', verticalAlign: '-3px', marginRight: 6 }} /> {isAm ? 'የመብራት ድጋፍ (UPS)' : 'Power Backup (UPS)'}:</span>
                <strong>{recommendedUps}</strong>
              </div>

              <div className="calc-breakdown-row">
                <span><CheckCircle size={16} style={{ display: 'inline', verticalAlign: '-3px', marginRight: 6 }} /> {isAm ? 'የቪዲዮ ኮዴክ' : 'Compression Codec'}:</span>
                <strong>H.265+ Smart Stream</strong>
              </div>
            </div>

            <div style={{ display: 'grid', gap: 10, marginTop: 16 }}>
              <a
                href={whatsappLink(generateCalcWaMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg btn-solid btn-whatsapp"
                style={{ width: '100%' }}
              >
                <Send size={18} /> {isAm ? 'የዚህን ዝርዝር የዋጋ ጥቅስ በዋትስአፕ ይጠይቁ' : 'Get WhatsApp Price for this Spec'}
              </a>

              <Link
                href="/proforma"
                className="btn btn-solid"
                style={{ width: '100%', background: 'rgba(255,255,255,0.12)', color: '#fff' }}
              >
                <FileText size={18} /> {isAm ? 'ይፋዊ ፕሮፎርማ ይጠይቁ' : 'Request Official VAT Proforma'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
