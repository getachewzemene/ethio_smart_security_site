'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Building,
  Printer,
  Phone,
  FileText,
  Cpu,
  Layers,
  Wrench,
  Clock,
  Check,
} from 'lucide-react';
import { site } from '@/lib/site';
import { useLanguage } from '@/lib/i18n';

export default function CompanyProfileContent() {
  const { isAm } = useLanguage();

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1>{isAm ? 'የድርጅት መገለጫ እና የቴክኒክ አቅም' : 'Company Profile & Capabilities'}</h1>
          <p className="lead">
            {isAm
              ? 'ኢትዮ ስማርት ሴኩሪቲ እና ሲሲቲቪ በአዲስ አበባ የተመሰረተ፣ የንግድ ሕንፃዎችን፣ ፋብሪካዎችን፣ ቪላዎችንና ተቋማትን በዘመናዊ የኤሌክትሮኒክስ ደህንነት ቴክኖሎጂ የሚጠብቅ ድርጅት ነው።'
              : 'Ethio Smart Security & CCTV is an Addis Ababa based electronic security systems provider specializing in commercial surveillance, access control, and turnkey security engineering.'}
          </p>

          <div className="corp-badge-row">
            <span className="corp-badge">
              <ShieldCheck size={16} /> VAT & TIN Registered Business
            </span>
            <span className="corp-badge">
              <Award size={16} /> 1 – 2 Years Hardware Replacement Warranty
            </span>
            <span className="corp-badge">
              <Building size={16} /> Commercial & Enterprise Engineering
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 900 }}>
          {/* Printable Document Container */}
          <article className="proforma-slip" style={{ padding: '36px 32px' }}>
            {/* Document Header */}
            <header className="slip-header" style={{ alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--green)', fontWeight: 800 }}>
                  {isAm ? 'ይፋዊ የድርጅት መገለጫ · አዲስ አበባ' : 'Corporate Overview · Addis Ababa, Ethiopia'}
                </span>
                <h2 style={{ fontSize: '1.8rem', marginTop: 4 }}>
                  Ethio Smart Security & CCTV
                </h2>
                <p style={{ color: 'var(--muted)', fontSize: '0.92rem', marginTop: 4 }}>
                  {isAm ? 'የደህንነት ሲስተሞች አቅርቦት፣ ገጠማ እና የዓመታዊ ጥገና ውል (AMC)' : 'Engineering, Supply, Installation & Annual Maintenance Contracts'}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ display: 'inline-block', background: '#0b1d45', color: '#fff', padding: '6px 14px', borderRadius: 8, fontWeight: 700, fontSize: '0.85rem' }}>
                  ESTABLISHED 2023
                </span>
              </div>
            </header>

            {/* Executive Summary */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 12, color: 'var(--ink)' }}>
                {isAm ? '1. አጠቃላይ የድርጅቱ መግለጫ (Executive Summary)' : '1. Executive Summary'}
              </h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: 14 }}>
                {isAm
                  ? 'ኢትዮ ስማርት ሴኩሪቲ እና ሲሲቲቪ ለመኖሪያ ቪላዎች፣ ለንግድ ቢሮዎች፣ ለኢንዱስትሪ ፋብሪካዎች፣ ለሱቆችና ለፋይናንስ ተቋማት ዘመናዊ የሲሲቲቪ እና የደህንነት ቴክኖሎጂዎችን ያቀርባል፤ ይገጥማል፤ ቀጣይነት ያለው የቴክኒክ ድጋፍ ይሰጣል።'
                  : 'Ethio Smart Security & CCTV provides end-to-end physical security technology solutions for residential compounds, commercial office complexes, industrial factories, retail establishments, and financial institutions across Addis Ababa and neighboring industrial corridors.'}
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
                {isAm
                  ? 'ተራ ካሜራ ሻጮች ከሚሰሩት በተለየ፣ ዋና ትኩረታችን የተሟላ የደህንነት ምህንድስና ነው፡ ትክክለኛ የሌንስ ምርጫ፣ በኮንዱይት ቱቦ ውስጥ የተደበቀ ጥራት ያለው የገመድ ዝርጋታ፣ ለመብራት መቆራረጥ የማይበገሩ የባትሪ ድጋፎች እና አስተማማኝ የጽሁፍ ዋስትና።'
                  : 'Unlike informal consumer camera vendors, our focus is structural security engineering: selecting correct optics, ensuring zero unmanaged exposed wiring, implementing reliable power backup resilience against grid outages, and providing guaranteed after-sales technical SLAs.'}
              </p>
            </div>

            {/* Core Solutions Catalog */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 16, color: 'var(--ink)' }}>
                {isAm ? '2. የኮርፖሬት ደህንነት መፍትሔዎች' : '2. Enterprise Solutions Portfolio'}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                <div style={{ background: '#f8fafc', padding: 18, borderRadius: 10, border: '1px solid var(--line)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <Layers size={20} color="var(--green)" />
                    <strong style={{ fontSize: '1.02rem' }}>{isAm ? 'ከፍተኛ ጥራት የሲሲቲቪ ሲስተሞች' : 'High-Definition CCTV Systems'}</strong>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                    {isAm
                      ? 'የቀንና የሌሊት የቀለም እይታ (ColorVu)፣ ባለ 360° ዙሪያ መዞሪያ PTZ፣ የተሽከርካሪ ታርጋ መለያ እና በስልክ በቀጥታ መከታተያ።'
                      : 'Full HD & 4K Ultra-HD surveillance with 24/7 Color Night Vision (ColorVu), optical PTZ 360° patrol, license plate recognition, and multi-user smartphone viewing.'}
                  </p>
                </div>

                <div style={{ background: '#f8fafc', padding: 18, borderRadius: 10, border: '1px solid var(--line)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <Cpu size={20} color="var(--green)" />
                    <strong style={{ fontSize: '1.02rem' }}>{isAm ? 'የጣት አሻራ እና ፊት መለያ' : 'Biometric Access & Attendance'}</strong>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                    {isAm
                      ? 'የሰራተኞች መግቢያና መውጫ መቆጣጠሪያ፣ የሰዓት መመዝገቢያ እና የቢሮ በሮች ደህንነት።'
                      : 'Fingerprint, RFID card, and facial recognition terminals for secure employee gate access, time-attendance auditing, and server room authorization.'}
                  </p>
                </div>

                <div style={{ background: '#f8fafc', padding: 18, borderRadius: 10, border: '1px solid var(--line)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <Wrench size={20} color="var(--green)" />
                    <strong style={{ fontSize: '1.02rem' }}>{isAm ? 'ሶላር እና 4G ሲም ካሜራዎች' : 'Off-Grid Solar & 4G Wireless'}</strong>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                    {isAm
                      ? 'የኤሌክትሪክ ኃይልና ኢንተርኔት በሌለባቸው የኮንስትራክሽን ሳይቶች፣ እርሻዎችና ሰፊ ግቢዎች የሚገጠም አስተማማኝ ሶላር።'
                      : 'Autonomous solar-powered surveillance with 4G SIM connectivity, designed for remote compounds, agricultural farms, and construction sites without internet.'}
                  </p>
                </div>

                <div style={{ background: '#f8fafc', padding: 18, borderRadius: 10, border: '1px solid var(--line)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <Clock size={20} color="var(--green)" />
                    <strong style={{ fontSize: '1.02rem' }}>{isAm ? 'ዓመታዊ የጥገና ውል (AMC)' : 'Annual Maintenance Contracts (AMC)'}</strong>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                    {isAm
                      ? 'ወርሃዊ የካሜራ ሌንስ ማጽዳት፣ የሃርድ ዲስክ ጤንነት ፍተሻ፣ የUPS ባትሪ ምርመራ እና ፈጣን የቴክኒክ ድጋፍ።'
                      : 'Proactive monthly lens cleanings, NVR health checks, storage archiving, UPS battery testing, and guaranteed 4-hour emergency technician dispatch.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Installation Standards */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 14, color: 'var(--ink)' }}>
                {isAm ? '3. የቴክኒክ እና የስራ ጥራት ደረጃዎች' : '3. Technical Standards & Workmanship'}
              </h3>
              <ul style={{ display: 'grid', gap: 10 }}>
                {[
                  isAm
                    ? '100% የተደበቀ የገመድ መስመር፡ ሁሉም ገመዶች በጠንካራ የPVC ኮንዱይት ቱቦዎችና ትረንኪንግ ውስጥ ያልፋሉ፤ የተዝረከረከ ገመድ አይኖርም።'
                    : '100% Concealed Wiring: All outdoor and indoor cables routed through heavy-duty PVC conduit and protective trunking.',
                  isAm
                    ? 'የአየር ጠባይ መቋቋም፡ የክረምቱን ዝናብና አቧራ የሚከላከሉ IP66/IP67 የውሃ መከላከያ ሳጥኖች።'
                    : 'Weatherproof Junctions: IP66/IP67 rated silicone-sealed camera junction boxes to withstand torrential Addis Ababa rains.',
                  isAm
                    ? 'የኤሌክትሪክ ቮልቴጅ መከላከያ፡ የካሜራ እና የNVR እናት ቦርድን ከመብራት መዋዠቅ የሚጠብቁ ሰርጅ አሬስተሮች።'
                    : 'Surge & Spike Protection: Integrated electrical surge arresters to protect NVR motherboards and cameras from unstable power spikes.',
                  isAm
                    ? 'ኦርጅናል ሰርቪላንስ ሃርድ ዲስክ፡ 24/7 ተብለው የተሰሩ Western Digital Purple እና Seagate SkyHawk ሃርድ ዲስኮች ብቻ።'
                    : 'Dedicated Surveillance Hard Drives: We exclusively deploy 24/7 Western Digital Purple and Seagate SkyHawk drives, not cheap recycled desktop drives.',
                  isAm
                    ? 'የተጠበቀ የስልክ ክትትል፡ በይለፍ ቃል የተመሰጠረ የስልክና የኮምፒውተር መከታተያ መተግበሪያ ከደረጃ በደረጃ ፈቃዶች ጋር።'
                    : 'Encrypted Mobile Monitoring: Bank-grade encrypted stream setup on Android/iOS/PC with individual role permissions for managers and owners.',
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '0.94rem', color: 'var(--muted)' }}>
                    <Check size={18} color="var(--green)" style={{ flex: 'none', marginTop: 3 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Corporate Credentials */}
            <div style={{ marginBottom: 32, background: '#f8fafc', padding: 22, borderRadius: 12, border: '1px solid var(--line)' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: 12, color: 'var(--ink)' }}>
                {isAm ? '4. ህጋዊ ምዝገባ እና አድራሻ' : '4. Corporate Registration & Compliance'}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, fontSize: '0.92rem' }}>
                <div>
                  <strong style={{ display: 'block', color: 'var(--muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                    {isAm ? 'የንግድ ምዝገባ' : 'Registration'}
                  </strong>
                  <b>Licensed Security & CCTV Contractor</b>
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                    {isAm ? 'የግብር ሰነድ' : 'Tax Invoicing'}
                  </strong>
                  <b>VAT & TIN Invoice Available</b>
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                    {isAm ? 'ዋና ቢሮ' : 'Headquarters'}
                  </strong>
                  <b>{site.address}</b>
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                    {isAm ? 'ቀጥታ ግንኙነት' : 'Direct Inquiries'}
                  </strong>
                  <b>{site.phoneDisplay} · {site.email}</b>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14, paddingTop: 18, borderTop: '2px solid var(--line)' }}>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/proforma" className="btn btn-solid btn-call">
                  <FileText size={18} /> {isAm ? 'ይፋዊ ፕሮፎርማ ይጠይቁ' : 'Request Official Proforma'}
                </Link>
                <a href={`tel:${site.phoneTel}`} className="btn btn-solid btn-whatsapp">
                  <Phone size={18} /> {isAm ? `ይደውሉ፡ ${site.phoneDisplay}` : `Call ${site.phoneDisplay}`}
                </a>
              </div>
              <button
                type="button"
                className="btn btn-outline"
                onClick={handlePrint}
              >
                <Printer size={16} /> {isAm ? 'ሰነዱን አትም / Save PDF' : 'Print / Save PDF'}
              </button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
