'use client';

import { SolutionList, HelpBlock } from '@/components/Sections';
import CtaRow from '@/components/CtaRow';
import { useLanguage } from '@/lib/i18n';

export default function SolutionsPageContent() {
  const { t, isAm } = useLanguage();

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1>{isAm ? 'የሲሲቲቪ ካሜራ መፍትሔዎች' : 'CCTV solutions'}</h1>
          <p className="lead">
            {isAm
              ? 'የገጠመዎትን ችግር መሰረት ያደረጉ መፍትሔዎች። የትኛው እንደሚስማማዎት እርግጠኛ ካልሆኑ ይደውሉ ወይም በዋትስአፕ ያናግሩን፤ እንነግርዎታለን።'
              : 'Organised by the problem you want to solve. Not sure which one fits? Call or WhatsApp and we will tell you.'}
          </p>
          <CtaRow location="solutions_hero" />
        </div>
      </section>
      <section className="section"><div className="wrap"><SolutionList /></div></section>
      <section className="section alt"><div className="wrap"><HelpBlock location="solutions_help" /></div></section>
    </>
  );
}
