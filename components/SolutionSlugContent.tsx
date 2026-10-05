'use client';

import Link from 'next/link';
import { getSolution, solutions, getUseCase } from '@/lib/content';
import CtaRow from '@/components/CtaRow';
import Icon from '@/components/Icon';
import { HelpBlock } from '@/components/Sections';
import { useLanguage } from '@/lib/i18n';

export default function SolutionSlugContent({ slug }: { slug: string }) {
  const { t, isAm } = useLanguage();
  const rawSolution = getSolution(slug);

  if (!rawSolution) return null;

  const s = t.solutions[slug] || rawSolution;
  const others = solutions.filter((o) => o.slug !== slug).slice(0, 4);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="crumbs">
            <Link href="/">{t.nav.home}</Link> / <Link href="/solutions">{t.nav.solutions}</Link> / {s.title}
          </p>
          <h1>{s.seoTitle ? s.seoTitle.split(' – ')[0] : s.title}</h1>
          <p className="lead">{s.intro}</p>
          <CtaRow location={`solution_page_${slug}`} message={s.waMessage} />
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div className="prose">
            <h2>{t.sections.problemSolves}</h2>
            <p>{s.problem}</p>
            <h2>{t.sections.goodFor}</h2>
            <ul className="checks">
              {s.goodFor.map((g) => (
                <li key={g}><Icon name="check" size={20} />{g}</li>
              ))}
            </ul>
            {s.notes.map((n) => (
              <p key={n}><b>{t.sections.goodToKnow} </b>{n}</p>
            ))}
          </div>
          <div className="prose">
            <h2>{t.sections.whatYouGet}</h2>
            <ul className="checks">
              {s.features.map((f) => (
                <li key={f}><Icon name="check" size={20} />{f}</li>
              ))}
            </ul>
            <h2>{t.sections.forYourProperty}</h2>
            <ul className="checks">
              {rawSolution.useCases.map((u) => {
                const uc = getUseCase(u);
                const ucTitle = t.useCases[u]?.title || uc?.title || u;
                return uc ? (
                  <li key={u}>
                    <Icon name="arrow" size={20} />
                    <Link href={`/cctv-for/${u}`}>
                      {isAm ? `ሲሲቲቪ ለ${ucTitle}` : `CCTV for ${uc.title.toLowerCase()}`}
                    </Link>
                  </li>
                ) : null;
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap"><HelpBlock location={`solution_page_help_${slug}`} /></div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head"><h2>{t.sections.otherSolutions}</h2></div>
          <ul className="cat-list">
            {others.map((o) => {
              const oTrans = t.solutions[o.slug] || o;
              return (
                <li key={o.slug}>
                  <Link href={`/solutions/${o.slug}`}><b>{oTrans.title}</b></Link>
                  <span>{oTrans.short}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
