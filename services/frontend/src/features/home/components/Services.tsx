interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

const ServiceCard = ({ title, description, icon, tags }: ServiceCardProps) => (
  <div className="glass-card rounded-2xl p-8 flex flex-col gap-4">
    <span className="text-3xl">{icon}</span>
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2 mt-auto pt-2">
      {tags.map((tag) => (
        <span key={tag} className="badge-chip">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const SERVICES: ServiceCardProps[] = [
  {
    icon: '🤖',
    title: 'AI Automation & LLMs',
    description:
      'Custom AI agent workflows built with LangChain and LangGraph to automate manual operations and intelligent data pipelines.',
    tags: ['LangChain', 'LangGraph', 'LLMs'],
  },
  {
    icon: '🕸️',
    title: 'Enterprise Web Scraping',
    description:
      'Anti-blocking, large-scale scrapers built with Crawlee and Camoufox, hosted on Apify or Google Cloud Platform.',
    tags: ['Crawlee', 'Camoufox', 'Apify'],
  },
  {
    icon: '💻',
    title: 'Full-Stack Development',
    description:
      'Web applications and internal tools engineered end-to-end with Python, C# / .NET, React, and TypeScript.',
    tags: ['Python', 'C# / .NET', 'React', 'TypeScript'],
  },
  {
    icon: '☁️',
    title: 'Cloud Architecture & DevOps',
    description:
      'Automated deployment pipelines and cloud infrastructure management on Railway, Cloudflare, Docker, and GCP.',
    tags: ['Railway', 'GCP', 'Docker', 'Cloudflare'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-glow py-24 bg-[#05060a]">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="badge-chip mb-4">Custom Engineering Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            What I Build For Clients
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Senior-level architecture experience applied to AI automation, enterprise scraping,
            full-stack platforms and cloud DevOps — delivered as direct consulting or contract
            development.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
