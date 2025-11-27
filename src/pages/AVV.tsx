import React from 'react';
import { Link } from 'react-router-dom';
import LanguageNotice from '../components/LanguageNotice';

const AVV: React.FC = () => {
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
        <LanguageNotice documentType="Data Processing Agreement" />

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Auftragsverarbeitungsvertrag (AVV)
        </h1>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Präambel */}
          <section>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Stand:</strong> Januar 2025
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dieser Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO regelt die Verarbeitung
              personenbezogener Daten durch SlimPIM.ai im Auftrag des Kunden.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Hinweis:</strong> Dieser AVV wird automatisch Bestandteil des
              Nutzungsvertrags, sobald der Kunde personenbezogene Daten in SlimPIM.ai verarbeitet.
            </p>
          </section>

          {/* § 1 Vertragsgegenstand */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              § 1 Gegenstand und Dauer
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Gegenstand dieses Vertrags ist die Verarbeitung
                personenbezogener Daten durch den Auftragsverarbeiter (Anbieter) im Auftrag des
                Verantwortlichen (Kunde) im Rahmen der Nutzung der SaaS-Plattform SlimPIM.ai.
              </p>
              <p>
                <strong>(2)</strong> Die Laufzeit dieses AVV entspricht der Laufzeit des
                Hauptvertrags (AGB).
              </p>
              <p>
                <strong>(3)</strong> Art und Zweck der Verarbeitung:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Bereitstellung einer cloudbasierten PIM-Software</li>
                <li>Speicherung und Verwaltung von Produktinformationen</li>
                <li>Nutzerverwaltung und Zugriffskontrolle</li>
                <li>Technischer Support</li>
              </ul>
            </div>
          </section>

          {/* § 2 Art der Daten und Betroffene */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              § 2 Art der Daten und Betroffene Personen
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Kategorien betroffener Personen:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Mitarbeiter des Kunden (Nutzer der Software)</li>
                <li>Ggf. Endkunden (wenn deren Daten in Produktinformationen enthalten sind)</li>
                <li>Kontaktpersonen von Geschäftspartnern</li>
              </ul>
              <p>
                <strong>(2)</strong> Kategorien personenbezogener Daten:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Stammdaten (Name, E-Mail-Adresse, Unternehmen)</li>
                <li>Nutzungsdaten (Login-Zeiten, IP-Adressen, Aktivitätsprotokolle)</li>
                <li>
                  Inhaltsdaten (vom Kunden eingegebene Daten wie Produktbeschreibungen, die ggf.
                  personenbezogene Daten enthalten können)
                </li>
              </ul>
              <p>
                <strong>(3)</strong> Besondere Kategorien personenbezogener Daten (Art. 9 DSGVO)
                werden nicht verarbeitet.
              </p>
            </div>
          </section>

          {/* § 3 Weisungen */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              § 3 Weisungen des Verantwortlichen
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Der Auftragsverarbeiter verarbeitet personenbezogene Daten nur
                auf dokumentierte Weisung des Verantwortlichen.
              </p>
              <p>
                <strong>(2)</strong> Weisungen erfolgen initial durch diese Vereinbarung und können
                darüber hinaus schriftlich oder in Textform (E-Mail) erteilt werden.
              </p>
              <p>
                <strong>(3)</strong> Ist der Auftragsverarbeiter der Ansicht, dass eine Weisung
                gegen Datenschutzrecht verstößt, teilt er dies dem Verantwortlichen unverzüglich
                mit.
              </p>
            </div>
          </section>

          {/* § 4 Technische und Organisatorische Maßnahmen */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              § 4 Technische und Organisatorische Maßnahmen (TOM)
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Der Auftragsverarbeiter trifft folgende technische und
                organisatorische Maßnahmen:
              </p>

              <div className="ml-4 space-y-4">
                <div>
                  <p className="font-semibold mb-2">a) Vertraulichkeit (Art. 32 Abs. 1 lit. b DSGVO)</p>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                    <li>SSL/TLS-Verschlüsselung für Datenübertragung (HTTPS)</li>
                    <li>Verschlüsselung der Daten at rest (AES-256)</li>
                    <li>Passwort-geschützte Zugänge mit bcrypt-Hashing (12 Rounds)</li>
                    <li>Zwei-Faktor-Authentifizierung (optional verfügbar)</li>
                    <li>Rollenbasierte Zugriffskontrolle (RBAC)</li>
                    <li>Regelmäßige Sicherheitsaudits</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">b) Integrität (Art. 32 Abs. 1 lit. b DSGVO)</p>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                    <li>Firewall und DDoS-Schutz</li>
                    <li>Intrusion Detection Systeme</li>
                    <li>Regelmäßige Sicherheitsupdates</li>
                    <li>Logging und Monitoring aller Systemzugriffe</li>
                    <li>Malware-Scanner</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">c) Verfügbarkeit (Art. 32 Abs. 1 lit. b DSGVO)</p>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                    <li>Redundante Serverinfrastruktur</li>
                    <li>Tägliche automatische Backups (30 Tage Aufbewahrung)</li>
                    <li>Notfallwiederherstellungsplan</li>
                    <li>99,5%-99,95% Verfügbarkeitsgarantie (je nach Tarif)</li>
                    <li>24/7 Systemüberwachung</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">
                    d) Belastbarkeit (Art. 32 Abs. 1 lit. b DSGVO)
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                    <li>Skalierbare Cloud-Infrastruktur</li>
                    <li>Load Balancing</li>
                    <li>Automatische Failover-Mechanismen</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">
                    e) Verfahren zur regelmäßigen Überprüfung (Art. 32 Abs. 1 lit. d DSGVO)
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                    <li>Jährliche Penetrationstests</li>
                    <li>Regelmäßige Überprüfung der TOM</li>
                    <li>Mitarbeiterschulungen zu Datenschutz und IT-Sicherheit</li>
                  </ul>
                </div>
              </div>

              <p>
                <strong>(2)</strong> Der Auftragsverarbeiter dokumentiert die Maßnahmen und
                aktualisiert sie regelmäßig entsprechend dem Stand der Technik.
              </p>
            </div>
          </section>

          {/* § 5 Unterauftragsverarbeiter */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              § 5 Unterauftragsverarbeiter (Subprozessoren)
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Der Verantwortliche stimmt der Beauftragung folgender
                Unterauftragsverarbeiter zu:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm my-4">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Unternehmen</th>
                      <th className="px-4 py-3 text-left font-semibold">Leistung</th>
                      <th className="px-4 py-3 text-left font-semibold">Standort</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3">Google Cloud Platform</td>
                      <td className="px-4 py-3">Cloud Hosting</td>
                      <td className="px-4 py-3">EU (Frankfurt, Belgien)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Stripe Inc.</td>
                      <td className="px-4 py-3">Zahlungsabwicklung</td>
                      <td className="px-4 py-3">USA (mit EU-Standardvertragsklauseln)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                <strong>(2)</strong> Bei Beauftragung weiterer Unterauftragsverarbeiter informiert
                der Auftragsverarbeiter den Verantwortlichen mindestens 30 Tage im Voraus per
                E-Mail. Der Verantwortliche kann innerhalb von 14 Tagen widersprechen.
              </p>
              <p>
                <strong>(3)</strong> Der Auftragsverarbeiter stellt sicher, dass
                Unterauftragsverarbeiter denselben Datenschutzverpflichtungen unterliegen wie er
                selbst.
              </p>
            </div>
          </section>

          {/* § 6 Rechte Betroffener */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              § 6 Unterstützung bei Betroffenenrechten
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Der Auftragsverarbeiter unterstützt den Verantwortlichen bei
                der Erfüllung von Betroffenenrechten (Auskunft, Berichtigung, Löschung,
                Einschränkung, Datenübertragbarkeit, Widerspruch).
              </p>
              <p>
                <strong>(2)</strong> Anfragen betroffener Personen leitet der Auftragsverarbeiter
                unverzüglich an den Verantwortlichen weiter.
              </p>
              <p>
                <strong>(3)</strong> Technische Funktionen zur Umsetzung der Betroffenenrechte:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Export-Funktion für Datenauskunft (CSV, JSON)</li>
                <li>Bearbeitungs- und Löschfunktionen in der Software</li>
                <li>API-Schnittstellen für automatisierte Anfragen</li>
              </ul>
            </div>
          </section>

          {/* § 7 Datenschutzverletzungen */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              § 7 Meldung von Datenschutzverletzungen
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Der Auftragsverarbeiter meldet Datenschutzverletzungen
                unverzüglich, spätestens jedoch innerhalb von 24 Stunden nach Kenntnisnahme, an den
                Verantwortlichen.
              </p>
              <p>
                <strong>(2)</strong> Die Meldung enthält mindestens:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Art der Verletzung</li>
                <li>Betroffene Datenkategorien und Anzahl der Betroffenen</li>
                <li>Wahrscheinliche Folgen</li>
                <li>Ergriffene und geplante Maßnahmen</li>
              </ul>
              <p>
                <strong>(3)</strong> Der Auftragsverarbeiter dokumentiert alle
                Datenschutzverletzungen.
              </p>
            </div>
          </section>

          {/* § 8 Löschung und Rückgabe */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              § 8 Löschung und Rückgabe der Daten
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Nach Beendigung des Vertrags löscht der Auftragsverarbeiter
                alle personenbezogenen Daten oder gibt sie an den Verantwortlichen zurück.
              </p>
              <p>
                <strong>(2)</strong> Rückgabe erfolgt in maschinenlesbarem Format (CSV, JSON) über
                die Export-Funktion.
              </p>
              <p>
                <strong>(3)</strong> Löschfrist: 30 Tage nach Vertragsende, sofern keine
                gesetzlichen Aufbewahrungsfristen entgegenstehen.
              </p>
              <p>
                <strong>(4)</strong> Der Auftragsverarbeiter bestätigt die vollständige Löschung
                schriftlich.
              </p>
            </div>
          </section>

          {/* § 9 Kontroll- und Prüfrechte */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              § 9 Kontroll- und Prüfrechte
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Der Verantwortliche hat das Recht, die Einhaltung der
                Datenschutzvorgaben durch den Auftragsverarbeiter zu überprüfen.
              </p>
              <p>
                <strong>(2)</strong> Der Auftragsverarbeiter stellt auf Anfrage folgende
                Nachweise bereit:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Dokumentation der technischen und organisatorischen Maßnahmen</li>
                <li>Ergebnisse von Sicherheitsaudits und Penetrationstests</li>
                <li>Zertifizierungen (z.B. ISO 27001, falls vorhanden)</li>
              </ul>
              <p>
                <strong>(3)</strong> Audits vor Ort sind nach vorheriger Absprache und gegen
                Kostenerstattung möglich.
              </p>
            </div>
          </section>

          {/* § 10 Haftung */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">§ 10 Haftung</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Die Haftung richtet sich nach Art. 82 DSGVO und den
                Bestimmungen der AGB.
              </p>
              <p>
                <strong>(2)</strong> Beide Parteien haften gesamtschuldnerisch für Schäden aus
                Datenschutzverstößen gegenüber betroffenen Personen.
              </p>
            </div>
          </section>

          {/* § 11 Datenübermittlung Drittland */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              § 11 Datenübermittlung in Drittländer
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Eine Übermittlung personenbezogener Daten in Drittländer
                (außerhalb EU/EWR) erfolgt grundsätzlich nicht.
              </p>
              <p>
                <strong>(2)</strong> Ausnahme: Zahlungsabwicklung über Stripe Inc. (USA). Hier
                gelten EU-Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO.
              </p>
              <p>
                <strong>(3)</strong> Der Auftragsverarbeiter informiert den Verantwortlichen, wenn
                weitere Drittlandübermittlungen erforderlich werden.
              </p>
            </div>
          </section>

          {/* § 12 Änderungen */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">§ 12 Änderungen</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>(1)</strong> Änderungen dieses AVV bedürfen der Schriftform oder einer
                qualifizierten elektronischen Signatur.
              </p>
              <p>
                <strong>(2)</strong> Anpassungen aufgrund geänderter Rechtslage oder behördlicher
                Anordnungen sind ohne Zustimmung möglich. Der Verantwortliche wird darüber
                informiert.
              </p>
            </div>
          </section>

          {/* Kontakt */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Kontakt Datenschutz
            </h2>
            <p className="text-gray-700 mb-2">
              Bei Fragen zum Datenschutz und diesem AVV kontaktieren Sie uns:
            </p>
            <p className="text-gray-700">
              <strong>E-Mail:</strong>{' '}
              <a href="mailto:info@slimpim.ai" className="text-primary hover:underline">
                info@slimpim.ai
              </a>
            </p>
            <p className="text-gray-700 mt-2 text-sm italic">
              Hinweis: Ein formaler Datenschutzbeauftragter ist nach § 38 BDSG aufgrund der
              Unternehmensgröße derzeit nicht bestellt. Datenschutzanfragen richten Sie bitte an
              die oben genannte E-Mail-Adresse.
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

export default AVV;
