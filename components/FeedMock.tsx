'use client';

import { useLanguage } from '@/lib/i18n';

// Illustrative camera-feed visual for the hero (not a photo of a real installation).
export default function FeedMock() {
  const { t } = useLanguage();

  return (
    <figure className="feed" aria-label="Illustration of a CCTV camera view with person detection">
      <svg viewBox="0 0 640 400" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0d2a24" /><stop offset="1" stopColor="#0a1f1b" />
          </linearGradient>
          <pattern id="scan" width="4" height="4" patternUnits="userSpaceOnUse">
            <rect width="4" height="1" fill="#000" opacity="0.18" />
          </pattern>
        </defs>
        <rect width="640" height="400" fill="url(#sky)" />
        {/* compound wall and gate */}
        <rect x="0" y="230" width="640" height="170" fill="#0b1c18" />
        <rect x="0" y="205" width="260" height="60" fill="#133a31" />
        <rect x="380" y="205" width="260" height="60" fill="#133a31" />
        <rect x="260" y="150" width="120" height="115" fill="#0f2f27" stroke="#1d5a4b" strokeWidth="3" />
        <path d="M280 150v115M300 150v115M320 150v115M340 150v115M360 150v115" stroke="#1d5a4b" strokeWidth="2" />
        {/* house behind */}
        <rect x="70" y="95" width="150" height="112" fill="#0e271f" />
        <rect x="95" y="120" width="26" height="30" fill="#1f6b58" opacity=".7" />
        <rect x="150" y="120" width="26" height="30" fill="#1f6b58" opacity=".35" />
        <rect x="430" y="110" width="140" height="97" fill="#0e271f" />
        <rect x="455" y="132" width="26" height="28" fill="#1f6b58" opacity=".5" />
        {/* ground */}
        <path d="M0 400 L230 265 H410 L640 400Z" fill="#0d2a23" />
        <path d="M300 400 L312 265 H328 L340 400Z" fill="#15443a" opacity=".6" />
        {/* person */}
        <g fill="#9fe7cf" opacity=".92">
          <circle cx="470" cy="268" r="10" />
          <path d="M458 282h24l6 52h-9l-3 40h-8l-2-34-2 34h-8l-3-40h-9z" />
        </g>
        <rect width="640" height="400" fill="url(#scan)" />
      </svg>
      <div className="det" aria-hidden="true"><span>{t.feedMock.personDet}</span></div>
      <div className="feed-top">
        <span className="rec"><i /> {t.feedMock.rec}</span>
        <span>{t.feedMock.camName}</span>
      </div>
      <div className="feed-bot">
        <span>{t.feedMock.nightVision}</span>
        <span>{t.feedMock.livePhone}</span>
      </div>
    </figure>
  );
}

