import { Link } from 'react-router-dom';
import Navbar from '../../../shared/components/Navbar';
import Footer from '../../../shared/components/Footer';

export default function DatenschutzPage() {
  return (
    <div>
      <Navbar />
      <section className="pt-28 pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 text-center animate-fade-in">
            Datenschutzerklärung
          </h1>

          <div className="bg-white p-8 rounded-xl shadow-custom animate-slide-up space-y-8">
            {/* Einleitung */}
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Diese Datenschutzerklärung
                informiert Sie darüber, welche personenbezogenen Daten wir erheben, zu welchen Zwecken und auf
                welcher Rechtsgrundlage dies geschieht.
              </p>
              <p className="text-gray-700 leading-relaxed">Stand: Januar 2025</p>
            </div>

            {/* Verantwortlicher */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                1. Verantwortlicher
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
                Benjamin Flatz<br />
                Eisengasse 25<br />
                6850 Dornbirn, Österreich<br />
                E-Mail:{' '}
                <a href="mailto:info@wedo-software.com" className="text-blue-600 hover:text-blue-700 transition">
                  info@wedo-software.com
                </a>
                <br />
                Telefon: +43 664 4040185
              </p>
            </div>

            {/* Erhebung und Speicherung */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                2. Erhebung und Speicherung personenbezogener Daten
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bei jedem Aufruf unserer Website erfasst unser System automatisiert Daten und Informationen des
                jeweils abrufenden Geräts. Folgende Daten werden dabei erhoben:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 ml-4">
                <li>IP-Adresse des Nutzers</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Aufgerufene Seiten</li>
                <li>Browsertyp und -version</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL (zuvor besuchte Seite)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Diese Daten werden in den Logfiles unseres Systems gespeichert. Eine Speicherung dieser Daten
                zusammen mit anderen personenbezogenen Daten des Nutzers findet nicht statt. Die Rechtsgrundlage
                ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Systemsicherheit).
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                3. Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Unsere Website verwendet derzeit keine eigenen Cookies. Der eingebundene Chatwoot-Chat-Dienst
                (siehe Punkt 4.2) kann technisch notwendige Cookies setzen, um eine laufende Unterhaltung
                zuzuordnen.
              </p>
            </div>

            {/* Externe Dienste */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                4. Einbindung externer Dienste
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                4.1 Content Delivery Networks (CDN)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Diese Website lädt Schriftarten und Skripte teilweise über CDN-Dienste, um eine schnelle
                Ladezeit sicherzustellen. Beim Laden dieser externen Ressourcen wird Ihre IP-Adresse an die
                jeweiligen Anbieter übermittelt. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse an einer schnellen und sicheren Bereitstellung der Website).
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                4.2 Chatwoot Live-Chat
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kontaktaufnahme ist auf dieser Website ausschließlich über den Live-Chat-Dienst Chatwoot
                möglich, den wir selbst unter chatwoot.wedo-software.com betreiben — es gibt kein separates
                Kontaktformular und keinen eigenen Server, der Ihre Anfragen verarbeitet. Beim Laden des
                Chat-Widgets wird Ihre IP-Adresse verarbeitet; bei Nutzung des Chats werden zusätzlich Ihre
                Eingaben verarbeitet, um Ihre Anfrage zu beantworten.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer direkten
                Kommunikationsmöglichkeit) bzw. Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch aktive Nutzung des
                Chats).
              </p>
            </div>

            {/* Ihre Rechte */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                5. Ihre Rechte
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 ml-4">
                <li><strong>Recht auf Auskunft</strong> (Art. 15 DSGVO): Sie können Auskunft über Ihre gespeicherten Daten verlangen.</li>
                <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO): Sie können die Berichtigung unrichtiger Daten verlangen.</li>
                <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO): Sie können die Löschung Ihrer Daten verlangen.</li>
                <li><strong>Recht auf Einschränkung</strong> (Art. 18 DSGVO): Sie können die Einschränkung der Verarbeitung verlangen.</li>
                <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO): Sie können Ihre Daten in einem strukturierten Format erhalten.</li>
                <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO): Sie können der Verarbeitung Ihrer Daten widersprechen.</li>
                <li><strong>Recht auf Widerruf</strong>: Sie können erteilte Einwilligungen jederzeit widerrufen.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
                <a href="mailto:info@wedo-software.com" className="text-blue-600 hover:text-blue-700 transition">
                  info@wedo-software.com
                </a>
              </p>
            </div>

            {/* Beschwerderecht */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                6. Beschwerderecht
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. In Österreich ist
                dies die Österreichische Datenschutzbehörde:
                <br /><br />
                Österreichische Datenschutzbehörde<br />
                Barichgasse 40-42<br />
                1030 Wien<br />
                Telefon: +43 1 52 152-0<br />
                E-Mail: dsb@dsb.gv.at<br />
                Website:{' '}
                <a
                  href="https://www.dsb.gv.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition"
                >
                  www.dsb.gv.at
                </a>
              </p>
            </div>

            {/* Datensicherheit */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                7. Datensicherheit
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen
                zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder den Zugriff unberechtigter
                Personen zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen
                Entwicklung fortlaufend verbessert.
              </p>
            </div>

            {/* Speicherdauer */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                8. Speicherdauer
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Wir speichern personenbezogene Daten nur so lange, wie dies für die Erfüllung des jeweiligen
                Zwecks erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Nach Wegfall des Zwecks
                bzw. Ablauf der Fristen werden die Daten routinemäßig gelöscht.
              </p>
            </div>

            {/* Änderungen */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                9. Änderungen der Datenschutzerklärung
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder
                Änderungen unserer Dienste anzupassen. Für erneute Besuche gilt dann die jeweils aktuelle
                Datenschutzerklärung.
              </p>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-lg"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
