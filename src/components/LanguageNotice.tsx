import React from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageNoticeProps {
  documentType: string; // e.g., "Terms & Conditions", "Privacy Policy"
}

/**
 * Language Notice Component
 * Displays a notice for German-only legal documents when user is in English mode
 */
const LanguageNotice: React.FC<LanguageNoticeProps> = ({ documentType }) => {
  const { i18n } = useTranslation();

  // Only show notice if current language is English
  if (i18n.language !== 'en') {
    return null;
  }

  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
      <div className="flex items-start gap-3">
        <svg
          className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
        <div>
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            🇩🇪 Language Notice / Sprachhinweis
          </h3>
          <p className="text-blue-800 mb-3">
            <strong>English:</strong> This {documentType} is currently available in German only.
            As a German company (SlimPIM.ai, operated by Frank Schmitz, Germany), our legal
            documents are provided in German to ensure legal accuracy and compliance with German
            law. For questions, please contact:{' '}
            <a href="mailto:info@slimpim.ai" className="underline font-semibold">
              info@slimpim.ai
            </a>
          </p>
          <p className="text-blue-800 text-sm">
            <strong>Deutsch:</strong> Dieses Dokument ist auf Deutsch verfügbar. Als deutsches
            Unternehmen stellen wir unsere rechtlichen Dokumente in deutscher Sprache bereit, um
            rechtliche Genauigkeit und Einhaltung des deutschen Rechts zu gewährleisten.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LanguageNotice;
