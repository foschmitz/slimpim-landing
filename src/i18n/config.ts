import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './locales/en';
import deTranslations from './locales/de';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: enTranslations,
      de: deTranslations,
    },
    fallbackLng: 'en', // English as fallback (global e-commerce market)
    supportedLngs: ['en', 'de'],

    // Disable debug to avoid console noise from missing keys
    // Fallback text is provided in all t() calls, so missing keys display correctly
    debug: false,

    // Suppress missing key warnings (fallback text is used instead)
    saveMissing: false,
    missingKeyHandler: false,

    interpolation: {
      escapeValue: false, // React already escapes by default
    },

    // Language detection order
    detection: {
      // 1. Check localStorage first (user preference)
      // 2. Then check browser navigator language
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],

      // Convert browser language codes to our supported languages
      // e.g., 'en-US' -> 'en', 'de-DE' -> 'de'
      convertDetectedLanguage: (lng) => lng?.split('-')[0] || 'en',
    },

    // React specific
    react: {
      useSuspense: false, // Disable suspense for SSG compatibility
    },
  });

export default i18n;
