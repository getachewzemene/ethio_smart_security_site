'use client';

import Link from 'next/link';
import { services } from '@/lib/content';
import Icon from '@/components/Icon';
import CtaRow from '@/components/CtaRow';
import ContactLink from '@/components/ContactLink';
import { HelpBlock } from '@/components/Sections';
import { useLanguage } from '@/lib/i18n';

export default function ServicesPageContent() {
  const { t, isAm } = useLanguage();

  const heroWaMessage = isAm
    ? 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ ስለ ሲሲቲቪ አገልግሎቶቻችሁ መጠየቅ እፈልጋለሁ።'
    : 'Hello Ethio Smart Security, I want to ask about your CCTV services.';

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1>{t.sections.servicesTitle}</h1>
          <p className="lead">{t.sections.servicesSub}</p>
          <CtaRow location="services_hero" message={heroWaMessage} />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="sol-list">
            {services.map((s) => {
              const sTrans = t.services[s.slug] || s;
              return (
                <article key={s.slug} className="sol" id={s.slug}>
                  <div className="sol-top">
                    <span className="ic"><Icon name={s.icon} size={28} /></span>
                    <div>
                      <h2 style={{ fontSize: '1.3rem' }}>{sTrans.title}</h2>
                      <p>{sTrans.detail}</p>
                    </div>
                  </div>
                  <div className="sol-actions">
                    <ContactLink
                      kind="whatsapp"
                      location={`service_${s.slug}`}
                      message={sTrans.waMessage}
                      label={isAm ? 'ስለዚህ አገልግሎት ይጠይቁ' : 'Ask about this service'}
                    />
                  </div>
                </article>
              );
            })}
          </div>
          <p className="lead" style={{ marginTop: 22 }}>
            {isAm ? (
              <>የተወሰነ የካሜራ አይነት ይፈልጋሉ? የእኛን <Link href="/solutions"><b>የሲሲቲቪ መፍትሔዎች</b></Link> ይመልከቱ።</>
            ) : (
              <>Looking for a specific camera type? See our <Link href="/solutions"><b>CCTV solutions</b></Link>.</>
            )}
          </p>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap"><HelpBlock location="services_help" /></div>
      </section>
    </>
  );
}
