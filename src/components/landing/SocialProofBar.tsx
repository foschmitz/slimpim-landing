import React from 'react';
import { useTranslation } from 'react-i18next';

const SocialProofBar: React.FC = () => {
  const { t } = useTranslation('social');
  const stats = t('stats', { returnObjects: true }) as {
    rating: string;
    users: string;
    gdpr: string;
    hosting: string;
  };

  return (
    <section className="section bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-gray-600 font-medium">
            {t('heading')}
          </p>
        </div>

        {/* Customer Logos - Placeholder for actual logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 mb-8 opacity-60">
          {['REWE', 'Penny', 'EDEKA', 'Netto', 'ALDI'].map((brand) => (
            <div key={brand} className="text-2xl font-bold text-gray-400">
              {brand}
            </div>
          ))}
          <div className="text-gray-400 font-medium">{t('moreClients')}</div>
        </div>

        {/* Trust Statistics */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-center">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-700 font-semibold">{stats.rating}</span>
          </div>

          <div className="h-6 w-px bg-gray-300"></div>

          <div className="text-gray-700">
            <span className="font-bold">500+</span> {stats.users}
          </div>

          <div className="h-6 w-px bg-gray-300"></div>

          <div className="text-gray-700">
            <span className="font-bold">100%</span> {stats.gdpr}
          </div>

          <div className="h-6 w-px bg-gray-300"></div>

          <div className="flex items-center gap-2 text-gray-700">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{stats.hosting}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
