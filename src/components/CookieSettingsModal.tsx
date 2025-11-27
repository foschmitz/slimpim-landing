import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { CookieCategory } from '../hooks/useCookieConsent';

interface CookieSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (categories: CookieCategory[]) => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  currentConsent: CookieCategory[] | null;
  allCategories: CookieCategory[];
}

const CookieSettingsModal: React.FC<CookieSettingsModalProps> = ({
  isOpen,
  onClose,
  onSave,
  onAcceptAll,
  onRejectAll,
  currentConsent,
  allCategories
}) => {
  const { t } = useTranslation('cookies');
  const [selected, setSelected] = useState<CookieCategory[]>([]);

  useEffect(() => {
    if (currentConsent) {
      setSelected(currentConsent);
    }
  }, [currentConsent]);

  const handleToggle = (category: CookieCategory) => {
    if (category === 'necessary') return; // Can't toggle necessary

    setSelected(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSave = () => {
    onSave(selected.filter(c => c !== 'necessary'));
    onClose();
  };

  const handleAcceptAll = () => {
    onAcceptAll();
    onClose();
  };

  const handleRejectAll = () => {
    onRejectAll();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-modal-title"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-modal-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 id="cookie-modal-title" className="text-xl font-semibold text-gray-900">
            {t('modal.title')}
          </h2>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
            aria-label={t('modal.close')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            {t('modal.description')}
          </p>

          <div className="space-y-4">
            {allCategories.map(category => (
              <div
                key={category}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <input
                    type="checkbox"
                    id={`category-${category}`}
                    checked={selected.includes(category)}
                    onChange={() => handleToggle(category)}
                    disabled={category === 'necessary'}
                    className="w-5 h-5 rounded border-gray-300 text-accent focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    aria-describedby={`desc-${category}`}
                  />
                  <label
                    htmlFor={`category-${category}`}
                    className="font-medium text-gray-900 cursor-pointer"
                  >
                    {t(`categories.${category}.name`)}
                  </label>
                </div>
                <p id={`desc-${category}`} className="text-sm text-gray-600 ml-8">
                  {t(`categories.${category}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t border-gray-200 justify-end flex-wrap">
          <button
            onClick={handleSave}
            className="px-6 py-2.5 text-sm font-medium bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            {t('modal.save')}
          </button>
          <button
            onClick={handleRejectAll}
            className="px-6 py-2.5 text-sm font-medium bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            {t('modal.rejectAll')}
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-6 py-2.5 text-sm font-medium bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            {t('modal.acceptAll')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieSettingsModal;
