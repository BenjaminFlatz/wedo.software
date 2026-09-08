const Footer = () => (
  <footer className="bg-[#05060a] border-t border-gray-800 text-gray-400 py-8">
    <div className="container mx-auto px-6 text-center">
      <p className="text-sm mb-2">&copy; {new Date().getFullYear()} wedo-software.com &mdash; Benjamin Flatz. All rights reserved.</p>
      <div className="text-sm space-x-4">
        <a href="impressum.html" className="hover:text-cyan-400 transition">Legal Notice</a>
        <span className="text-gray-700">|</span>
        <a href="datenschutz.html" className="hover:text-cyan-400 transition">Privacy Policy</a>
      </div>
    </div>
  </footer>
);
