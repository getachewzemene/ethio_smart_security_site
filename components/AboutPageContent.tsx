'use client';

import Link from 'next/link';
import { FileText } from 'lucide-react';
import CtaRow from '@/components/CtaRow';
import { WhyList, Steps } from '@/components/Sections';
import { site } from '@/lib/site';
import { useLanguage } from '@/lib/i18n';

export default function AboutPageContent() {
  const { t, isAm } = useLanguage();

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1>{t.about.title}</h1>
          <p className="lead">{t.about.lead}</p>
          <CtaRow location="about_hero" />
        </div>
      </section>
      <section className="section">
        <div className="wrap prose">
          <h2>{t.sections.howWeWork}</h2>
          <p>{t.about.story1}</p>
          <p>{t.about.story2}</p>
          <p>
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
              <b>{t.actions.openInMaps}</b>
            </a>
          </p>
          <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/company-profile" className="btn btn-solid btn-proforma">
              <FileText size={18} /> {isAm ? 'ይፋዊ የድርጅት መገለጫ (PDF)' : 'Official Company Profile (PDF)'}
            </Link>
            <Link href="/proforma" className="btn btn-outline">
              {isAm ? 'ይፋዊ ፕሮፎርማ ይጠይቁ' : 'Request Proforma Quotation'}
            </Link>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <div className="sec-head">
            <h2>{t.sections.whyTitle}</h2>
          </div>
          <WhyList />
        </div>
      </section>
      <section className="section">
        <div className="wrap two-col">
          <div className="sec-head">
            <h2>{t.sections.howTitle}</h2>
          </div>
          <Steps />
        </div>
      </section>
    </>
  );
}
