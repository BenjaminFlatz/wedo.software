interface ProductCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  cta: string;
}

const ProductCard = ({ title, description, tags, href, cta }: ProductCardProps) => (
  <div className="glass-card rounded-2xl p-8 flex flex-col gap-4">
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="badge-chip">
          {tag}
        </span>
      ))}
    </div>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto pt-4 text-cyan-400 hover:text-cyan-300 font-medium text-sm inline-flex items-center gap-1"
    >
      {cta} <span aria-hidden="true">→</span>
    </a>
  </div>
);

const PRODUCTS: ProductCardProps[] = [
  {
    title: 'Financial Analytics App',
    description:
      'Predictive price targets powered by LightGBM regression models, combined with an automated fundamentals engine and Buy/Hold/Sell rating system.',
    tags: ['Python', 'LightGBM', 'Machine Learning'],
    href: 'https://finance.wedo-software.com',
    cta: 'View Live App',
  },
  {
    title: 'Apify Web Scrapers',
    description:
      'Production-grade lead mining and data extraction engines for restaurants and local businesses, published and running on Apify.',
    tags: ['Crawlee', 'Web Scraping', 'Automation'],
    href: 'https://apify.com/wedo_software/wedo-scrape-menu',
    cta: 'View On Apify',
  },
  {
    title: 'Mushroom Growkits Hub',
    description:
      'A managed e-commerce platform for mushroom growkit distribution, with automated inventory tracking and sales workflows.',
    tags: ['E-Commerce', 'ERP', 'Integration'],
    href: 'https://shop.pilzkraft.com/',
    cta: 'Visit Shop',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-[#05060a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="badge-chip mb-4">Proprietary Products</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">Live In Production</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Software I build, run and monetize myself — proof that the same engineering discipline
            applied to client projects holds up in production, generating real revenue.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
