const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">​Zap logistic</div>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex text-sm text-gray-700">
          <a href="/" className="hover:text-blue-600 transition">
            Home
          </a>
          <a href="/product-table" className="hover:text-blue-600 transition">
            Products{" "}
          </a>
          <a href="/contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </nav>

        {/* Optional: Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-600">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
