'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, ShieldCheck, ArrowRight, Building2, Truck } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function NationwideCoverageStrip() {
  const { isAm } = useLanguage();

  const cities = [
    {
      name: isAm ? 'አዲስ አበባ' : 'Addis Ababa',
      sub: isAm ? 'ዋና መስሪያ ቤትና ማዕከላዊ ቡድን' : 'Headquarters & Central Hub',
      highlight: true,
    },
    {
      name: isAm ? 'ባህር ዳር' : 'Bahir Dar',
      sub: isAm ? 'ሪዞርቶች፣ ሆቴሎችና ንግድ ቤቶች' : 'Resorts, Hospitality & Commerce',
      highlight: false,
    },
    {
      name: isAm ? 'ሀዋሳ' : 'Hawassa',
      sub: isAm ? 'ኢንዱስትሪ ፓርክ፣ ፋብሪካዎችና ቪላዎች' : 'Industrial Park & Manufacturing',
      highlight: false,
    },
    {
      name: isAm ? 'አዳማ (ናዝሬት)' : 'Adama (Nazret)',
      sub: isAm ? 'ሎጅስቲክስ፣ ሞሎችና መጋዘኖች' : 'Logistics Hub & Commercial Malls',
      highlight: false,
    },
    {
      name: isAm ? 'ደብረ ዘይት (ቢሾፍቱ)' : 'Debre Zeit (Bishoftu)',
      sub: isAm ? 'ሪዞርቶች፣ እርሻዎችና አውቶማቲክ በር' : 'Resorts, Farms & Smart Gates',
      highlight: false,
    },
    {
      name: isAm ? 'ጅማ' : 'Jimma',
      sub: isAm ? 'የቡና ማቀነባበሪያና መጋዘኖች' : 'Coffee Processing & Agro-Warehouses',
      highlight: false,
    },
    {
      name: isAm ? 'መቐለ' : 'Mekelle',
      sub: isAm ? 'የጅምላ ማከፋፈያና ቅርንጫፍ ቢሮዎች' : 'Wholesale Distribution & Branch Offices',
      highlight: false,
    },
  ];

  return (
    <section className="nationwide-section" aria-label="Nationwide service coverage across Ethiopia">
      <div className="wrap">
        <div className="nationwide-banner">
          <div className="nationwide-header">
            <div>
              <span className="nationwide-badge">
                <Truck size={15} />{' '}
                {isAm ? 'አገር አቀፍ የገጠማ አገልግሎት' : 'Nationwide Engineering Coverage'}
              </span>
              <h2>
                {isAm
                  ? 'በመላው ኢትዮጵያ እና በዋና ዋና የክልል ከተሞች እንሰራለን'
                  : 'Security Engineering Across All Regions in Ethiopia'}
              </h2>
              <p>
                {isAm
                  ? 'ከአዲስ አበባ ባሻገር በባህር ዳር፣ ሀዋሳ፣ አዳማ፣ ደብረ ዘይት፣ ጅማ፣ መቐለ እና በሁሉም የክልል ከተሞችና የኢንዱስትሪ ፓርኮች የሲሲቲቪ እና የተሟላ የደህንነት ስራዎችን በሙያ እናከናውናለን።'
                  : 'We deploy engineering teams across all regional states in Ethiopia — from industrial parks and commercial logistics centers to agricultural warehouses and luxury lakeside resorts.'}
              </p>
            </div>
            <div className="nationwide-cta">
              <Link href="/installations" className="btn btn-sm btn-solid" style={{ background: 'var(--green)', color: '#fff' }}>
                {isAm ? 'የተከናወኑ ስራዎችን ይመልከቱ' : 'View Regional Projects'} <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="nationwide-grid">
            {cities.map((city, idx) => (
              <div key={idx} className={`city-card ${city.highlight ? 'hq' : ''}`}>
                <div className="city-pin">
                  <MapPin size={16} />
                </div>
                <div>
                  <strong className="city-name">{city.name}</strong>
                  <span className="city-sub">{city.sub}</span>
                </div>
              </div>
            ))}
            <div className="city-card all-regions">
              <div className="city-pin">
                <Building2 size={16} />
              </div>
              <div>
                <strong className="city-name">{isAm ? 'ሁሉም ክልሎችና ከተሞች' : 'All Regional States'}</strong>
                <span className="city-sub">{isAm ? 'አገር አቀፍ ተደራሽነት' : 'Turnkey Deployment'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
