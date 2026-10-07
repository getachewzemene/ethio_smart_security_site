import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Award, FileText, CheckCircle2, Download, Building, Phone } from 'lucide-react';
import ProformaWizard from '@/components/ProformaWizard';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Request Official Proforma & Security Quotation | Ethio Smart Security',
  description:
    'Request an official itemized CCTV proforma quotation or book a free on-site engineering survey for commercial buildings, factories, offices, and villas in Addis Ababa. VAT & TIN invoice compliant.',
  keywords: [
    'CCTV proforma Addis Ababa',
    'security camera quotation Ethiopia',
    'CCTV installation price Ethiopia',
    'commercial security survey Addis Ababa',
    'VAT CCTV invoice Ethiopia',
  ],
  alternates: { canonical: '/proforma' },
  openGraph: {
    title: 'Request Official CCTV Proforma & Quotation | Ethio Smart Security',
    description:
      'Formal itemized security proposals, VAT proforma invoices, and free on-site cable & blind-spot surveys in Addis Ababa.',
    url: `${site.url}/proforma`,
    images: ['/og.png'],
  },
};

export default function ProformaPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs">
            <Link href="/">Home</Link> / <span>Proforma & Quotation</span>
          </div>
          <h1>Request Official Proforma & Quotation</h1>
          <p className="lead">
            Formal itemized proposals for procurement committees, building managers, real estate developers, and private properties in Addis Ababa.
          </p>

          <div className="corp-badge-row">
            <span className="corp-badge">
              <ShieldCheck size={16} /> VAT & TIN Registered Business
            </span>
            <span className="corp-badge">
              <Award size={16} /> 1 – 2 Years Hardware Replacement Warranty
            </span>
            <span className="corp-badge">
              <CheckCircle2 size={16} /> Free On-Site Engineering Assessment
            </span>
            <span className="corp-badge">
              <Building size={16} /> Commercial & Enterprise Grade
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <ProformaWizard />
        </div>
      </section>

      {/* Corporate Profile Download Banner */}
      <section className="section alt">
        <div className="wrap">
          <div
            style={{
              background: 'linear-gradient(135deg, #0b1d45, #14306a)',
              color: '#fff',
              borderRadius: 16,
              padding: '36px 32px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 24,
            }}
          >
            <div style={{ maxWidth: 580 }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#61d594', fontWeight: 800 }}>
                Corporate Documentation
              </span>
              <h2 style={{ fontSize: '1.7rem', color: '#fff', marginTop: 6 }}>
                Need Our Official Company Profile & License?
              </h2>
              <p style={{ color: '#b9c8e8', marginTop: 8, fontSize: '0.98rem' }}>
                Download our comprehensive company profile covering engineering capabilities, hardware brand certifications, past commercial installations, and trade license credentials.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/company-profile" className="btn btn-lg btn-solid" style={{ background: '#fff', color: 'var(--ink)' }}>
                <FileText size={18} /> View Company Profile
              </Link>
              <a href={`tel:${site.phoneTel}`} className="btn btn-lg btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>
                <Phone size={18} /> Direct Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Official CCTV Proforma & Engineering Assessment',
          description:
            'Formal itemized security camera proforma quotation and free on-site engineering assessments in Addis Ababa.',
          provider: { '@id': `${site.url}/#business` },
          areaServed: { '@type': 'City', name: 'Addis Ababa' },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Security Procurement Solutions',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CCTV Installation Supply & Setup' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Free On-Site Security Survey' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VAT Proforma Invoice for Tenders' } },
            ],
          },
        }}
      />
    </>
  );
}
