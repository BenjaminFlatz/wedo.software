import { Link } from 'react-router-dom';
import Navbar from '../../../shared/components/Navbar';
import Footer from '../../../shared/components/Footer';

export default function ImpressumPage() {
  return (
    <div>
      <Navbar />
      <section className="pt-28 pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 text-center animate-fade-in">
            Impressum
          </h1>

          <div className="bg-white p-8 rounded-xl shadow-custom animate-slide-up space-y-8">
            {/* Diensteanbieter */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                Diensteanbieter / Medieninhaber / Herausgeber
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Benjamin Flatz<br />
                Eisengasse 25<br />
                6850 Dornbirn, Österreich
              </p>
            </div>

            {/* Kontakt */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                Kontakt
              </h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Telefon:</strong> +43 664 4040185<br />
                <strong>Kontaktformular:</strong>{' '}
                <a href="/#contact" className="text-blue-600 hover:text-blue-700 transition">Zum Formular</a>
              </p>
            </div>

            {/* Tätigkeit */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                Tätigkeit
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nebenberufliche lehrende Tätigkeit als Neuer Selbständiger: Erstellung und Vermittlung von
                Tutorials, Videos und Inhalten zu Software-Themen.
              </p>
            </div>

            {/* Steuern */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                Steuern
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Kleinunternehmerregelung gem. § 6 Abs. 1 Z 27 UStG – keine Umsatzsteuer ausgewiesen, keine
                UID-Nummer.
              </p>
            </div>

            {/* Blattlinie */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                Blattlinie (Mediengesetz)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Bildung und Wissensvermittlung im Bereich Informatik und Software-Entwicklung.
              </p>
            </div>

            {/* Streitbeilegung */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                Streitbeilegung
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Die EU-Plattform zur Online-Streitbeilegung (OS-Plattform):{' '}
                <a
                  href="https://ec.europa.eu/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition"
                >
                  https://ec.europa.eu/odr
                </a>
                <br />
                Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren teilzunehmen.
              </p>
            </div>

            {/* Haftungsausschluss */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                Haftungsausschluss
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Keine Haftung für externe Links. Alle Inhalte urheberrechtlich geschützt – Vervielfältigung nur
                mit Zustimmung.
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
