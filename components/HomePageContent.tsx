'use client';

import Link from 'next/link';
import FeedMock from '@/components/FeedMock';
import ContactLink from '@/components/ContactLink';
import CtaRow from '@/components/CtaRow';
import Faq from '@/components/Faq';
import {
  TrustStrip,
  UseCaseGrid,
  SolutionList,
  HelpBlock,
  InstallationsPreview,
  DemoGrid,
  WhyList,
  Steps,
  Featured,
  Reviews,
} from '@/components/Sections';
import { site } from '@/lib/site';
import { services } from '@/lib/content';
import Icon from '@/components/Icon';
import { useLanguage } from '@/lib/i18n';

export default function HomePageContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="hero">
        <div className="wrap hero-in">
          <div>
            <h1>{t.hero.title}</h1>
            <p className="lead">{t.hero.lead}</p>
            <a
              href={`tel:${site.phoneTel}`}
              className="hero-phone"
              aria-label={`${t.actions.call} ${site.phoneDisplay}`}
            >
              {site.phoneDisplay}
              <small>{t.hero.phoneSub}</small>
            </a>
            <CtaRow location="hero" />
            <p className="hero-links">
              <Link href="#solutions">{t.hero.linkText}</Link>
            </p>
          </div>
          <FeedMock />
        </div>
      </section>

      <TrustStrip />

      <section className="section" id="protect">
        <div className="wrap">
          <div className="sec-head">
            <h2>{t.sections.protectTitle}</h2>
            <p>{t.sections.protectSub}</p>
          </div>
          <UseCaseGrid />
        </div>
      </section>

      <section className="section alt" id="solutions">
        <div className="wrap">
          <div className="sec-head">
            <h2>{t.sections.solutionsTitle}</h2>
            <p>{t.sections.solutionsSub}</p>
          </div>
          <SolutionList />
        </div>
      </section>

      <section className="section" id="services">
        <div className="wrap">
          <div className="sec-head">
            <h2>{t.sections.servicesTitle}</h2>
            <p>{t.sections.servicesSub}</p>
          </div>
          <ul className="why-grid">
            {services.map((sv) => {
              const svTrans = t.services[sv.slug] || sv;
              return (
                <li key={sv.slug}>
                  <Icon name={sv.icon} size={28} />
                  <div>
                    <h3>{svTrans.title}</h3>
                    <p>{svTrans.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <p style={{ marginTop: 22 }}>
            <Link href="/services" className="link-btn">
              {t.actions.seeAllServices} <Icon name="arrow" size={18} />
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap"><HelpBlock location="not_sure" /></div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="sec-head">
            <h2>{t.sections.installationsTitle}</h2>
            <p>{t.sections.installationsSub}</p>
          </div>
          <InstallationsPreview />
        </div>
      </section>

      <section className="section dark" id="demos">
        <div className="wrap">
          <div className="sec-head">
            <h2>{t.sections.demosTitle}</h2>
            <p>{t.sections.demosSub}</p>
          </div>
          <DemoGrid />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head"><h2>{t.sections.whyTitle}</h2></div>
          <WhyList />
        </div>
      </section>

      <section className="section alt">
        <div className="wrap two-col">
          <div className="sec-head">
            <h2>{t.sections.howTitle}</h2>
            <p>{t.sections.howSub}</p>
            <div style={{ marginTop: 10 }}>
              <ContactLink kind="call" location="how_it_works" size="lg" label={t.actions.talkToUs} />
            </div>
          </div>
          <Steps />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <h2>{t.sections.popularTitle}</h2>
            <p>{t.sections.popularSub}</p>
          </div>
          <Featured />
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="sec-head"><h2>{t.sections.reviewsTitle}</h2></div>
          <Reviews />
        </div>
      </section>

      <section className="section" id="faq">
        <div className="wrap">
          <div className="sec-head"><h2>{t.sections.faqTitle}</h2></div>
          <Faq />
        </div>
      </section>

      <section className="final">
        <div className="wrap">
          <h2>{t.sections.finalTitle}</h2>
          <p className="lead">{t.sections.finalLead}</p>
          <a href={`tel:${site.phoneTel}`} className="big-phone">{site.phoneDisplay}</a>
          <CtaRow location="final_cta" telegram />
        </div>
      </section>
    </>
  );
}
