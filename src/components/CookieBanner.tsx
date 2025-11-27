import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface CookieBannerProps {
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onCustomize: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onAcceptAll, onRejectAll, onCustomize }) => {
  const { t } = useTranslation('cookies');

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-gradient-to-t from-black/95 to-black/90 backdrop-blur-xl text-white shadow-2xl animate-slide-up"
      role="region"
      aria-label={t('banner.title')}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          {/* Text Content */}
          <div className="flex-1 min-w-[300px]">
            <p className="font-semibold text-base mb-1">{t('banner.title')}</p>
            <p className="text-sm opacity-90 leading-relaxed">
              {t('banner.description')}{' '}
              <Link to="/datenschutz" className="underline hover:text-accent transition-colors">
                {t('banner.privacyLink')}
              </Link>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 flex-wrap items-center">
            <button
              onClick={onCustomize}
              className="px-5 py-2.5 text-sm font-medium bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 hover:border-white/30 transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black"
              aria-label={t('banner.customize')}
            >
              {t('banner.customize')}
            </button>
            <button
              onClick={onRejectAll}
              className="px-5 py-2.5 text-sm font-medium bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 hover:border-white/30 transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black"
              aria-label={t('banner.rejectAll')}
            >
              {t('banner.rejectAll')}
            </button>
            <button
              onClick={onAcceptAll}
              className="px-5 py-2.5 text-sm font-medium bg-accent hover:bg-accent-hover rounded-lg shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black"
              aria-label={t('banner.acceptAll')}
            >
              {t('banner.acceptAll')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
