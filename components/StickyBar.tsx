'use client';

import ContactLink from './ContactLink';
import { useLanguage } from '@/lib/i18n';

export default function StickyBar() {
  const { t } = useLanguage();

  return (
    <nav className="sticky-bar" aria-label="Contact us">
      <ContactLink kind="call" location="sticky_bar" variant="bar" label={t.actions.call} />
      <ContactLink kind="whatsapp" location="sticky_bar" variant="bar" label={t.actions.whatsapp} />
      <ContactLink kind="telegram" location="sticky_bar" variant="bar" label={t.actions.telegram} />
    </nav>
  );
}

