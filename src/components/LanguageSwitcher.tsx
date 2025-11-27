import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="btn-ghost flex items-center gap-2"
      aria-label="Switch language"
    >
      {i18n.language === 'en' ? (
        <>
          <span className="text-lg">🇩🇪</span>
          <span className="hidden sm:inline">Deutsch</span>
        </>
      ) : (
        <>
          <span className="text-lg">🇬🇧</span>
          <span className="hidden sm:inline">English</span>
        </>
      )}
    </button>
  );
};

export default LanguageSwitcher;
