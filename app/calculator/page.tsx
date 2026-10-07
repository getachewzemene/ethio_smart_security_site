import type { Metadata } from 'next';
import SecuritySystemCalculator from '@/components/SecuritySystemCalculator';
import Link from 'next/link';
import { ArrowLeft, FileText, PhoneCall } from 'lucide-react';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Interactive CCTV Storage & System Calculator | Ethio Smart Security',
  description:
    'Calculate exact CCTV storage requirements (WD Purple drives), NVR recorder channel sizing, and UPS battery backup for your property in Addis Ababa, Ethiopia.',
  alternates: { canonical: '/calculator' },
};

export default function CalculatorPage() {
  return (
    <main style={{ paddingBottom: 60 }}>
      {/* Dedicated Page Hero */}
      <section className="page-hero" style={{ background: '#07122b', color: '#fff', padding: '50px 0 40px' }}>
        <div className="wrap">
          <div style={{ marginBottom: 16 }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                color: '#5dffc4',
                fontSize: '0.88rem',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', margin: '0 0 12px' }}>
            Interactive CCTV Storage & System Builder
          </h1>
          <p className="lead" style={{ color: '#b9c8e8', maxWidth: 720, margin: 0 }}>
            Configure your camera count, video resolution, and recording retention days to determine recommended Western Digital Purple surveillance hard drives, NVR channel capacity, and UPS power backup.
          </p>
        </div>
      </section>

      {/* Embedded Calculator */}
      <SecuritySystemCalculator />

      {/* Post-Calculator Guidance */}
      <section className="wrap" style={{ marginTop: 20 }}>
        <div
          style={{
            background: '#f8fafc',
            border: '1px solid var(--line)',
            borderRadius: 16,
            padding: '28px 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 24,
            alignItems: 'center',
          }}
        >
          <div>
            <h3 style={{ margin: '0 0 8px', color: 'var(--ink)' }}>Need an Official Procurement Proforma?</h3>
            <p style={{ margin: 0, color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.5 }}>
              We issue VAT &amp; TIN compliant proforma invoices with written hardware replacement warranties for building committees, NGOs, and corporate procurement.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/proforma" className="btn btn-solid" style={{ background: 'var(--orange)', color: '#fff' }}>
              <FileText size={18} /> Request Proforma
            </Link>
            <a href={`tel:${site.phoneTel}`} className="btn btn-outline">
              <PhoneCall size={18} /> Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
