'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations, Language } from './translations';
import { Globe } from 'lucide-react';

interface LanguageContextType {
  lang: Language;
  isAm: boolean;
  t: typeof translations.en;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  isAm: false,
  t: translations.en,
  setLanguage: () => {},
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    // Check URL search param first, e.g. ?lang=am
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lang');
      if (urlLang === 'am' || urlLang === 'en') {
        setLang(urlLang);
        return;
      }

      // Check localStorage
      const saved = localStorage.getItem('ess_lang') as Language;
      if (saved === 'am' || saved === 'en') {
        setLang(saved);
        return;
      }
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('ess_lang', newLang);
        document.cookie = `ess_lang=${newLang};path=/;max-age=31536000;SameSite=Lax`;
        document.documentElement.lang = newLang;
        if (newLang === 'am') {
          document.body.classList.add('lang-am');
        } else {
          document.body.classList.remove('lang-am');
        }
      } catch (err) {
        // ignore storage errors
      }
    }
  };

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'am' : 'en');
  };

  const value: LanguageContextType = {
    lang,
    isAm: lang === 'am',
    t: translations[lang] || translations.en,
    setLanguage: setLang,
    toggleLanguage,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function LanguageSwitch({ className = '', variant = 'pill' }: { className?: string; variant?: 'pill' | 'compact' | 'footer' }) {
  const { lang, setLanguage, toggleLanguage, isAm } = useLanguage();

  if (variant === 'compact') {
    return (
      <button
        type="button"
        className={`lang-switch lang-switch-compact ${className}`}
        onClick={toggleLanguage}
        aria-label={isAm ? 'Switch to English' : 'Switch to Amharic (ወደ አማርኛ ይቀይሩ)'}
        title={isAm ? 'Switch to English' : 'ወደ አማርኛ ይቀይሩ'}
      >
        <Globe size={18} aria-hidden />
        <span className="lang-tag">{isAm ? 'EN' : 'አማ'}</span>
      </button>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`lang-switch-footer ${className}`}>
        <span className="lang-label">
          <Globe size={16} aria-hidden /> Language:
        </span>
        <div className="lang-toggle-group">
          <button
            type="button"
            className={`lang-btn ${!isAm ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
            aria-pressed={!isAm}
          >
            English
          </button>
          <span className="lang-sep">|</span>
          <button
            type="button"
            className={`lang-btn ${isAm ? 'active' : ''}`}
            onClick={() => setLanguage('am')}
            aria-pressed={isAm}
          >
            አማርኛ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`lang-switch lang-switch-pill ${className}`}>
      <button
        type="button"
        className={`lang-btn ${!isAm ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-label="View in English"
        aria-pressed={!isAm}
      >
        EN
      </button>
      <button
        type="button"
        className={`lang-btn ${isAm ? 'active' : ''}`}
        onClick={() => setLanguage('am')}
        aria-label="በአማርኛ ይመልከቱ"
        aria-pressed={isAm}
      >
        አማርኛ
      </button>
    </div>
  );
}
