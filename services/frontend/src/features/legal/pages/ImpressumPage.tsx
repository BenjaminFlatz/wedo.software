import { Link } from 'react-router-dom';
import Navbar from '../../../shared/components/Navbar';
import Footer from '../../../shared/components/Footer';

export default function ImpressumPage() {
  return (
    <div>
      <Navbar />
      <section className="pt-28 pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center animate-fade-in">
            Legal Notice
          </h1>

          <div className="bg-white p-8 rounded-xl shadow-custom animate-slide-up space-y-8">
            {/* Diensteanbieter */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-cyan-500 pb-2">
                Service Provider / Media Owner / Publisher
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Benjamin Flatz<br />
                Eisengasse 25<br />
                6850 Dornbirn, Austria
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-cyan-500 pb-2">
                Contact
              </h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Telefon:</strong> +43 664 4040185<br />
                <strong>Kontaktformular:</strong>{' '}
                <a href="/#contact" className="text-blue-600 hover:text-blue-700 transition">Zum Formular</a>
              </p>
            </div>

            {/* Activity */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-cyan-500 pb-2">
                Activity
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nebenberufliche lehrende Tätigkeit als Neuer Selbständiger: Erstellung und Vermittlung von
                Tutorials, Videos und Inhalten zu Software-Themen.
              </p>
            </div>

            {/* Taxes */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-cyan-500 pb-2">
                Taxes
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Kleinunternehmerregelung gem. § 6 Abs. 1 Z 27 UStG – keine Umsatzsteuer ausgewiesen, keine
                UID-Nummer.
              </p>
            </div>

            {/* Scope of Business */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-cyan-500 pb-2">
                Scope of Business (Media Act)
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Software engineering, system architecture, automation and technical consulting services.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-cyan-500 pb-2">
                Dispute Resolution
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
                We are not obliged and not willing to participate in dispute resolution proceedings before a consumer arbitration board.
              </p>
            </div>

            {/* Disclaimer */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-cyan-500 pb-2">
                Disclaimer
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
