import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm mb-2">&copy; {new Date().getFullYear()} WeDo Software. Alle Rechte vorbehalten.</p>
        <div className="text-sm space-x-4">
          <Link to="/impressum" className="hover:text-blue-400 transition">Impressum</Link>
          <span className="text-gray-500">|</span>
          <Link to="/datenschutz" className="hover:text-blue-400 transition">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
