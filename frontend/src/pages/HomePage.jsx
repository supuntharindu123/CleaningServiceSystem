import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Cleaning Services
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book expert cleaners for your home or office with just a few clicks
          </p>
          <div className="space-x-4">
            <Link
              to="/booking"
              className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Book Now
            </Link>
            <Link
              to="/services"
              className="border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Cleaning Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Standard Cleaning",
              description: "Regular maintenance cleaning for your home",
              icon: "🧹",
            },
            {
              title: "Deep Cleaning",
              description: "Thorough cleaning of every corner",
              icon: "🧽",
            },
            {
              title: "Office Cleaning",
              description: "Professional cleaning for workspaces",
              icon: "🏢",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}

      {/* Call to Action */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Ready for a Cleaner Space?
          </h2>
          <Link
            to="/booking"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
          >
            Schedule Your Cleaning Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
