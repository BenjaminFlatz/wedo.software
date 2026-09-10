import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#05060a] border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} wedo-software.com — Benjamin Flatz. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <Link to="/impressum" className="hover:text-cyan-400 transition-colors">
            Impressum
          </Link>
          <Link to="/datenschutz" className="hover:text-cyan-400 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
