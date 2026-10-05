'use client';

import CtaRow from '@/components/CtaRow';
import { WhyList, Steps } from '@/components/Sections';
import { site } from '@/lib/site';
import { useLanguage } from '@/lib/i18n';

export default function AboutPageContent() {
  const { t } = useLanguage();

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
