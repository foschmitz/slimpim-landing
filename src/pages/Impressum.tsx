import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageNotice from '../components/LanguageNotice';

const Impressum: React.FC = () => {
  const { t } = useTranslation('legal');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link to="/" className="text-primary hover:text-primary-dark font-bold text-xl">
            ← {t('backToHome', 'Zurück zur Startseite')}
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <LanguageNotice documentType="Imprint" />

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {t('impressum.title', 'Impressum')}
        </h1>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          {/* Angaben gemäß § 5 TMG */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('impressum.legalRequirement', 'Angaben gemäß § 5 TMG')}
            </h2>
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">Frank Schmitz</p>
              <p>Osenauer Str. 14</p>
              <p>51519 Odenthal</p>
              <p>Deutschland</p>
            </div>
          </section>

          {/* Kontakt */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('impressum.contact', 'Kontakt')}
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Telefon:</span>{' '}
                <a href="tel:+4922022704628" className="text-primary hover:underline">
                  +49 2202 2704628
                </a>
              </p>
              <p>
                <span className="font-semibold">E-Mail:</span>{' '}
                <a href="mailto:info@slimpim.ai" className="text-primary hover:underline">
                  info@slimpim.ai
                </a>
              </p>
            </div>
          </section>

          {/* Verantwortlich für den Inhalt */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('impressum.responsible', 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV')}
            </h2>
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">Frank Schmitz</p>
              <p>Osenauer Str. 14</p>
              <p>51519 Odenthal</p>
            </div>
          </section>

          {/* EU-Streitschlichtung */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('impressum.disputeResolution', 'EU-Streitschlichtung')}
            </h2>
            <p className="text-gray-700 mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:
            </p>
            <p className="text-gray-700">
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="text-gray-700 mt-4">
              Wir sind nicht bereit und nicht verpflichtet, an einem Streitbeilegungsverfahren vor
              einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          {/* Haftungsausschluss */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {t('impressum.liability', 'Haftungsausschluss')}
            </h2>

            <h3 className="text-lg font-semibold text-gray-700 mb-2 mt-4">
              Haftung für Inhalte
            </h3>
            <p className="text-gray-700 mb-4">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
              Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>

            <h3 className="text-lg font-semibold text-gray-700 mb-2 mt-4">Haftung für Links</h3>
            <p className="text-gray-700 mb-4">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="text-lg font-semibold text-gray-700 mb-2 mt-4">Urheberrecht</h3>
            <p className="text-gray-700">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>

        {/* Back to top */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            {t('backToHome', 'Zurück zur Startseite')}
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Impressum;
