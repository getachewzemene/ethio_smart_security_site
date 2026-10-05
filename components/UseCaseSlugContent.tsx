'use client';

import Link from 'next/link';
import { getSolution, getUseCase } from '@/lib/content';
import CtaRow from '@/components/CtaRow';
import Icon from '@/components/Icon';
import ContactLink from '@/components/ContactLink';
import { HelpBlock } from '@/components/Sections';
import { useLanguage } from '@/lib/i18n';

export default function UseCaseSlugContent({ slug }: { slug: string }) {
  const { t, isAm } = useLanguage();
  const rawUseCase = getUseCase(slug);

  if (!rawUseCase) return null;

  const u = t.useCases[slug] || rawUseCase;
  const recs = rawUseCase.recommended.map(getSolution).filter(Boolean) as NonNullable<ReturnType<typeof getSolution>>[];

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="crumbs">
            <Link href="/">{t.nav.home}</Link> / {isAm ? `ሲሲቲቪ ለ${u.title}` : `CCTV for ${rawUseCase.title.toLowerCase()}`}
          </p>
          <h1>{u.headline}</h1>
          <p className="lead">{u.body}</p>
          <CtaRow location={`usecase_${slug}`} message={u.waMessage} />
        </div>
      </section>

      <section className="section">
        <div className="wrap two-col">
          <div className="prose">
            <h2>{t.sections.usuallyCover}</h2>
            <ul className="checks">
              {u.watch.map((w) => (
                <li key={w}><Icon name="check" size={20} />{w}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="sec-head"><h2>{t.sections.recommendedSolutions}</h2></div>
            <ul className="cat-list">
              {recs.map((r) => {
                const rTrans = t.solutions[r.slug] || r;
                return (
                  <li key={r.slug}>
                    <Link href={`/solutions/${r.slug}`}><b>{rTrans.title}</b></Link>
                    <span>{rTrans.short}</span>
                  </li>
                );
              })}
            </ul>
            <div style={{ marginTop: 20 }}>
              <ContactLink
                kind="whatsapp"
                location={`usecase_rec_${slug}`}
                message={u.waMessage}
                label={t.actions.getRecommendation}
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap"><HelpBlock location={`usecase_help_${slug}`} /></div>
      </section>
    </>
  );
}
