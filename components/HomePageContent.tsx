'use client';

import Link from 'next/link';
import { ShieldCheck, CheckCircle2, Award, FileText } from 'lucide-react';
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
  const { t, isAm } = useLanguage();

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

      {/* Corporate Procurement & On-Site Engineering Survey Section */}
      <section className="section" style={{ background: '#07122b', color: '#fff' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#5dffc4', fontWeight: 800 }}>
                {isAm ? 'የኮርፖሬት ግዢ እና ይፋዊ ፕሮፎርማ' : 'Corporate Procurement & Engineering'}
              </span>
              <h2 style={{ color: '#fff', marginTop: 8, fontSize: 'clamp(1.6rem, 4vw, 2.3rem)' }}>
                {isAm ? 'ለድርጅቶች፣ ለህንፃዎችና ለፋብሪካዎች ይፋዊ የፕሮፎርማ ጥያቄ' : 'Official Proforma & On-Site Engineering Survey'}
              </h2>
              <p style={{ color: '#b9c8e8', marginTop: 12, fontSize: '1.05rem', lineHeight: 1.6 }}>
                {isAm
                  ? 'የTIN እና VAT ደረሰኝ ያሟላ ይፋዊ ፕሮፎርማ፣ የቦታው ቅኝት ጥናት እና የ1-2 ዓመት ዋስትና ለተሟላ የደህንነት ስራዎች።'
                  : 'Official VAT & TIN compliant proformas, blind-spot engineering assessments, and written warranties for building managers, procurement teams, and factories.'}
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 22 }}>
                <Link href="/proforma" className="btn btn-lg btn-solid" style={{ background: 'var(--orange)', color: '#fff' }}>
                  {isAm ? 'ፕሮፎርማ ይጠይቁ' : 'Request Proforma'}
                </Link>
                <Link href="/company-profile" className="btn btn-lg btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>
                  <FileText size={18} /> {isAm ? 'የድርጅት መገለጫ (PDF)' : 'Company Profile (PDF)'}
                </Link>
              </div>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16, padding: 24, display: 'grid', gap: 14 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <ShieldCheck size={24} color="#5dffc4" style={{ flex: 'none', marginTop: 2 }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '1rem', color: '#fff' }}>
                    {isAm ? 'ህጋዊ የTIN እና VAT ደረሰኝ' : 'VAT & TIN Registered Entity'}
                  </strong>
                  <p style={{ fontSize: '0.88rem', color: '#aab8d8', marginTop: 2 }}>
                    {isAm ? 'ህጋዊ የንግድ ፍቃድ፣ የTIN ቁጥር እና የተሟላ ሰነድ ለድርጅት ግዢ ሂደት።' : 'Compliant documentation for procurement committees and enterprise accounting.'}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <CheckCircle2 size={24} color="#5dffc4" style={{ flex: 'none', marginTop: 2 }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '1rem', color: '#fff' }}>
                    {isAm ? 'የነጻ የቦታው ቅኝት እና ጥናት' : 'Free On-Site Route Survey'}
                  </strong>
                  <p style={{ fontSize: '0.88rem', color: '#aab8d8', marginTop: 2 }}>
                    {isAm ? 'የካሜራ አቅጣጫዎችንና የገመድ ማለፊያ መስመሮችን በባለሙያ መለካት።' : 'Technicians survey blind spots and conduit routing in 24 hours.'}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <Award size={24} color="#5dffc4" style={{ flex: 'none', marginTop: 2 }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '1rem', color: '#fff' }}>
                    {isAm ? 'የ1 – 2 ዓመት የሃርድዌር ዋስትና' : '1 – 2 Years Hardware Replacement'}
                  </strong>
                  <p style={{ fontSize: '0.88rem', color: '#aab8d8', marginTop: 2 }}>
                    {isAm ? 'ኦርጅናል እና የታወቁ ብራንዶች ብቻ ከሙሉ የጽሁፍ ዋስትና ጋር።' : 'Genuine Tier-1 cameras (Hikvision, Dahua, Uniview) with written warranty.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
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
