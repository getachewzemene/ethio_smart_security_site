'use client';

import React from 'react';
import { Camera, ShieldCheck, Smartphone, Award } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function CorporateStatsBar() {
  const { isAm } = useLanguage();

  const stats = [
    {
      icon: Camera,
      num: '5,000+',
      label: isAm ? 'የተገጠሙ ካሜራዎች' : 'Cameras Deployed',
      desc: isAm ? 'በአዲስ አበባ እና በክልል ከተሞች ለቤቶች፣ ሱቆች፣ ቢሮዎችና ፋብሪካዎች' : 'Installed across Addis Ababa & major regional cities in Ethiopia',
    },
    {
      icon: ShieldCheck,
      num: '100%',
      label: isAm ? 'የተደበቀ የገመድ ስራ ዋስትና' : 'Concealed Conduit Wiring',
      desc: isAm ? 'በPVC ኮንዱይት ቱቦ የተጠበቀ ንጹህ የገመድ ዝርጋታ' : 'Zero messy dangling wires, fully protected in heavy PVC',
    },
    {
      icon: Smartphone,
      num: '24/7',
      label: isAm ? 'የቀጥታ ስልክ ክትትል' : 'Mobile Remote Access',
      desc: isAm ? 'ከየትኛውም ቦታ በስልክ የቀጥታ እይታ እና ክትትል' : 'Live streaming & instant motion alerts on your phone',
    },
    {
      icon: Award,
      num: '1 – 2 Years',
      label: isAm ? 'ህጋዊ የጽሁፍ ዋስትና' : 'Hardware Warranty',
      desc: isAm ? 'ኦርጅናል ብራንዶች ከሙሉ የጽሁፍ ምትክ ዋስትና ጋር' : 'Genuine Hikvision/Dahua with written replacement guarantee',
    },
  ];

  return (
    <section className="stats-bar" aria-label="Key business metrics and guarantees">
      <div className="wrap">
        <div className="stats-grid">
          {stats.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div key={idx} className="stat-card">
                <div className="stat-icon">
                  <IconComp size={20} />
                </div>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
                <div className="stat-desc">{s.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
