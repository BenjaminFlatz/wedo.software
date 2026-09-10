import { useState } from 'react';

const NAV_LINKS = [
  { href: '#tech-stack', label: 'Tech Stack' },
  { href: '#services', label: 'Services' },
  { href: '#products', label: 'Products' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass-panel fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/logo.svg" alt="wedo-software.com logo" className="h-8 w-8" />
          <span className="text-white font-semibold tracking-wide">wedo-software.com</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="cta-primary px-5 py-2 rounded-full text-sm">
            Start a Project
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-gray-200"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-2 pb-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="cta-primary px-5 py-2 rounded-full text-sm text-center"
            onClick={() => setIsOpen(false)}
          >
            Start a Project
          </a>
        </div>
      )}
    </nav>
  );
}
