import { Button } from "@/components/ui/button";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-white px-6 py-12 space-y-20">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">Zap Logistic</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Your trusted partner in modern inventory and logistics solutions.
        </p>
        <a href="/product-table">
          <Button className="text-lg px-8 py-3 rounded-lg shadow-lg animate-shake">
            View Products Table
          </Button>
        </a>
      </section>
      {/* Technology Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Advanced Technology
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We use state-of-the-art technologies including AI-powered inventory
            management, real-time data analytics, and automation to ensure your
            logistics run smoothly and efficiently.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>AI-driven predictive analytics</li>
            <li>Real-time stock monitoring</li>
            <li>Automated restocking alerts</li>
          </ul>
        </div>
        <img
          src="/Transport-logistics.jpg"
          alt="Technology illustration"
          className="w-full max-w-md mx-auto"
        />
      </section>
      {/* Global Communication Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <img
          src="reliability.jpg"
          alt="Global communication illustration"
          className="w-full max-w-md mx-auto order-last md:order-first"
        />
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Global Communication
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Connecting supply chains and partners worldwide, our platform
            ensures seamless communication and collaboration, enabling you to
            grow your business beyond borders.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>24/7 communication channels</li>
            <li>Multi-language support</li>
            <li>Secure and encrypted data exchange</li>
          </ul>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Why Choose Zap Logistic?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="rreliability.jpg"
              alt="Reliability"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Reliability</h3>
            <p className="text-gray-600">
              We ensure your products are managed with utmost accuracy and
              timeliness.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="trust.png"
              alt="Innovation"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              Constantly evolving with the latest tech to give you the best
              edge.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="support.jpg"
              alt="Support"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-gray-600">
              Dedicated team available to assist you anytime with your needs.
            </p>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to optimize your logistics?
        </h2>
        <a href="/product-table">
          <Button className="px-10 py-4 text-xl">Get Started Today</Button>
        </a>
      </section>
    </div>
  );
};

export default Homepage;
