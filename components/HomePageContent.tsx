'use client';

import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  FileText,
  Camera,
  Fingerprint,
  DoorOpen,
  Server,
  Sliders,
  ArrowRight,
  PhoneCall,
  Sparkles,
  Layers,
  Send,
} from 'lucide-react';
import FeedMock from '@/components/FeedMock';
import CorporateStatsBar from '@/components/CorporateStatsBar';
import { Reviews } from '@/components/Sections';
import { site, whatsappLink } from '@/lib/site';
import { useLanguage } from '@/lib/i18n';

export default function HomePageContent() {
  const { t, isAm } = useLanguage();

  return (
    <>
      {/* 1. Hero: High-Impact Executive Command Center */}
      <section className="hero">
        <div className="wrap hero-in">
          <div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                color: 'var(--green)',
                fontWeight: 800,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: 10,
              }}
            >
              <ShieldCheck size={16} />{' '}
              {isAm ? 'የተረጋገጠ የደህንነት ምህንድስና' : 'Enterprise Security Engineering'}
            </span>
            <h1>{t.hero.title}</h1>
            <p className="lead">{t.hero.lead}</p>

            {/* Quick Action Hub: Direct Launch to Proforma, Calculator & Phone */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', margin: '24px 0 16px' }}>
              <Link
                href="/proforma"
                className="btn btn-lg btn-solid"
                style={{ background: 'var(--orange)', color: '#fff' }}
              >
                <FileText size={18} /> {isAm ? 'ይፋዊ ፕሮፎርማ ይጠይቁ' : 'Request Official Proforma'}
              </Link>
              <Link
                href="/calculator"
                className="btn btn-lg btn-solid"
                style={{ background: 'var(--ink)', color: '#fff' }}
              >
                <Sliders size={18} /> {isAm ? 'የስቶሬጅ ካልኩሌተር' : 'CCTV Storage Calculator'}
              </Link>
              <a href={`tel:${site.phoneTel}`} className="btn btn-lg btn-outline">
                <PhoneCall size={18} /> {site.phoneDisplay}
              </a>
            </div>

            {/* Instant Trust Proof Tags */}
            <div
              style={{
                display: 'flex',
                gap: 16,
                alignItems: 'center',
                fontSize: '0.88rem',
                color: 'var(--muted)',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle2 size={16} color="var(--green)" />{' '}
                {isAm ? 'ህጋዊ የTIN እና VAT ደረሰኝ' : 'VAT / TIN Invoices'}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle2 size={16} color="var(--green)" />{' '}
                {isAm ? 'የ1–2 ዓመት የጽሁፍ ዋስትና' : '1–2 Year Written Warranty'}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle2 size={16} color="var(--green)" />{' '}
                {isAm ? 'ነጻ የቦታው ቅኝት' : 'Free On-Site Survey'}
              </span>
            </div>
          </div>
          <FeedMock />
        </div>
      </section>

      {/* 2. Key Metric Counters (Corporate Stats Bar) */}
      <CorporateStatsBar />

      {/* 3. Core Security Pillars: Clean 4-Card Gateways */}
      <section className="section" id="pillars">
        <div className="wrap">
          <div className="sec-head">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                color: 'var(--green)',
                fontWeight: 800,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              <Layers size={16} />{' '}
              {isAm ? 'የተሟላ የደህንነት አገልግሎቶች' : 'Integrated Security Ecosystem'}
            </div>
            <h2>{isAm ? 'የምንሰጣቸው ዋና ዋና የደህንነት መፍትሄዎች' : 'Core Enterprise Security Solutions'}</h2>
            <p>
              {isAm
                ? 'ከተራ የካሜራ ሽያጭ ባሻገር ለድርጅቶች፣ ለህንፃዎችና ለቪላዎች ደረጃቸውን የጠበቁ የተሟሉ የቴክኖሎጂ ስራዎች።'
                : 'From smart AI surveillance to biometric access control and server room racks — select a pillar below to explore.'}
            </p>
          </div>

          <div className="portal-pillars">
            {/* Pillar 1: CCTV Surveillance */}
            <Link href="/solutions" className="portal-pillar-card">
              <div className="portal-pillar-icon" style={{ background: '#eef2ff', color: '#3b82f6' }}>
                <Camera size={24} />
              </div>
              <strong className="portal-pillar-title">
                {isAm ? 'የሲሲቲቪ ካሜራ ሲስተሞች (CCTV)' : 'CCTV & AI Surveillance'}
              </strong>
              <p className="portal-pillar-desc">
                {isAm
                  ? '4K Ultra-HD፣ ColorVu የቀለም የሌሊት እይታ፣ PTZ ተንቀሳቃሽ እና 4G SIM ካርድ ካሜራዎች በስልክ ክትትል።'
                  : '4K Ultra-HD, ColorVu night vision, 360° PTZ tracking, and solar 4G cameras for off-grid sites.'}
              </p>
              <span className="portal-pillar-link">
                {isAm ? 'ሁሉንም የካሜራ ጥቅሎች ይመልከቱ' : 'Explore CCTV Packages'} <ArrowRight size={16} />
              </span>
            </Link>

            {/* Pillar 2: Access Control & Time Attendance */}
            <Link href="/solutions/access-control-time-attendance" className="portal-pillar-card">
              <div className="portal-pillar-icon" style={{ background: '#ecfdf5', color: '#10b981' }}>
                <Fingerprint size={24} />
              </div>
              <strong className="portal-pillar-title">
                {isAm ? 'የጣት አሻራ እና የፊት መለያ' : 'Access Control & Attendance'}
              </strong>
              <p className="portal-pillar-desc">
                {isAm
                  ? 'የሰራተኞች መግቢያና መውጫ መቆጣጠሪያ፣ RFID ካርዶች እና የበር መክፈቻ ኤሌክትሪክ መቆለፊያዎች።'
                  : 'Biometric fingerprint, RFID badges, and facial recognition terminals with auto-locking maglocks.'}
              </p>
              <span className="portal-pillar-link">
                {isAm ? 'የአክሰስ ኮንትሮል ዝርዝር' : 'View Access Control'} <ArrowRight size={16} />
              </span>
            </Link>

            {/* Pillar 3: Smart Intercoms & Gate Automation */}
            <Link href="/solutions/smart-intercom-gate-automation" className="portal-pillar-card">
              <div className="portal-pillar-icon" style={{ background: '#fffbeb', color: '#f59e0b' }}>
                <DoorOpen size={24} />
              </div>
              <strong className="portal-pillar-title">
                {isAm ? 'ስማርት ኢንተርኮም እና አውቶማቲክ በር' : 'Smart Intercom & Gate Motors'}
              </strong>
              <p className="portal-pillar-desc">
                {isAm
                  ? 'የቪላ እና አፓርትመንት ቪዲዮ ዶርቤል ከስልክ የቀጥታ ጥሪ እና በር በርቀት መክፈቻ ሞተር ጋር።'
                  : 'Touchscreen video doorbells, remote smartphone door release, and automatic rolling/sliding gate motors.'}
              </p>
              <span className="portal-pillar-link">
                {isAm ? 'የኢንተርኮም ዝርዝር' : 'View Smart Intercoms'} <ArrowRight size={16} />
              </span>
            </Link>

            {/* Pillar 4: Centralized Server Rooms & Video Walls */}
            <Link href="/solutions/server-room-nvr-video-wall" className="portal-pillar-card">
              <div className="portal-pillar-icon" style={{ background: '#f5f3ff', color: '#8b5cf6' }}>
                <Server size={24} />
              </div>
              <strong className="portal-pillar-title">
                {isAm ? 'ሰርቨር ሩም እና ማዕከላዊ ቪዲዮ ዎል' : 'Server Rooms & Video Walls'}
              </strong>
              <p className="portal-pillar-desc">
                {isAm
                  ? 'የተደራጀ የCAT6 ኔትወርክ ገመድ ዝርጋታ፣ የሰርቨር ካቢኔቶች እና የጥበቃ ክፍል የቪዲዮ ክትትል ስክሪኖች።'
                  : 'Structured CAT6 trunking, ventilated 19" rack cabinets, centralized UPS, and multi-screen security video walls.'}
              </p>
              <span className="portal-pillar-link">
                {isAm ? 'የሰርቨር ሩም ዝርዝር' : 'View Video Wall Systems'} <ArrowRight size={16} />
              </span>
            </Link>
          </div>

          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <Link href="/solutions" className="link-btn" style={{ fontSize: '0.96rem' }}>
              {isAm ? 'ሁሉንም 11 የደህንነት መፍትሄዎችና ጥቅሎች ይመልከቱ' : 'View All 11 Solutions & Packages'}{' '}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Enterprise Hub: System Calculator & Official Procurement Tools */}
      <section className="section alt" id="portal-tools">
        <div className="wrap">
          <div className="sec-head">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                color: 'var(--green)',
                fontWeight: 800,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              <Sparkles size={16} />{' '}
              {isAm ? 'የግዢ እና የስሌት መሳሪያዎች' : 'Procurement & Planning Tools'}
            </div>
            <h2>{isAm ? 'የሲስተም መገንቢያ ካልኩሌተር እና ይፋዊ ፕሮፎርማ' : 'System Builder & Procurement Hub'}</h2>
            <p>
              {isAm
                ? 'የቪዲዮ ማከማቻ ፍላጎትዎን በቅጽበት ያሰሉ ወይም ለድርጅትዎ ይፋዊ የዋጋ ማቅረቢያ ሰነድ (VAT Proforma) ያውጡ።'
                : 'Calculate exact surveillance storage capacity or generate a formal itemized quotation for your procurement committee.'}
            </p>
          </div>

          <div className="portal-tools-grid">
            {/* Tool 1: Storage & Hardware Calculator Teaser */}
            <div className="portal-tool-card">
              <div className="portal-tool-top">
                <span className="portal-tool-badge" style={{ background: '#dcfce7', color: '#166534' }}>
                  <Sliders size={14} /> {isAm ? 'በይነተገናኝ ካልኩሌተር' : 'Interactive Sizing Widget'}
                </span>
                <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>
                  WD Purple &amp; H.265+
                </span>
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--ink)', margin: '14px 0 8px' }}>
                {isAm ? 'የሲሲቲቪ እና የስቶሬጅ ካልኩሌተር' : 'CCTV Storage & System Calculator'}
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.94rem', lineHeight: 1.5, margin: 0 }}>
                {isAm
                  ? 'የካሜራ ብዛት (2–32)፣ የጥራት መጠን (2MP/5MP/4K) እና የቀረጻ ቀናት ይምረጡ፤ የሚያስፈልገውን የWD Purple ሃርድ ዲስክ መጠን፣ የመቅረጫ (NVR) አቅም እና የUPS ባትሪ በቅጽበት ያሰሉ።'
                  : 'Select camera count, resolution, and retention days to determine recommended Western Digital Purple surveillance drives, recorder channel capacity, and UPS power backup.'}
              </p>

              {/* Quick Spec Highlights */}
              <div
                style={{
                  background: '#f8fafc',
                  border: '1px solid var(--line)',
                  borderRadius: 12,
                  padding: '14px 16px',
                  margin: '18px 0',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 10,
                  textAlign: 'center',
                }}
              >
                <div>
                  <span style={{ fontSize: '0.76rem', color: 'var(--muted)', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Cameras</span>
                  <strong style={{ color: 'var(--ink)', fontSize: '1.15rem' }}>4 – 32+</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.76rem', color: 'var(--muted)', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Drives</span>
                  <strong style={{ color: 'var(--ink)', fontSize: '1.15rem' }}>1TB – 32TB</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.76rem', color: 'var(--muted)', display: 'block', textTransform: 'uppercase', fontWeight: 700 }}>Backup</span>
                  <strong style={{ color: 'var(--ink)', fontSize: '1.15rem' }}>Smart UPS</strong>
                </div>
              </div>

              <div style={{ marginTop: 'auto', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Link
                  href="/calculator"
                  className="btn btn-solid"
                  style={{ background: 'var(--ink)', color: '#fff', flex: 1, justifyContent: 'center' }}
                >
                  <Sliders size={18} /> {isAm ? 'ካልኩሌተሩን ይክፈቱ' : 'Open System Calculator'}
                </Link>
              </div>
            </div>

            {/* Tool 2: Corporate Procurement & Proforma Wizard */}
            <div className="portal-tool-card">
              <div className="portal-tool-top">
                <span className="portal-tool-badge" style={{ background: '#ffedd5', color: '#9a3412' }}>
                  <FileText size={14} /> {isAm ? 'ይፋዊ የድርጅት ግዢ' : 'Official VAT Procurement'}
                </span>
                <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>
                  TIN / VAT Registered
                </span>
              </div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--ink)', margin: '14px 0 8px' }}>
                {isAm ? 'ይፋዊ ፕሮፎርማ እና የድርጅት መገለጫ' : 'Official Proforma & Company Profile'}
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.94rem', lineHeight: 1.5, margin: 0 }}>
                {isAm
                  ? 'ለህንፃ አስተዳዳሪዎች፣ ለፋብሪካዎችና ለድርጅቶች የተዘጋጀ ይፋዊ የዋጋ ማቅረቢያ (VAT Proforma)። የቦታው ቅኝት ጥናት እና የ1–2 ዓመት የጽሁፍ ዋስትና ሰነድ ያካትታል።'
                  : 'Tailored for procurement officers, building managers, and NGOs. Generate an official itemized VAT proforma invoice or download our complete company credentials and licenses.'}
              </p>

              {/* Value Points */}
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '18px 0',
                  display: 'grid',
                  gap: 8,
                  fontSize: '0.9rem',
                  color: 'var(--ink)',
                }}
              >
                <li style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <CheckCircle2 size={16} color="var(--green)" style={{ flex: 'none' }} />{' '}
                  <span>{isAm ? 'ህጋዊ የTIN ቁጥርና የንግድ ምዝገባ ሰነድ' : 'Official TIN/VAT registration & business license'}</span>
                </li>
                <li style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <CheckCircle2 size={16} color="var(--green)" style={{ flex: 'none' }} />{' '}
                  <span>{isAm ? 'የ24 ሰዓት ነጻ የቦታው ቅኝት (Route Survey)' : 'Free on-site engineering route survey in 24 hours'}</span>
                </li>
                <li style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <CheckCircle2 size={16} color="var(--green)" style={{ flex: 'none' }} />{' '}
                  <span>{isAm ? 'ኦርጅናል ሃርድዌር ከ1–2 ዓመት ምትክ ዋስትና ጋር' : 'Tier-1 genuine equipment with written warranty'}</span>
                </li>
              </ul>

              <div style={{ marginTop: 'auto', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <Link
                  href="/proforma"
                  className="btn btn-solid"
                  style={{ background: 'var(--orange)', color: '#fff', flex: 1, justifyContent: 'center' }}
                >
                  <FileText size={18} /> {isAm ? 'ፕሮፎርማ ይጠይቁ' : 'Request Proforma'}
                </Link>
                <Link
                  href="/company-profile"
                  className="btn btn-outline"
                  style={{ justifyContent: 'center' }}
                >
                  {isAm ? 'የድርጅት መገለጫ (PDF)' : 'Company Profile (PDF)'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Concealed Conduit Engineering Guarantee Banner */}
      <section className="section" id="engineering-quality">
        <div className="wrap">
          <div className="portal-standard-banner">
            <div style={{ maxWidth: 660 }}>
              <span
                style={{
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#5dffc4',
                  fontWeight: 800,
                }}
              >
                {isAm ? 'የምህንድስና እና የገጠማ ጥራት' : 'The Clean Installation Guarantee'}
              </span>
              <h2 style={{ color: '#fff', marginTop: 8, fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)' }}>
                {isAm
                  ? '100% በኮንዱይት ቱቦ የተደበቀ ንጹህ የገመድ ዝርጋታ'
                  : 'Concealed Conduit Engineering — Zero Messy Wires'}
              </h2>
              <p style={{ color: '#b9c8e8', marginTop: 10, fontSize: '0.98rem', lineHeight: 1.6 }}>
                {isAm
                  ? 'የተለመደው ተራ ገበያ ገመዶችን በግድግዳ ላይ ያለምንም ከለላ ያንጠለጥላል። እኛ እያንዳንዱን ገመድ በጠንካራ የPVC ቱቦ ውስጥ በመደበቅ፣ በውሃ መከላከያ ሳጥኖች (IP66) እና በሰርጅ መከላከያዎች እንገጥማለን።'
                  : 'Unlike informal sellers who leave exposed dangling wires with cheap electrical tape, every Ethio Smart Security project is routed through heavy-duty PVC conduits, weatherproof junction boxes, and dedicated surge arresters.'}
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                  gap: 12,
                  margin: '22px 0',
                }}
              >
                <div
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: 10,
                    padding: '12px 14px',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <strong style={{ color: '#5dffc4', display: 'block', fontSize: '0.95rem' }}>
                    100% Concealed
                  </strong>
                  <span style={{ color: '#c3cee8', fontSize: '0.82rem' }}>
                    Heavy PVC conduits &amp; trunking
                  </span>
                </div>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: 10,
                    padding: '12px 14px',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <strong style={{ color: '#5dffc4', display: 'block', fontSize: '0.95rem' }}>
                    IP66/IP67 Sealed
                  </strong>
                  <span style={{ color: '#c3cee8', fontSize: '0.82rem' }}>
                    Weatherproof junction mounts
                  </span>
                </div>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: 10,
                    padding: '12px 14px',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <strong style={{ color: '#5dffc4', display: 'block', fontSize: '0.95rem' }}>
                    24/7 WD Purple
                  </strong>
                  <span style={{ color: '#c3cee8', fontSize: '0.82rem' }}>
                    Surveillance-grade storage
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link
                  href="/installations"
                  className="btn btn-solid"
                  style={{ background: 'var(--green)', color: '#fff' }}
                >
                  {isAm ? 'የተከናወኑ ስራዎችንና የገመድ ጥራቱን ይመልከቱ' : 'View Real Installations Gallery'}{' '}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/proforma"
                  className="btn btn-outline"
                  style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.35)' }}
                >
                  {isAm ? 'ነጻ የቦታው ቅኝት ይዘዙ' : 'Book Free On-Site Survey'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Verified Customer Feedback */}
      <section className="section alt" id="reviews">
        <div className="wrap">
          <div className="sec-head">
            <h2>{t.sections.reviewsTitle}</h2>
            <p>
              {isAm
                ? 'በአዲስ አበባ ውስጥ ቤታቸውን፣ ሱቃቸውን እና ድርጅታቸውን በእኛ ያሰሩ ደንበኞች አስተያየት።'
                : 'What property owners, building managers, and shop owners say about our installations.'}
            </p>
          </div>
          <Reviews />
        </div>
      </section>

      {/* 7. Executive Direct Call & Assessment Closer */}
      <section className="final">
        <div className="wrap">
          <h2>{t.sections.finalTitle}</h2>
          <p className="lead">{t.sections.finalLead}</p>
          <a href={`tel:${site.phoneTel}`} className="big-phone">
            {site.phoneDisplay}
          </a>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 18 }}>
            <Link
              href="/proforma"
              className="btn btn-lg btn-solid"
              style={{ background: 'var(--orange)', color: '#fff' }}
            >
              <FileText size={18} /> {isAm ? 'ይፋዊ ፕሮፎርማ ይጠይቁ' : 'Request Official Proforma'}
            </Link>
            <Link
              href="/calculator"
              className="btn btn-lg btn-outline"
              style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}
            >
              <Sliders size={18} /> {isAm ? 'የስቶሬጅ ካልኩሌተር' : 'CCTV Storage Calculator'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
