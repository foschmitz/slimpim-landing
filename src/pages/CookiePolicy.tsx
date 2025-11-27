import React from 'react';
import { Link } from 'react-router-dom';
import LanguageNotice from '../components/LanguageNotice';

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link to="/" className="text-primary hover:text-primary-dark font-bold text-xl">
            ← Zurück zur Startseite
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <LanguageNotice documentType="Cookie Policy" />

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie-Richtlinie</h1>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Einleitung */}
          <section>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Stand:</strong> Januar 2025
            </p>
            <p className="text-gray-700 leading-relaxed">
              Diese Cookie-Richtlinie erklärt, was Cookies sind, wie wir sie auf unserer Website
              slimpim.ai verwenden und welche Wahlmöglichkeiten Sie haben. Durch die Nutzung
              unserer Website stimmen Sie dem Einsatz von Cookies gemäß dieser Richtlinie zu.
            </p>
          </section>

          {/* Was sind Cookies */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Was sind Cookies?</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                Cookies sind kleine Textdateien, die auf Ihrem Gerät (Computer, Tablet, Smartphone)
                gespeichert werden, wenn Sie eine Website besuchen. Sie helfen uns, die Website
                optimal zu gestalten und Ihre Benutzererfahrung zu verbessern.
              </p>
              <p>
                Cookies können Informationen über Ihre Nutzung der Website speichern, z.B.:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Ihre Spracheinstellungen</li>
                <li>Ihre Anmeldeinformationen (damit Sie angemeldet bleiben)</li>
                <li>Statistiken darüber, wie Sie die Website nutzen</li>
                <li>Ihre Cookie-Einstellungen</li>
              </ul>
            </div>
          </section>

          {/* Arten von Cookies */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Welche Arten von Cookies verwenden wir?
            </h2>
            <div className="space-y-6">
              {/* Notwendige Cookies */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ERFORDERLICH
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    1. Notwendige Cookies (Necessary)
                  </h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Diese Cookies sind für die Grundfunktionen der Website unerlässlich und können
                  nicht deaktiviert werden.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 text-left font-semibold">Cookie</th>
                        <th className="px-4 py-2 text-left font-semibold">Zweck</th>
                        <th className="px-4 py-2 text-left font-semibold">Laufzeit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2 font-mono text-xs">cookie_consent</td>
                        <td className="px-4 py-2">Speichert Ihre Cookie-Einstellungen</td>
                        <td className="px-4 py-2">12 Monate</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-mono text-xs">session_id</td>
                        <td className="px-4 py-2">Identifiziert Ihre Sitzung</td>
                        <td className="px-4 py-2">Session</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                  Interesse)
                </p>
              </div>

              {/* Funktionale Cookies */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    OPTIONAL
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    2. Funktionale Cookies (Functional)
                  </h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 text-left font-semibold">Cookie</th>
                        <th className="px-4 py-2 text-left font-semibold">Zweck</th>
                        <th className="px-4 py-2 text-left font-semibold">Laufzeit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2 font-mono text-xs">language</td>
                        <td className="px-4 py-2">Speichert Ihre Sprachpräferenz (DE/EN)</td>
                        <td className="px-4 py-2">12 Monate</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-mono text-xs">theme</td>
                        <td className="px-4 py-2">Speichert Theme-Einstellungen</td>
                        <td className="px-4 py-2">12 Monate</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    OPTIONAL
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    3. Analyse-Cookies (Analytics)
                  </h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website
                  interagieren.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 text-left font-semibold">Dienst</th>
                        <th className="px-4 py-2 text-left font-semibold">Anbieter</th>
                        <th className="px-4 py-2 text-left font-semibold">Zweck</th>
                        <th className="px-4 py-2 text-left font-semibold">Laufzeit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2">Google Analytics</td>
                        <td className="px-4 py-2">Google LLC</td>
                        <td className="px-4 py-2">
                          Website-Nutzungsstatistiken (anonymisiert)
                        </td>
                        <td className="px-4 py-2">24 Monate</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Google Analytics:</strong> Wir nutzen Google Analytics mit IP-Anonymisierung.
                  Die erfassten Daten werden anonymisiert und können nicht auf Sie zurückgeführt
                  werden.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    OPTIONAL
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    4. Marketing-Cookies (Marketing)
                  </h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Diese Cookies werden verwendet, um Werbung relevanter zu gestalten.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Derzeit verwenden wir keine Marketing-Cookies. Diese Kategorie ist für zukünftige
                  Verwendung reserviert.
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                </p>
              </div>

              {/* Externe Inhalte */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    OPTIONAL
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    5. Externe Inhalte (External)
                  </h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Cookies für eingebettete Inhalte von Drittanbietern (z.B. YouTube-Videos).
                </p>
                <p className="text-sm text-gray-600 italic">
                  Derzeit betten wir keine externen Inhalte ein, die Cookies setzen. Diese Kategorie
                  ist für zukünftige Verwendung reserviert.
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                </p>
              </div>
            </div>
          </section>

          {/* Ihre Rechte */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Ihre Rechte und Wahlmöglichkeiten
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h3 className="font-semibold mb-2">✅ Einwilligung verwalten</h3>
                <p className="text-sm">
                  Sie können Ihre Cookie-Einstellungen jederzeit ändern, indem Sie auf das
                  Cookie-Banner klicken oder die Cookie-Einstellungen in der Fußzeile aufrufen.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h3 className="font-semibold mb-2">🔧 Browser-Einstellungen</h3>
                <p className="text-sm mb-2">
                  Sie können Cookies auch direkt in Ihrem Browser verwalten:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                  <li>
                    <strong>Chrome:</strong> Einstellungen → Datenschutz und Sicherheit → Cookies
                  </li>
                  <li>
                    <strong>Firefox:</strong> Einstellungen → Datenschutz & Sicherheit →
                    Cookies und Website-Daten
                  </li>
                  <li>
                    <strong>Safari:</strong> Einstellungen → Datenschutz → Cookies blockieren
                  </li>
                  <li>
                    <strong>Edge:</strong> Einstellungen → Cookies und Websiteberechtigungen
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h3 className="font-semibold mb-2">⚠️ Wichtig</h3>
                <p className="text-sm">
                  Wenn Sie Cookies blockieren, können einige Funktionen der Website nicht
                  ordnungsgemäß funktionieren. Notwendige Cookies sind für den Betrieb der Website
                  erforderlich und können nicht deaktiviert werden.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h3 className="font-semibold mb-2">🔍 Tracking-Schutz</h3>
                <p className="text-sm mb-2">
                  Zusätzliche Maßnahmen zum Schutz Ihrer Privatsphäre:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                  <li>
                    <strong>Do Not Track (DNT):</strong> Wir respektieren DNT-Signale und deaktivieren
                    Analytics automatisch
                  </li>
                  <li>
                    <strong>IP-Anonymisierung:</strong> Google Analytics wird mit anonymisierten
                    IP-Adressen betrieben
                  </li>
                  <li>
                    <strong>Datensparsamkeit:</strong> Wir erfassen nur die minimal notwendigen
                    Daten
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Speicherdauer */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Speicherdauer</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                Die Speicherdauer von Cookies variiert je nach Typ:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <strong>Session-Cookies:</strong> Werden gelöscht, sobald Sie Ihren Browser
                  schließen
                </li>
                <li>
                  <strong>Persistente Cookies:</strong> Bleiben für einen bestimmten Zeitraum
                  gespeichert (siehe Tabellen oben)
                </li>
                <li>
                  <strong>Cookie-Consent:</strong> 12 Monate (erneuert sich bei jeder Interaktion)
                </li>
              </ul>
              <p>
                Sie können alle Cookies jederzeit über Ihre Browser-Einstellungen löschen.
              </p>
            </div>
          </section>

          {/* Datenübermittlung */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Datenübermittlung in Drittländer
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Google Analytics:</strong> Google LLC ist in den USA ansässig. Die
                Datenübermittlung erfolgt auf Grundlage von EU-Standardvertragsklauseln gemäß Art. 46
                DSGVO. Google ist zudem im EU-US Data Privacy Framework zertifiziert.
              </p>
              <p>
                Weitere Informationen zu Google Analytics und Datenschutz finden Sie unter:{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://policies.google.com/privacy
                </a>
              </p>
            </div>
          </section>

          {/* Änderungen */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Änderungen dieser Cookie-Richtlinie
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren, um Änderungen
                unserer Praktiken oder aus anderen betrieblichen, rechtlichen oder regulatorischen
                Gründen zu berücksichtigen.
              </p>
              <p>
                Wesentliche Änderungen werden wir Ihnen durch eine Benachrichtigung auf unserer
                Website mitteilen. Bitte überprüfen Sie diese Seite regelmäßig, um über unsere
                Cookie-Praktiken informiert zu bleiben.
              </p>
            </div>
          </section>

          {/* Kontakt */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kontakt</h2>
            <p className="text-gray-700 mb-2">
              Bei Fragen zu dieser Cookie-Richtlinie kontaktieren Sie uns bitte:
            </p>
            <p className="text-gray-700">
              <strong>E-Mail:</strong>{' '}
              <a href="mailto:info@slimpim.ai" className="text-primary hover:underline">
                info@slimpim.ai
              </a>
            </p>
            <p className="text-gray-700 mt-4">
              Weitere Informationen zum Datenschutz finden Sie in unserer{' '}
              <Link to="/datenschutz" className="text-primary hover:underline">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </section>
        </div>

        {/* Back to home */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Zurück zur Startseite
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
            <Link to="/agb" className="text-gray-400 hover:text-white text-sm">
              AGB
            </Link>
            <Link to="/avv" className="text-gray-400 hover:text-white text-sm">
              AVV
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CookiePolicy;
