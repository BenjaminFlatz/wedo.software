import { Link } from 'react-router-dom';
import Navbar from '../../../shared/components/Navbar';
import Footer from '../../../shared/components/Footer';

export default function DatenschutzPage() {
  return (
    <div>
      <Navbar />
      <section className="pt-32 pb-24 bg-[#05060a] min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center animate-fade-in glow-text">
            Privacy Policy
          </h1>

          <div className="glass-panel p-8 rounded-2xl animate-slide-up space-y-8">
            {/* Introduction */}
            <div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Protecting your personal data is important to us. This privacy policy informs you
                about which personal data we collect, for what purposes, and on what legal basis.
              </p>
              <p className="text-gray-300 leading-relaxed">Last updated: January 2025</p>
            </div>

            {/* Controller */}
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 border-b border-cyan-500/30 pb-2">
                1. Data Controller
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The controller responsible for data processing on this website is:<br /><br />
                Benjamin Flatz<br />
                Eisengasse 25<br />
                6850 Dornbirn, Austria<br />
                Email:{' '}
                <a href="mailto:info@wedo-software.com" className="text-cyan-400 hover:text-cyan-300 transition">
                  info@wedo-software.com
                </a>
                <br />
                Phone: +43 664 4040185
              </p>
            </div>

            {/* Collection and Storage */}
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 border-b border-cyan-500/30 pb-2">
                2. Collection and Storage of Personal Data
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Each time our website is accessed, our system automatically collects data and
                information from the accessing device. The following data is collected:
              </p>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4 ml-4">
                <li>The user's IP address</li>
                <li>Date and time of access</li>
                <li>Pages visited</li>
                <li>Browser type and version</li>
                <li>Operating system used</li>
                <li>Referrer URL (previously visited page)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                This data is stored in the log files of our system. It is not stored together with
                other personal data of the user. The legal basis is Art. 6(1)(f) GDPR (legitimate
                interest in system security).
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 border-b border-cyan-500/30 pb-2">
                3. Cookies
              </h2>
              <p className="text-gray-300 leading-relaxed">
                This website does not currently use its own cookies. The embedded Chatwoot chat
                service (see section 4.2) may set technically necessary cookies to associate an
                ongoing conversation.
              </p>
            </div>

            {/* External Services */}
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 border-b border-cyan-500/30 pb-2">
                4. Integration of External Services
              </h2>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                4.1 Content Delivery Networks (CDN)
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                This website partially loads fonts and scripts via CDN services to ensure fast
                loading times. When loading these external resources, your IP address is
                transmitted to the respective provider. The legal basis is Art. 6(1)(f) GDPR
                (legitimate interest in fast and secure delivery of the website).
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                4.2 Chatwoot Live Chat
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Contact on this website is exclusively possible via the Chatwoot live chat
                service, which we operate ourselves at chatwoot.wedo-software.com — there is no
                separate contact form and no third-party server processing your requests. When the
                chat widget loads, your IP address is processed; if you use the chat, your input is
                additionally processed in order to respond to your inquiry.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The legal basis is Art. 6(1)(f) GDPR (legitimate interest in offering a direct
                means of communication) and Art. 6(1)(a) GDPR (consent through active use of the
                chat).
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 border-b border-cyan-500/30 pb-2">
                5. Your Rights
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed mb-4 ml-4">
                <li><strong>Right of access</strong> (Art. 15 GDPR): You may request information about your stored data.</li>
                <li><strong>Right to rectification</strong> (Art. 16 GDPR): You may request correction of inaccurate data.</li>
                <li><strong>Right to erasure</strong> (Art. 17 GDPR): You may request deletion of your data.</li>
                <li><strong>Right to restriction of processing</strong> (Art. 18 GDPR): You may request restriction of processing.</li>
                <li><strong>Right to data portability</strong> (Art. 20 GDPR): You may receive your data in a structured format.</li>
                <li><strong>Right to object</strong> (Art. 21 GDPR): You may object to the processing of your data.</li>
                <li><strong>Right to withdraw consent</strong>: You may withdraw any consent given at any time.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                To exercise your rights, please contact:{' '}
                <a href="mailto:info@wedo-software.com" className="text-cyan-400 hover:text-cyan-300 transition">
                  info@wedo-software.com
                </a>
              </p>
            </div>

            {/* Right to Complain */}
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 border-b border-cyan-500/30 pb-2">
                6. Right to Lodge a Complaint
              </h2>
              <p className="text-gray-300 leading-relaxed">
                You have the right to lodge a complaint with a data protection supervisory
                authority. In Austria, this is the Austrian Data Protection Authority:
                <br /><br />
                Österreichische Datenschutzbehörde<br />
                Barichgasse 40-42<br />
                1030 Vienna, Austria<br />
                Phone: +43 1 52 152-0<br />
                Email: dsb@dsb.gv.at<br />
                Website:{' '}
                <a
                  href="https://www.dsb.gv.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition"
                >
                  www.dsb.gv.at
                </a>
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 border-b border-cyan-500/30 pb-2">
                7. Data Security
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We use technical and organizational security measures to protect your data against
                accidental or intentional manipulation, loss, destruction, or access by
                unauthorized persons. Our security measures are continuously improved in line with
                technological developments.
              </p>
            </div>

            {/* Retention Period */}
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 border-b border-cyan-500/30 pb-2">
                8. Retention Period
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We store personal data only for as long as necessary to fulfil the respective
                purpose or as required by statutory retention periods. Once the purpose no longer
                applies or the retention period expires, the data is routinely deleted.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 border-b border-cyan-500/30 pb-2">
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to amend this privacy policy to adapt it to changed legal
                requirements or changes to our services. Any future visits will be governed by the
                then-current privacy policy.
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
