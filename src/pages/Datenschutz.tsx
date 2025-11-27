import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageNotice from '../components/LanguageNotice';

const Datenschutz: React.FC = () => {
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
        <LanguageNotice documentType="Privacy Policy" />

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {t('privacy.title', 'Datenschutzerklärung')}
        </h1>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Introduction */}
          <section>
            <p className="text-gray-700">
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten
              Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen
              (DSGVO, TKG 2003). In dieser Datenschutzerklärung informieren wir Sie über die
              wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
            </p>
          </section>

          {/* Verantwortlicher */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Verantwortlicher für die Datenverarbeitung
            </h2>
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">Frank Schmitz</p>
              <p>Osenauer Str. 14</p>
              <p>51519 Odenthal</p>
              <p>Deutschland</p>
              <p className="mt-4">
                <span className="font-semibold">E-Mail:</span>{' '}
                <a href="mailto:info@slimpim.ai" className="text-primary hover:underline">
                  info@slimpim.ai
                </a>
              </p>
              <p>
                <span className="font-semibold">Telefon:</span>{' '}
                <a href="tel:+4922022704628" className="text-primary hover:underline">
                  +49 2202 2704628
                </a>
              </p>
            </div>
          </section>

          {/* Ihre Rechte */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Ihre Rechte gemäß DSGVO
            </h2>
            <p className="text-gray-700 mb-4">Sie haben folgende Rechte:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                <strong>Recht auf Auskunft:</strong> Sie haben das Recht, Auskunft über Ihre von
                uns verarbeiteten personenbezogenen Daten zu verlangen (Art. 15 DSGVO)
              </li>
              <li>
                <strong>Recht auf Berichtigung:</strong> Sie haben das Recht, die Berichtigung
                unrichtiger oder Vervollständigung unvollständiger Daten zu verlangen (Art. 16
                DSGVO)
              </li>
              <li>
                <strong>Recht auf Löschung:</strong> Sie haben das Recht, die Löschung Ihrer
                personenbezogenen Daten zu verlangen (Art. 17 DSGVO)
              </li>
              <li>
                <strong>Recht auf Einschränkung:</strong> Sie haben das Recht, die Einschränkung
                der Verarbeitung Ihrer Daten zu verlangen (Art. 18 DSGVO)
              </li>
              <li>
                <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Ihre Daten
                in einem strukturierten, gängigen Format zu erhalten (Art. 20 DSGVO)
              </li>
              <li>
                <strong>Widerspruchsrecht:</strong> Sie haben das Recht, der Verarbeitung Ihrer
                Daten zu widersprechen (Art. 21 DSGVO)
              </li>
              <li>
                <strong>Recht auf Widerruf:</strong> Sie können Ihre erteilte Einwilligung
                jederzeit widerrufen (Art. 7 Abs. 3 DSGVO)
              </li>
              <li>
                <strong>Beschwerderecht:</strong> Sie haben das Recht, sich bei einer
                Aufsichtsbehörde zu beschweren (Art. 77 DSGVO)
              </li>
            </ul>
          </section>

          {/* Welche Daten werden erfasst */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Welche Daten werden erfasst?
            </h2>

            <h3 className="text-lg font-semibold text-gray-700 mb-2 mt-4">
              3.1 Zugriffsdaten und Hosting
            </h3>
            <p className="text-gray-700 mb-4">
              Sie können unsere Website grundsätzlich besuchen, ohne Angaben zu Ihrer Person zu
              machen. Bei jedem Zugriff auf unsere Website werden automatisch folgende
              Informationen erfasst:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse)
            </p>
            <p className="text-gray-700">
              <strong>Speicherdauer:</strong> Diese Daten werden nach 7 Tagen automatisch gelöscht.
            </p>

            <h3 className="text-lg font-semibold text-gray-700 mb-2 mt-6">
              3.2 Newsletter-Anmeldung
            </h3>
            <p className="text-gray-700 mb-4">
              Wenn Sie sich für unseren Newsletter anmelden, verwenden wir die von Ihnen
              angegebenen Daten ausschließlich für diesen Zweck. Wir erfassen:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
              <li>E-Mail-Adresse</li>
              <li>Zeitpunkt der Anmeldung</li>
              <li>IP-Adresse bei der Anmeldung (zur Nachweisbarkeit)</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Double-Opt-In-Verfahren:</strong> Die Anmeldung erfolgt über ein
              Double-Opt-In-Verfahren. Sie erhalten eine E-Mail, in der Sie Ihre Anmeldung
              bestätigen müssen.
            </p>
            <p className="text-gray-700">
              <strong>Widerruf:</strong> Sie können den Newsletter jederzeit abbestellen. In jeder
              Newsletter-E-Mail befindet sich ein Abmeldelink. Ihre E-Mail-Adresse wird dann aus
              dem Verteiler gelöscht.
            </p>

            <h3 className="text-lg font-semibold text-gray-700 mb-2 mt-6">
              3.3 Kontaktformular
            </h3>
            <p className="text-gray-700 mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
              dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) und
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
            </p>
            <p className="text-gray-700">
              <strong>Speicherdauer:</strong> Diese Daten werden gelöscht, sobald sie für die
              Erreichung des Zwecks nicht mehr erforderlich sind oder Sie die Löschung beantragen.
            </p>
          </section>

          {/* Cookies und Tracking */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Cookies und Tracking-Technologien
            </h2>

            <h3 className="text-lg font-semibold text-gray-700 mb-2 mt-4">
              4.1 Was sind Cookies?
            </h3>
            <p className="text-gray-700 mb-4">
              Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr
              Browser speichert. Sie dienen dazu, unser Angebot nutzerfreundlicher zu machen.
            </p>

            <h3 className="text-lg font-semibold text-gray-700 mb-2 mt-4">
              4.2 Welche Cookies verwenden wir?
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>Technisch notwendige Cookies:</strong> Diese Cookies sind erforderlich, um
              die Funktionalität der Website zu gewährleisten (z.B. Spracheinstellungen).
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
            </p>

            <h3 className="text-lg font-semibold text-gray-700 mb-2 mt-4">
              4.3 Cookies deaktivieren
            </h3>
            <p className="text-gray-700">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies
              informiert werden und Cookies nur im Einzelfall erlauben. Bitte beachten Sie, dass
              bei Deaktivierung von Cookies die Funktionalität unserer Website eingeschränkt sein
              kann.
            </p>
          </section>

          {/* Datenweitergabe */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Weitergabe von Daten an Dritte
            </h2>
            <p className="text-gray-700 mb-4">
              Eine Übermittlung Ihrer persönlichen Daten an Dritte findet nicht statt, außer:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Sie haben ausdrücklich Ihre Einwilligung dazu erteilt (Art. 6 Abs. 1 lit. a DSGVO)</li>
              <li>
                Die Weitergabe ist zur Erfüllung eines Vertrages erforderlich (Art. 6 Abs. 1 lit.
                b DSGVO)
              </li>
              <li>Es besteht eine gesetzliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO)</li>
              <li>
                Die Weitergabe ist zur Wahrung berechtigter Interessen erforderlich und es besteht
                kein Grund zur Annahme, dass Sie ein überwiegendes schutzwürdiges Interesse haben
                (Art. 6 Abs. 1 lit. f DSGVO)
              </li>
            </ul>
          </section>

          {/* Hosting */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Hosting</h2>
            <p className="text-gray-700 mb-4">
              Unsere Website wird bei einem externen Dienstleister gehostet. Die personenbezogenen
              Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters
              gespeichert.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Serverstandort:</strong> Europäische Union (EU)
            </p>
            <p className="text-gray-700">
              Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
              potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
              einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots
              (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          {/* Datensicherheit */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Datensicherheit</h2>
            <p className="text-gray-700 mb-4">
              Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure
              Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von
              Ihrem Browser unterstützt wird.
            </p>
            <p className="text-gray-700">
              Wir bedienen uns geeigneter technischer und organisatorischer Sicherheitsmaßnahmen,
              um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder
              vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu
              schützen.
            </p>
          </section>

          {/* Aktualität */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              8. Aktualität und Änderung der Datenschutzerklärung
            </h2>
            <p className="text-gray-700 mb-4">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2025.
            </p>
            <p className="text-gray-700">
              Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter
              gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese
              Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann
              jederzeit auf dieser Website abgerufen werden.
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

export default Datenschutz;
