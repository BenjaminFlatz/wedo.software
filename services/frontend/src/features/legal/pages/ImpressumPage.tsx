import { Link } from 'react-router-dom';
import Navbar from '../../../shared/components/Navbar';
import Footer from '../../../shared/components/Footer';

export default function ImpressumPage() {
  return (
    <div>
      <Navbar />
      <section className="pt-32 pb-24 bg-[#05060a] min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center animate-fade-in glow-text">
            Legal Notice
          </h1>

          <div className="glass-panel p-8 rounded-2xl animate-slide-up space-y-8">
            {/* Service Provider */}
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 border-b border-cyan-500/30 pb-2">
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
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 border-b border-cyan-500/30 pb-2">
                Contact
              </h2>
              <p className="text-gray-300 leading-relaxed">
                <strong>Phone:</strong> +43 664 4040185<br />
                <strong>Contact:</strong>{' '}
                <a href="/#contact" className="text-cyan-400 hover:text-cyan-300 transition">Start a chat</a>
              </p>
            </div>

            {/* Activity */}
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 border-b border-cyan-500/30 pb-2">
                Activity
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Software engineering, system architecture, AI automation, web scraping and
                technical consulting services, registered as a sole proprietor (Neuer
                Selbständiger) in Austria.
              </p>
            </div>

            {/* Taxes */}
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 border-b border-cyan-500/30 pb-2">
                Taxes
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Small business regulation pursuant to § 6 para. 1 no. 27 of the Austrian VAT Act
                (UStG) — no VAT is charged, no VAT identification number.
              </p>
            </div>

            {/* Scope of Business */}
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 border-b border-cyan-500/30 pb-2">
                Scope of Business (Media Act)
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Software engineering, system architecture, automation and technical consulting
                services.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 border-b border-cyan-500/30 pb-2">
                Dispute Resolution
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The EU Online Dispute Resolution platform (ODR platform) can be found at:{' '}
                <a
                  href="https://ec.europa.eu/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition"
                >
                  https://ec.europa.eu/odr
                </a>
                <br />
                We are not obliged and not willing to participate in dispute resolution
                proceedings before a consumer arbitration board.
              </p>
            </div>

            {/* Disclaimer */}
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 border-b border-cyan-500/30 pb-2">
                Disclaimer
              </h2>
              <p className="text-gray-300 leading-relaxed">
                No liability is assumed for the content of external links. All content is
                protected by copyright — reproduction only with prior consent.
              </p>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <Link to="/" className="cta-primary inline-block px-8 py-3 rounded-full">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
