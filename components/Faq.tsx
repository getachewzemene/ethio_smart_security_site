'use client';

import { resolvedFaqs } from '@/lib/content';
import { useLanguage } from '@/lib/i18n';

export { resolvedFaqs };


export default function Faq({ items }: { items?: { q: string; a: string }[] }) {
  const { t } = useLanguage();
  const list = items || t.faqs;

  return (
    <div className="faq">
      {list.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

