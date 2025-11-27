import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Kontakt: React.FC = () => {
  const { t } = useTranslation('contact');

  const faqItems = t('faq.items', { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link to="/" className="text-primary hover:text-primary-dark font-bold text-xl">
            ← {t('backToHome')}
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{t('title')}</h1>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Intro */}
          <section>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t('intro')}
            </p>
          </section>

          {/* Contact Methods */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {t('contactMethods.title')}
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t('contactMethods.email.title')}</h3>
                  <a
                    href={`mailto:${t('contactMethods.email.address')}`}
                    className="text-primary hover:underline text-lg"
                  >
                    {t('contactMethods.email.address')}
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    {t('contactMethods.email.responseTime')}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t('contactMethods.location.title')}</h3>
                  <p className="text-gray-700">{t('contactMethods.location.region')}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {t('contactMethods.location.badges')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA - Same as About Page */}
          <section className="border-t border-gray-200 pt-6">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('contactCta.title')}
              </h3>
              <p className="text-gray-700 mb-6">
                {t('contactCta.description')}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={`mailto:${t('contactCta.email')}`}
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {t('contactCta.email')}
                </a>
              </div>
            </div>
          </section>

          {/* FAQ Teaser */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('faq.title')}
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                {t('faq.moreQuestions')}{' '}
                <a href={`mailto:${t('contactMethods.email.address')}`} className="text-primary hover:underline">
                  {t('contactMethods.email.address')}
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Back to top */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            {t('backToHome')}
          </Link>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm">© 2025 SlimPIM.ai - Made with ❤️ in Germany</p>
          <div className="mt-4 space-x-6">
            <Link to="/impressum" className="text-gray-400 hover:text-white text-sm">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-gray-400 hover:text-white text-sm">
              Datenschutz
            </Link>
            <Link to="/ueber-uns" className="text-gray-400 hover:text-white text-sm">
              Über uns
            </Link>
            <Link to="/kontakt" className="text-gray-400 hover:text-white text-sm">
              {t('title')}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Kontakt;
