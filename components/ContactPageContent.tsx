'use client';

import CtaRow from '@/components/CtaRow';
import MessageComposer from '@/components/MessageComposer';
import Icon from '@/components/Icon';
import { site } from '@/lib/site';
import { useLanguage } from '@/lib/i18n';

export default function ContactPageContent() {
  const { t, isAm } = useLanguage();

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1>{t.contact.title}</h1>
          <p className="lead">{t.contact.lead}</p>
          <a
            href={`tel:${site.phoneTel}`}
            className="big-phone"
            style={{
              display: 'block',
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#ffa465',
              textDecoration: 'none',
              margin: '0 0 16px',
            }}
          >
            {site.phoneDisplay}
          </a>
          <CtaRow location="contact_hero" telegram />
        </div>
      </section>
      <section className="section">
        <div className="wrap two-col">
          <div>
            <div className="sec-head">
              <h2>{t.sections.visitUs}</h2>
            </div>
            <ul className="contact-lines">
              <li>
                <Icon name="pin" size={22} />
                <span>
                  {t.site.address}
                  <br />
                  <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                    <b>{t.actions.openInMaps}</b>
                  </a>
                </span>
              </li>
              <li>
                <Icon name="phone" size={22} />
                <span>
                  <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>{' '}
                  {isAm ? '(ጥሪ እና ዋትስአፕ)' : '(calls and WhatsApp)'}
                </span>
              </li>
            </ul>
          </div>
          <div>
            <div className="sec-head">
              <h2>{t.sections.preferToType}</h2>
              <p>{t.sections.preferToTypeSub}</p>
            </div>
            <MessageComposer />
          </div>
        </div>
      </section>
    </>
  );
}
