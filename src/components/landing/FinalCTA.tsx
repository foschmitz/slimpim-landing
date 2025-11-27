import React from 'react';
import { useTranslation } from 'react-i18next';

interface FinalCTAProps {
  onNotifyClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onNotifyClick }) => {
  const { t } = useTranslation(['common']);

  return (
    <section className="section bg-gradient-to-br from-primary to-primary-hover text-white">
      <div className="max-w-4xl mx-auto text-center py-16">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {t('finalCta.title', 'Don\'t Miss Out on SlimPIM.ai')}
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-12 text-gray-200">
          {t(
            'finalCta.subtitle',
            'Join the waiting list and be the first to experience the future of product management'
          )}
        </p>

        {/* CTA Button */}
        <button
          onClick={onNotifyClick}
          className="bg-accent text-white px-12 py-6 rounded-lg font-bold text-xl shadow-2xl hover:bg-accent-hover transition-all hover:scale-105 mb-8"
        >
          {t('finalCta.cta', '🔔 Notify Me When Available')}
        </button>

        {/* Trust Reinforcement */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-gray-200 mb-8">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>{t('finalCta.benefit1', 'Early Access')}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>{t('finalCta.benefit2', 'Special Launch Pricing')}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>{t('finalCta.benefit3', 'Exclusive Updates')}</span>
          </div>
        </div>

        {/* Urgency */}
        <div className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-semibold">
          {t('finalCta.urgency', '⏰ Limited Early Access Spots Available')}
        </div>

        {/* Promise */}
        <div className="mt-12">
          <p className="text-gray-200 text-lg">
            {t(
              'finalCta.promise',
              'No spam, we promise. Just updates about our launch and exclusive early access.'
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
