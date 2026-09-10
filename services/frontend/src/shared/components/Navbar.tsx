import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg py-4 px-6 fixed w-full z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/icon.png" alt="WeDo Software Logo" className="h-8 w-8" />
          <h1 className="text-2xl font-bold text-gray-800">WeDo Software</h1>
        </div>
        <div className="space-x-8 text-gray-600">
          <a href="/#topics" className="hover:text-blue-500 transition">Themen</a>
          <a href="/#about" className="hover:text-blue-500 transition">Über uns</a>
          <a href="/#contact" className="hover:text-blue-500 transition">Kontakt</a>
          <Link to="/impressum" className="hover:text-blue-500 transition">Impressum</Link>
        </div>
      </div>
    </nav>
  );
}
