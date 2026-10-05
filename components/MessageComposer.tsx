'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { track } from '@/lib/track';
import { whatsappLink } from '@/lib/site';
import { useLanguage } from '@/lib/i18n';

// Secondary option only: builds a WhatsApp message. No data is stored or sent to a server.
export default function MessageComposer() {
  const { t, isAm } = useLanguage();
  const [place, setPlace] = useState<string>('');
  const [need, setNeed] = useState<string[]>([]);
  const [note, setNote] = useState('');

  const places = t.composerPlaces;
  const needs = t.composerNeeds;

  const toggle = (n: string) => setNeed((c) => (c.includes(n) ? c.filter((x) => x !== n) : [...c, n]));

  const message = isAm
    ? [
        'ሰላም ኢትዮ ስማርት ሴኩሪቲ፣ የሲሲቲቪ ካሜራ ገጠማ እፈልጋለሁ።',
        place && `ቦታው: ${place}።`,
        need.length && `ሁኔታው: ${need.join(', ')}።`,
        note.trim() && note.trim(),
      ].filter(Boolean).join(' ')
    : [
        'Hello Ethio Smart Security, I want CCTV.',
        place && `Place: ${place}.`,
        need.length && `Situation: ${need.join(', ')}.`,
        note.trim() && note.trim(),
      ].filter(Boolean).join(' ');

  return (
    <div className="composer">
      <div>
        <h3>{t.sections.composerPlacePrompt}</h3>
        <div className="chips" role="group" aria-label="Place">
          {places.map((p) => (
            <button
              type="button"
              key={p}
              className="chip"
              aria-pressed={place === p}
              onClick={() => setPlace(place === p ? '' : p)}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3>{t.sections.composerNeedPrompt}</h3>
        <div className="chips" role="group" aria-label="Situation">
          {needs.map((n) => (
            <button
              type="button"
              key={n}
              className="chip"
              aria-pressed={need.includes(n)}
              onClick={() => toggle(n)}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="note">
          <h3>{t.sections.composerNotePrompt}</h3>
        </label>
        <textarea
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder={t.sections.composerPlaceholder}
        />
      </div>
      <a
        className="btn btn-whatsapp btn-solid btn-lg"
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          track('cta_click', {
            cta_type: 'whatsapp',
            cta_location: 'composer',
            place,
            needs: need.join(','),
          })
        }
      >
        <MessageCircle size={22} aria-hidden /> <span>{t.actions.sendWhatsApp}</span>
      </a>
    </div>
  );
}

