'use client';

import Image from 'next/image';
import CtaRow from '@/components/CtaRow';
import ContactLink from '@/components/ContactLink';
import { installCategories } from '@/lib/content';
import { installations } from '@/lib/installations';
import { HelpBlock } from '@/components/Sections';
import { useLanguage } from '@/lib/i18n';

export default function InstallationsPageContent() {
  const { t, isAm } = useLanguage();

  const heroMessage = isAm
    ? 'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ የሰራችኋቸውን ስራዎች አየሁ፤ ተመሳሳይ ስራ ማሰራት እፈልጋለሁ።'
    : 'Hello Ethio Smart Security, I saw your installations. I want something similar.';

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1>{isAm ? 'የተከናወኑ እውነተኛ የገጠማ ስራዎች' : 'Our CCTV installation projects'}</h1>
          <p className="lead">
            {isAm
              ? 'ካሜራ ብቻ አንሸጥም፤ እራሳችን በአዲስ አበባ ዙሪያ ጥራት ባለው ሙያ እንገጥማለን።'
              : "We don't only sell cameras. We install them, across Addis Ababa."}
          </p>
          <CtaRow
            location="installations_hero"
            message={heroMessage}
            waLabel={t.actions.askSimilarWork}
          />
        </div>
      </section>

      {installCategories.map((c) => {
        const cTrans = t.installCategories[c.key] || c;
        const items = installations.filter((i) => i.category === c.key);
        if (installations.length > 0 && items.length === 0) return null;
        return (
          <section className="section" key={c.key} id={c.key}>
            <div className="wrap">
              <div className="sec-head">
                <h2>{cTrans.title}</h2>
                <p>{cTrans.text}</p>
              </div>
              {items.length > 0 ? (
                <div className="inst-grid">
                  {items.map((i) => (
                    <figure className="inst" key={i.image}>
                      <Image
                        src={i.image}
                        alt={i.alt}
                        width={i.width || 1200}
                        height={i.height || 900}
                        sizes="(max-width:720px) 100vw, 33vw"
                      />
                      <div>
                        <h3>{i.title}</h3>
                        <p>{i.location}{i.detail ? ` · ${i.detail}` : ''}</p>
                      </div>
                    </figure>
                  ))}
                </div>
              ) : (
                <div className="note">
                  <p>
                    {isAm
                      ? `ስለ ${cTrans.title} የሰራናቸውን ስራዎች ማየት ይፈልጋሉ? መልዕክት ይላኩልን፤ ተመሳሳይ ፎቶዎችንና አጫጭር ቪዲዮዎችን እንልክልዎታለን።`
                      : `Want to see our work for ${c.title.toLowerCase()}? Message us and we will send photos and short videos of similar installations.`}
                  </p>
                  <div>
                    <ContactLink
                      kind="whatsapp"
                      location={`installations_${c.key}`}
                      message={
                        isAm
                          ? `ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ እባክዎ ስለ ${cTrans.title} የተገጠሙ ስራዎችን ምሳሌ ላኩልኝ።`
                          : `Hello Ethio Smart Security, please send me examples of your ${c.title.toLowerCase()} CCTV installations.`
                      }
                      label={t.actions.askExamples}
                    />
                  </div>
                </div>
              )}
            </div>
          </section>
        );
      })}

      <section className="section alt">
        <div className="wrap"><HelpBlock location="installations_help" /></div>
      </section>
    </>
  );
}
