const TECH_STACK = [
  { name: 'Python', icon: '🐍' },
  { name: 'C# / .NET', icon: '🧩' },
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'DevOps', icon: '⚙️' },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-glow py-24 bg-[#05060a]">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-16">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              className="glass-card rounded-2xl p-6 flex flex-col items-center gap-3 text-center"
            >
              <span className="text-3xl">{tech.icon}</span>
              <span className="text-sm text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="glass-panel rounded-2xl p-8 md:p-10 max-w-3xl mx-auto text-center">
          <p className="text-gray-300 leading-relaxed">
            Based in Dornbirn, Austria, I bring enterprise-grade experience from roles at{' '}
            <span className="text-cyan-400">Hypo Vorarlberg Bank</span> and{' '}
            <span className="text-cyan-400">Künz GmbH</span>, combining banking-grade reliability
            with industrial engineering rigor. I build software that is architected to last —
            resilient under load, scalable by design and simple to integrate into the systems you
            already run.
          </p>
        </div>
      </div>
    </section>
  );
}
