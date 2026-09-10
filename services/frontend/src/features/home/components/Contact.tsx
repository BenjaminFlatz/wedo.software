import { openChatwoot } from '../../../shared/hooks/useChatwoot';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12 animate-fade-in">
          Haben Sie Fragen?
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Möchten Sie mehr über unsere Lerninhalte erfahren oder haben Sie Themenvorschläge? Starten Sie einfach
          einen Chat mit uns – wir antworten direkt.
        </p>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg animate-slide-up text-center">
          <div className="text-blue-600 text-5xl mb-4">💬</div>
          <p className="text-gray-700 mb-6">
            Klicken Sie auf den Button oder auf die Chat-Sprechblase unten rechts, um direkt mit uns zu
            schreiben.
          </p>
          <button
            type="button"
            onClick={openChatwoot}
            className="w-full bg-blue-600 text-white p-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Chat starten
          </button>
        </div>
      </div>
    </section>
  );
}
