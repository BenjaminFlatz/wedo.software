interface StepProps {
  step: string;
  title: string;
  description: string;
}

const STEPS: StepProps[] = [
  {
    step: '01',
    title: 'Discovery Chat',
    description:
      'Start a conversation in the live chat. We talk through your goals, constraints and technical context — no forms, no friction.',
  },
  {
    step: '02',
    title: 'Proposal',
    description:
      'You receive a clear, scoped proposal outlining architecture, timeline and cost — grounded in senior-level engineering judgment.',
  },
  {
    step: '03',
    title: 'Build & Iterate',
    description:
      'Development happens in tight, visible increments. You see working software early and often, with room to adjust as we go.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    description:
      'We ship to production with automated deployment pipelines, then stay engaged for monitoring, fixes and iteration.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-glow py-24 bg-[#05060a]">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="badge-chip mb-4">Onboarding</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">How It Works</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A straightforward, transparent path from first message to a live product — no
            unnecessary process overhead.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {STEPS.map((item) => (
            <div key={item.step} className="glass-panel rounded-2xl p-6 relative">
              <span className="text-4xl font-bold text-cyan-500/30">{item.step}</span>
              <h3 className="text-lg font-semibold text-white mt-3 mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
