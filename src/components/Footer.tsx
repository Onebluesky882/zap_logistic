const Footer = () => {
  return (
    <footer className=" hidden md:block bg-gray-100 text-gray-600 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h4 className="text-lg font-semibold mb-2">About Us</h4>
          <p className="text-sm">
            We provide the best products to our customers with excellent
            service.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Contact </h4>
          <p className="text-sm">Email: info@example.com</p>
          <p className="text-sm">Phone: +66 456 7890</p>
        </div>
      </div>

      <div className="text-center text-xs mt-6 text-gray-400">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
