import React from 'react';
import { Link } from 'react-router-dom';
import LanguageNotice from '../components/LanguageNotice';

const AGB: React.FC = () => {
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
        <LanguageNotice documentType="Terms & Conditions" />

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Präambel */}
          <section>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Stand:</strong> Januar 2025
            </p>
            <p className="text-gray-700 leading-relaxed">
              Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Nutzung der
              Software-as-a-Service (SaaS) Plattform SlimPIM.ai zur Verwaltung von
              Produktinformationen. Anbieter ist Frank Schmitz, Osenauer Str. 14, 51519 Odenthal
              (nachfolgend "Anbieter" oder "wir").
            </p>
          </section>

          {/* § 1 Geltungsbereich */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              § 1 Geltungsbereich und Vertragsgegenstand
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Diese AGB gelten für alle Verträge über die Nutzung der
                cloudbasierten Software SlimPIM.ai zwischen dem Anbieter und Unternehmen
                (nachfolgend "Kunde"). Verbraucherverträge sind ausgeschlossen.
              </p>
              <p>
                <strong>(2)</strong> Gegenstand des Vertrages ist die zeitlich befristete
                Bereitstellung der Software SlimPIM.ai als Software-as-a-Service (SaaS) über das
                Internet sowie die Speicherung und Verarbeitung der vom Kunden eingegebenen Daten
                auf den Servern des Anbieters oder eines beauftragten Rechenzentrums.
              </p>
              <p>
                <strong>(3)</strong> Abweichende, entgegenstehende oder ergänzende AGB des Kunden
                werden nicht Vertragsbestandteil, es sei denn, der Anbieter hat ihrer Geltung
                ausdrücklich schriftlich zugestimmt.
              </p>
            </div>
          </section>

          {/* § 2 Vertragsschluss und Registrierung */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              § 2 Vertragsschluss und Registrierung
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Der Vertrag kommt durch die Registrierung des Kunden auf der
                Plattform slimpim.ai und die anschließende Bestätigung durch den Anbieter zustande.
              </p>
              <p>
                <strong>(2)</strong> Der Kunde versichert, dass alle bei der Registrierung
                angegebenen Daten vollständig und wahrheitsgemäß sind. Bei Änderungen ist der Kunde
                verpflichtet, seine Daten unverzüglich zu aktualisieren.
              </p>
              <p>
                <strong>(3)</strong> Der Kunde darf sich nur einmal registrieren. Die Übertragung
                des Accounts auf Dritte ist ohne vorherige Zustimmung des Anbieters untersagt.
              </p>
              <p>
                <strong>(4)</strong> Der Kunde ist verpflichtet, seine Zugangsdaten vertraulich zu
                behandeln und vor dem Zugriff Dritter zu schützen. Bei Verdacht auf unbefugte
                Nutzung ist der Anbieter unverzüglich zu informieren.
              </p>
            </div>
          </section>

          {/* § 3 Leistungsumfang und Verfügbarkeit */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              § 3 Leistungsumfang und Verfügbarkeit
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Der Anbieter stellt die Software SlimPIM.ai über das Internet
                zur Nutzung bereit. Der Funktionsumfang richtet sich nach dem gewählten Tarifmodell
                (Free, Starter, Professional, Business, Enterprise).
              </p>
              <p>
                <strong>(2)</strong> Die Verfügbarkeit der Software beträgt im Jahresmittel:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Free-Tarif: Best-Effort, keine SLA-Garantie</li>
                <li>Starter-Tarif: Best-Effort, keine SLA-Garantie</li>
                <li>Professional-Tarif: 99,5% (monatlich gemessen)</li>
                <li>Business-Tarif: 99,9% (monatlich gemessen)</li>
                <li>Enterprise-Tarif: 99,95% (monatlich gemessen)</li>
              </ul>
              <p>
                <strong>(3)</strong> Ausgenommen von der Verfügbarkeitsgarantie sind geplante
                Wartungsarbeiten (angekündigt mind. 48h vorher), höhere Gewalt sowie
                Beeinträchtigungen durch Dritte (z.B. DDoS-Angriffe).
              </p>
              <p>
                <strong>(4)</strong> Der Anbieter behält sich vor, die Software weiterzuentwickeln
                und zu verbessern. Wesentliche Änderungen werden dem Kunden rechtzeitig mitgeteilt.
              </p>
              <p>
                <strong>(5)</strong> Der Zugang zur Software erfolgt über Standard-Webbrowser.
                Spezielle technische Anforderungen werden auf der Website dokumentiert.
              </p>
            </div>
          </section>

          {/* § 4 Tarife und Leistungsgrenzen */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              § 4 Tarife und Leistungsgrenzen
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Die Software wird in verschiedenen Tarifen mit
                unterschiedlichen Leistungsgrenzen angeboten:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <strong>Free:</strong> 50 Artikel, 1 Benutzer, 500 MB Speicher, Basis-Features
                </li>
                <li>
                  <strong>Starter:</strong> 500 Artikel, 3 Benutzer, 5 GB Speicher, CSV-Import,
                  erweiterte Filter
                </li>
                <li>
                  <strong>Professional:</strong> 2.000 Artikel, 10 Benutzer, 25 GB Speicher, API,
                  Bulk-Operations, Varianten, 24h E-Mail-Support
                </li>
                <li>
                  <strong>Business:</strong> 10.000 Artikel, unbegrenzte Benutzer, 100 GB Speicher,
                  White-Labeling, Webhooks, 12h Priority-Support
                </li>
                <li>
                  <strong>Enterprise:</strong> Unbegrenzte Artikel, Benutzer und Speicher, AI-Suche,
                  SSO, dedizierter Support, 4h SLA
                </li>
              </ul>
              <p>
                <strong>(2)</strong> Der Kunde kann seinen Tarif jederzeit upgraden. Ein Downgrade
                ist zum Ende der laufenden Abrechnungsperiode möglich.
              </p>
              <p>
                <strong>(3)</strong> Bei Überschreitung der Tarifgrenzen behält sich der Anbieter
                vor, den Zugriff einzuschränken oder den Kunden aufzufordern, ein Upgrade
                durchzuführen.
              </p>
            </div>
          </section>

          {/* § 5 Vergütung und Zahlung */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              § 5 Vergütung und Zahlung
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Die Vergütung richtet sich nach der aktuellen Preisliste auf
                slimpim.ai. Der Free-Tarif ist kostenlos.
              </p>
              <p>
                <strong>(2)</strong> Kostenpflichtige Tarife werden monatlich oder jährlich im
                Voraus abgerechnet. Bei jährlicher Zahlung wird ein Rabatt gewährt.
              </p>
              <p>
                <strong>(3)</strong> Die Zahlung erfolgt per Kreditkarte, SEPA-Lastschrift oder
                anderen vom Anbieter akzeptierten Zahlungsmitteln über den Zahlungsdienstleister
                Stripe.
              </p>
              <p>
                <strong>(4)</strong> Bei Zahlungsverzug ist der Anbieter berechtigt, den Zugang zur
                Software zu sperren, bis die ausstehenden Beträge beglichen sind. Der Kunde bleibt
                zur Zahlung verpflichtet.
              </p>
              <p>
                <strong>(5)</strong> Alle Preise verstehen sich zuzüglich der gesetzlichen
                Umsatzsteuer.
              </p>
              <p>
                <strong>(6)</strong> Preisanpassungen sind mit einer Ankündigungsfrist von 6 Wochen
                möglich. Bei Preiserhöhungen hat der Kunde ein Sonderkündigungsrecht.
              </p>
            </div>
          </section>

          {/* § 6 Vertragslaufzeit und Kündigung */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              § 6 Vertragslaufzeit und Kündigung
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Der Free-Tarif kann jederzeit ohne Frist gekündigt werden.
              </p>
              <p>
                <strong>(2)</strong> Bei monatlicher Abrechnung verlängert sich der Vertrag
                automatisch um jeweils einen Monat, wenn er nicht bis spätestens 7 Tage vor
                Ablauf der Laufzeit gekündigt wird.
              </p>
              <p>
                <strong>(3)</strong> Bei jährlicher Abrechnung verlängert sich der Vertrag
                automatisch um ein weiteres Jahr, wenn er nicht bis spätestens 30 Tage vor Ablauf
                der Laufzeit gekündigt wird.
              </p>
              <p>
                <strong>(4)</strong> Die Kündigung muss in Textform (z.B. E-Mail an
                info@slimpim.ai) erfolgen.
              </p>
              <p>
                <strong>(5)</strong> Das Recht zur außerordentlichen Kündigung aus wichtigem Grund
                bleibt unberührt. Ein wichtiger Grund liegt insbesondere vor bei:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Zahlungsverzug von mehr als 30 Tagen</li>
                <li>Schwerwiegenden Verstößen gegen diese AGB</li>
                <li>Insolvenz einer Vertragspartei</li>
              </ul>
              <p>
                <strong>(6)</strong> Nach Vertragsende werden die Kundendaten für 30 Tage zur
                Abholung bereitgestellt, danach unwiderruflich gelöscht.
              </p>
            </div>
          </section>

          {/* § 7 Pflichten des Kunden */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              § 7 Pflichten des Kunden
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Der Kunde verpflichtet sich, die Software ausschließlich im
                Rahmen der geltenden Gesetze zu nutzen.
              </p>
              <p>
                <strong>(2)</strong> Untersagt sind insbesondere:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Die Speicherung rechtswidriger Inhalte</li>
                <li>Reverse Engineering, Dekompilierung oder Disassemblierung der Software</li>
                <li>Umgehung technischer Schutzmaßnahmen</li>
                <li>Überlastung der Infrastruktur durch übermäßige Anfragen</li>
                <li>Weitergabe von Zugangsdaten an Dritte</li>
              </ul>
              <p>
                <strong>(3)</strong> Der Kunde ist für die Sicherung seiner Daten selbst
                verantwortlich. Der Anbieter empfiehlt regelmäßige Exporte wichtiger Daten.
              </p>
              <p>
                <strong>(4)</strong> Bei Verstoß gegen diese Pflichten ist der Anbieter berechtigt,
                den Account zu sperren oder fristlos zu kündigen.
              </p>
            </div>
          </section>

          {/* § 8 Datenschutz und Datensicherheit */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              § 8 Datenschutz und Datensicherheit
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Der Anbieter verarbeitet personenbezogene Daten im Einklang mit
                der DSGVO. Details regelt die{' '}
                <Link to="/datenschutz" className="text-primary hover:underline">
                  Datenschutzerklärung
                </Link>
                .
              </p>
              <p>
                <strong>(2)</strong> Soweit der Kunde personenbezogene Daten in die Software
                eingibt, wird ein separater{' '}
                <Link to="/avv" className="text-primary hover:underline">
                  Auftragsverarbeitungsvertrag (AVV)
                </Link>{' '}
                geschlossen.
              </p>
              <p>
                <strong>(3)</strong> Die Daten werden ausschließlich in Rechenzentren innerhalb der
                Europäischen Union gespeichert.
              </p>
              <p>
                <strong>(4)</strong> Der Anbieter erstellt regelmäßig Backups. Eine Garantie für die
                Wiederherstellung verlorener Daten wird jedoch nicht übernommen.
              </p>
            </div>
          </section>

          {/* § 9 Haftung */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">§ 9 Haftung</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Der Anbieter haftet unbeschränkt für Vorsatz und grobe
                Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der
                Gesundheit.
              </p>
              <p>
                <strong>(2)</strong> Bei leichter Fahrlässigkeit haftet der Anbieter nur bei
                Verletzung wesentlicher Vertragspflichten (Kardinalpflichten). Die Haftung ist in
                diesem Fall auf den vertragstypischen, vorhersehbaren Schaden begrenzt.
              </p>
              <p>
                <strong>(3)</strong> Die Haftung für mittelbare Schäden, Folgeschäden,
                entgangenen Gewinn und Datenverlust ist ausgeschlossen, soweit nicht Vorsatz oder
                grobe Fahrlässigkeit vorliegt.
              </p>
              <p>
                <strong>(4)</strong> Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.
              </p>
              <p>
                <strong>(5)</strong> Der Kunde haftet für alle durch seine Nutzung der Software
                verursachten Schäden und stellt den Anbieter von Ansprüchen Dritter frei.
              </p>
            </div>
          </section>

          {/* § 10 Gewährleistung */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">§ 10 Gewährleistung</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Der Anbieter gewährleistet, dass die Software im Wesentlichen
                die in der Leistungsbeschreibung genannten Funktionen aufweist.
              </p>
              <p>
                <strong>(2)</strong> Mängel werden vom Anbieter innerhalb angemessener Frist
                behoben. Bei kostenlosen Tarifen besteht kein Anspruch auf Mängelbeseitigung.
              </p>
              <p>
                <strong>(3)</strong> Der Kunde ist verpflichtet, Mängel unverzüglich zu melden.
              </p>
              <p>
                <strong>(4)</strong> Bei nicht behebbaren Mängeln hat der Kunde das Recht zur
                Minderung oder Kündigung.
              </p>
            </div>
          </section>

          {/* § 11 Geheimhaltung */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">§ 11 Geheimhaltung</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Beide Parteien verpflichten sich, alle im Rahmen der
                Vertragsbeziehung bekannt gewordenen vertraulichen Informationen geheim zu halten.
              </p>
              <p>
                <strong>(2)</strong> Diese Verpflichtung besteht auch nach Beendigung des Vertrages
                fort.
              </p>
            </div>
          </section>

          {/* § 12 Schlussbestimmungen */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              § 12 Schlussbestimmungen
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Es gilt das Recht der Bundesrepublik Deutschland unter
                Ausschluss des UN-Kaufrechts.
              </p>
              <p>
                <strong>(2)</strong> Gerichtsstand für alle Streitigkeiten ist, soweit gesetzlich
                zulässig, der Sitz des Anbieters.
              </p>
              <p>
                <strong>(3)</strong> Sollten einzelne Bestimmungen dieser AGB unwirksam sein,
                bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
              </p>
              <p>
                <strong>(4)</strong> Änderungen dieser AGB werden dem Kunden per E-Mail mitgeteilt
                und gelten als genehmigt, wenn der Kunde nicht innerhalb von 6 Wochen widerspricht.
              </p>
            </div>
          </section>

          {/* Kontakt */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kontakt</h2>
            <p className="text-gray-700 mb-2">
              Bei Fragen zu diesen AGB kontaktieren Sie uns bitte:
            </p>
            <p className="text-gray-700">
              <strong>E-Mail:</strong>{' '}
              <a href="mailto:info@slimpim.ai" className="text-primary hover:underline">
                info@slimpim.ai
              </a>
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AGB;
