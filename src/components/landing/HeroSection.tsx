import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';

const HeroSection: React.FC = () => {
  const { t } = useTranslation(['hero', 'common']);

  return (
    <section className="section bg-gradient-to-b from-white to-primary-light pt-20 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Header */}
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo/slimpim-logo-primary.png"
              alt="SlimPIM"
              className="h-10"
            />
          </div>
          <div className="flex gap-4">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Beta Badge */}
          <div className="inline-block mb-6">
            <div className="bg-accent/10 text-accent px-6 py-2 rounded-full text-sm font-semibold">
              {t('hero:betaBadge', 'Beta Available')}
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            {t('hero:headline')}{' '}
            <span className="text-primary">{t('hero:headlineHighlight')}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            {t('hero:subheadline')}
          </p>

          {/* Primary CTA */}
          <div className="space-y-6 mb-12">
            <a
              href="https://app.slimpim.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-12 py-6 text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all inline-block"
            >
              {t('hero:cta.primary', '🚀 Try Beta Now')}
            </a>

            {/* Trust Line */}
            <p className="text-sm text-gray-500">
              {t('hero:ctaSubtext', 'Join our beta and help shape the future of product management')}
            </p>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">AI-Powered</div>
              <div className="text-sm text-gray-600">
                {t('hero:stats.ai', 'Smart automation')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Simple</div>
              <div className="text-sm text-gray-600">
                {t('hero:stats.simple', 'No complexity')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Affordable</div>
              <div className="text-sm text-gray-600">
                {t('hero:stats.affordable', 'Competitive pricing')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
