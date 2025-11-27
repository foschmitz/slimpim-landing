import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const UeberUns: React.FC = () => {
  const { t } = useTranslation('about');

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
          {/* Mission */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('mission.title')}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('mission.content1')}
            </p>
          </section>

          {/* Team */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('team.title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('team.content1')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t('team.content2')}
            </p>
          </section>

          {/* Expertise */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('expertise.title')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-primary/5 rounded-lg p-6">
                <div className="text-3xl mb-3">💼</div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('expertise.retail.title')}</h3>
                <p className="text-sm text-gray-600">
                  {t('expertise.retail.description')}
                </p>
              </div>
              <div className="bg-primary/5 rounded-lg p-6">
                <div className="text-3xl mb-3">🏗️</div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('expertise.realEstate.title')}</h3>
                <p className="text-sm text-gray-600">
                  {t('expertise.realEstate.description')}
                </p>
              </div>
              <div className="bg-primary/5 rounded-lg p-6">
                <div className="text-3xl mb-3">⚙️</div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('expertise.architecture.title')}</h3>
                <p className="text-sm text-gray-600">
                  {t('expertise.architecture.description')}
                </p>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('values.title')}</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-primary mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>{t('values.simplicity.title')}</strong> {t('values.simplicity.description')}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-primary mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>{t('values.transparency.title')}</strong> {t('values.transparency.description')}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-primary mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>{t('values.customerFocus.title')}</strong> {t('values.customerFocus.description')}
                </span>
              </li>
            </ul>
          </section>

          {/* Location */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('location.title')}</h2>
            <div className="flex items-start gap-3 text-gray-700">
              <svg
                className="w-6 h-6 text-primary mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="font-semibold mb-1">{t('location.region')}</p>
                <p className="text-sm">
                  {t('location.badges')}
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
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
              {t('title')}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UeberUns;
