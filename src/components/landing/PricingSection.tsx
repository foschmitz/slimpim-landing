import React from 'react';
import { useTranslation } from 'react-i18next';

const PricingSection: React.FC = () => {
  const { t } = useTranslation(['pricing']);

  return (
    <section className="section bg-gradient-to-b from-white to-gray-50" id="pricing">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold mb-4">
            {t('pricing:badge', 'Pricing')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('pricing:title', 'Competitive Pricing')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {t(
              'pricing:subtitle',
              'We believe great product management tools should be affordable for everyone. Our pricing will be transparent and fair.'
            )}
          </p>
        </div>

        {/* Pricing Promise Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t('pricing:promise1Title', 'Fair & Transparent')}
            </h3>
            <p className="text-gray-600">
              {t('pricing:promise1Desc', 'No hidden fees, no surprises. Simple, predictable pricing.')}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-4 border-accent">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t('pricing:promise2Title', 'Best Value')}
            </h3>
            <p className="text-gray-600">
              {t('pricing:promise2Desc', 'Premium features at a fraction of the cost of enterprise PIM systems.')}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {t('pricing:promise3Title', 'Flexible Plans')}
            </h3>
            <p className="text-gray-600">
              {t('pricing:promise3Desc', 'From startups to enterprises, we have a plan that fits your needs.')}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-primary-hover rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            {t('pricing:ctaTitle', 'Ready to try SlimPIM?')}
          </h3>
          <p className="text-xl mb-8 opacity-90">
            {t(
              'pricing:ctaSubtitle',
              "Join our beta program and experience the power of modern PIM"
            )}
          </p>
          <a
            href="https://app.slimpim.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-accent-hover transition-colors shadow-xl inline-block"
          >
            {t('pricing:ctaButton', '🚀 Try Beta Now')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
