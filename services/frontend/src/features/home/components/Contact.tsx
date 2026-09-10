import { openChatwoot } from '../../../shared/hooks/useChatwoot';

export default function Contact() {
  return (
    <section id="contact" className="section-glow py-24 bg-[#05060a]">
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <span className="badge-chip mb-6 inline-block">Let's Build Something</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 animate-fade-in">
          Have a project in mind?
        </h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Whether you need AI automation, a custom scraping pipeline, a full-stack application or
          cloud infrastructure — start a conversation and get a straight answer, no forms to fill
          out.
        </p>
        <div className="glass-card rounded-2xl p-10 animate-slide-up">
          <div className="text-cyan-400 text-5xl mb-4">💬</div>
          <p className="text-gray-300 mb-8">
            Click the button below or the chat bubble in the bottom-right corner to start chatting
            with me directly.
          </p>
          <button type="button" onClick={openChatwoot} className="cta-primary w-full p-4 rounded-lg">
            Start a Chat
          </button>
        </div>
      </div>
    </section>
  );
}
