'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShimmerImage } from './Skeleton';
import { Play, MapPin } from 'lucide-react';
import Icon from './Icon';
import ContactLink from './ContactLink';
import CtaRow from './CtaRow';
import { site } from '@/lib/site';
import { demos, featured, installCategories, solutions, useCases } from '@/lib/content';
import { demoMedia, installations, reviews } from '@/lib/installations';
import { useLanguage } from '@/lib/i18n';

export function TrustStrip() {
  const { t } = useLanguage();
  const items = t.trust;

  return (
    <section className="trust" aria-label="Why customers trust us">
      <div className="wrap">
        <ul>{items.map((item) => <li key={item}><Icon name="check" size={20} />{item}</li>)}</ul>
        <p className="social-proof">
          {t.site.socialProof}
        </p>
      </div>
    </section>
  );
}

export function UseCaseGrid() {
  const { t } = useLanguage();

  return (
    <div className="uc-grid">
      {useCases.map((u) => {
        const uTrans = t.useCases[u.slug] || u;
        return (
          <Link key={u.slug} href={`/cctv-for/${u.slug}`} className="uc">
            <span className="ic"><Icon name={u.icon} size={26} /></span>
            <span>
              <h3>{uTrans.title}</h3>
              <p>{uTrans.line}</p>
              <span className="more">{t.actions.seeRightSetup} <Icon name="arrow" size={16} /></span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export function SolutionList() {
  const { t } = useLanguage();

  return (
    <div className="sol-list">
      {solutions.map((s) => {
        const sTrans = t.solutions[s.slug] || s;
        return (
          <article key={s.slug} className="sol">
            <div className="sol-top">
              <span className="ic"><Icon name={s.icon} size={28} /></span>
              <div>
                <h3><Link href={`/solutions/${s.slug}`}>{sTrans.title}</Link></h3>
                <p>{sTrans.short}</p>
              </div>
            </div>
            <div className="sol-actions">
              <ContactLink kind="whatsapp" location={`solution_${s.slug}`} message={sTrans.waMessage} label={sTrans.cta} />
              <Link href={`/solutions/${s.slug}`} className="link-btn">{t.actions.learnMore}</Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function EnterpriseSolutionsGrid() {
  const { t } = useLanguage();
  const enterpriseSlugs = [
    'access-control-time-attendance',
    'smart-intercom-gate-automation',
    'fire-alarm-smoke-detection',
    'server-room-nvr-video-wall',
  ];
  const items = solutions.filter((s) => enterpriseSlugs.includes(s.slug));

  return (
    <div className="wizard-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', margin: '20px 0 0' }}>
      {items.map((s) => {
        const sTrans = t.solutions[s.slug] || s;
        return (
          <article
            key={s.slug}
            className="wizard-card"
            style={{ cursor: 'default', background: '#fff' }}
          >
            <div className="wizard-card-top">
              <div className="wizard-card-icon" style={{ background: '#0b1d45', color: '#fff' }}>
                <Icon name={s.icon} size={20} />
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Enterprise
              </span>
            </div>
            <strong className="wizard-card-title" style={{ fontSize: '1.05rem', marginTop: 4 }}>
              <Link href={`/solutions/${s.slug}`}>{sTrans.title}</Link>
            </strong>
            <p className="wizard-card-desc" style={{ marginBottom: 14 }}>
              {sTrans.short}
            </p>
            <div style={{ marginTop: 'auto', display: 'flex', gap: 10, alignItems: 'center' }}>
              <Link href={`/solutions/${s.slug}`} className="link-btn" style={{ fontSize: '0.9rem', padding: '6px 0' }}>
                {t.actions.learnMore} <Icon name="arrow" size={16} />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function HelpBlock({ location = 'help_block' }: { location?: string }) {
  const { t } = useLanguage();

  return (
    <div className="help">
      <div>
        <h2>{t.sections.helpTitle}</h2>
        <p style={{ marginTop: 10 }}>{t.sections.helpSub}</p>
      </div>
      <div style={{ display: 'grid', gap: 12 }}>
        <ContactLink kind="call" location={location} size="lg" label={`${t.actions.call} ${site.phoneDisplay}`} />
        <ContactLink kind="whatsapp" location={location} size="lg" label={t.actions.whatsappUs} />
        <ContactLink kind="telegram" location={location} size="lg" variant="outline" label={t.actions.telegram} />
      </div>
    </div>
  );
}

export function InstallationsPreview() {
  const { t, isAm } = useLanguage();
  const shown = installations.slice(0, 3);

  return (
    <>
      {shown.length > 0 ? (
        <div className="inst-grid">
          {shown.map((i) => {
            const title = isAm && i.titleAm ? i.titleAm : i.title;
            const location = isAm && i.locationAm ? i.locationAm : i.location;
            const tags = isAm && i.tagsAm ? i.tagsAm : i.tags || [];

            return (
              <article className="inst-card" key={i.image}>
                <div className="inst-card-media">
                  <ShimmerImage
                    src={i.image}
                    alt={i.alt}
                    width={i.width || 1200}
                    height={i.height || 900}
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                  <span className="inst-badge-loc">
                    <MapPin size={13} color="var(--orange)" /> {location.split(',')[0]}
                  </span>
                </div>
                <div className="inst-card-body">
                  <h3 className="inst-card-title">{title}</h3>
                  <div className="inst-card-loc">
                    <MapPin size={13} color="var(--green)" style={{ flex: 'none' }} />
                    <span>{location}</span>
                  </div>
                  {tags.length > 0 && (
                    <div className="inst-card-tags">
                      {tags.slice(0, 3).map((tag, idx) => (
                        <span className="inst-chip" key={idx}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <ul className="cat-list">
          {installCategories.map((c) => {
            const cTrans = t.installCategories[c.key] || c;
            return <li key={c.key}><b>{cTrans.title}</b><span>{cTrans.text}</span></li>;
          })}
        </ul>
      )}
      <p style={{ marginTop: 22 }}>
        <Link href="/installations" className="link-btn">
          {t.actions.viewInstallProjects} <Icon name="arrow" size={18} />
        </Link>
      </p>
    </>
  );
}

export function DemoGrid() {
  const { t } = useLanguage();

  return (
    <>
      <div className="demo-grid">
        {demos.map((d) => {
          const m = demoMedia[d.key];
          const dTrans = t.demos[d.key] || d;
          const inner = (
            <>
              {m?.video ? (
                <video src={m.video} poster={m.poster} muted loop playsInline preload="none" controls aria-label={dTrans.title} />
              ) : m?.poster ? (
                <Image className="poster" src={m.poster} alt="" fill sizes="(max-width:720px) 50vw, 25vw" />
              ) : null}
              {!m?.video && <Play className="play" size={28} aria-hidden />}
              <h3>{dTrans.title}</h3>
              <p>{dTrans.text}</p>
            </>
          );
          const href = m?.link || site.tiktokUrl;
          return m?.video ? (
            <div className="demo" key={d.key}>{inner}</div>
          ) : (
            <a className="demo" key={d.key} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Watch: ${dTrans.title}`}>{inner}</a>
          );
        })}
      </div>
      <div className="demo-links">
        <a className="btn btn-outline btn-ghost btn-md" href={site.tiktokUrl} target="_blank" rel="noopener noreferrer">
          {t.actions.watchOnTikTok}
        </a>
        <a className="btn btn-outline btn-ghost btn-md" href={site.facebookUrl} target="_blank" rel="noopener noreferrer">
          {t.actions.watchOnFacebook}
        </a>
      </div>
    </>
  );
}

export function WhyList() {
  const { t } = useLanguage();
  const iconMap: Record<number, string> = {
    0: 'wrench',
    1: 'phone',
    2: 'eye',
    3: 'shield',
    4: 'pin',
  };

  return (
    <ul className="why-grid">
      {t.whyItems.map((item, idx) => (
        <li key={item.title}>
          <Icon name={iconMap[idx] || 'check'} size={28} />
          <div><h3>{item.title}</h3><p>{item.desc}</p></div>
        </li>
      ))}
    </ul>
  );
}

export function Steps() {
  const { t } = useLanguage();

  return (
    <ol className="steps">
      {t.steps.map((step) => (
        <li key={step.title}>
          <h3>{step.title}</h3>
          <p>{step.desc}</p>
        </li>
      ))}
    </ol>
  );
}

export function Featured() {
  const { t } = useLanguage();

  return (
    <div className="feat-grid">
      {featured.map((f) => {
        const fTrans = t.featured[f.slug as keyof typeof t.featured] || f;
        return (
          <article className="feat" key={f.slug}>
            <Icon name={f.icon} size={34} className="" />
            <h3>{fTrans.title}</h3>
            <ul>
              {fTrans.points.map((p) => (
                <li key={p}><Icon name="check" size={18} />{p}</li>
              ))}
            </ul>
            <ContactLink
              kind="whatsapp"
              location={`featured_${f.slug}`}
              message={fTrans.waMessage}
              label={fTrans.cta}
            />
            <Link href={`/solutions/${f.slug}`} className="link-btn">{t.actions.learnMore}</Link>
          </article>
        );
      })}
    </div>
  );
}

export function Reviews() {
  const { t, isAm } = useLanguage();

  if (reviews.length === 0) {
    const waMessage = isAm
      ? 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ እንደ እኔ ዓይነት የተገጠሙ ስራዎችንና የስራ ምሳሌዎችን ልታሳዩኝ ትችላላችሁ?'
      : 'Hello Ethio Smart Security, can you show me similar installations and customer references?';

    return (
      <div className="note">
        <p>{t.sections.reviewsNote}</p>
        <div className="cta-row">
          <ContactLink kind="whatsapp" location="reviews" message={waMessage} label={t.actions.askExamples} />
          <a className="btn btn-outline btn-md" href={site.facebookUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)' }}>
            {t.actions.seeFacebookPage}
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className="reviews">
      {reviews.map((r) => (
        <figure className="review" key={r.name + r.text.slice(0, 12)}>
          <blockquote>“{r.text}”</blockquote>
          <figcaption><cite>{r.name}, {r.place}</cite></figcaption>
        </figure>
      ))}
    </div>
  );
}

export { CtaRow };
