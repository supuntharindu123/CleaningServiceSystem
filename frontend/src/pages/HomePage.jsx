import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchServices } from "../actions/serviceActions";
import { useAuth } from "../context/authcontext";

const HomePage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const { axiosInstance, user } = useAuth();

  // Default fallback services (in case API fails)
  const defaultServices = [
    {
      _id: "default-1",
      serviceName: "Standard Cleaning",
      description: "Regular maintenance cleaning for your home",
    },
    {
      _id: "default-2",
      serviceName: "Deep Cleaning",
      description: "Thorough cleaning of every corner",
    },
    {
      _id: "default-3",
      serviceName: "Office Cleaning",
      description: "Professional cleaning for workspaces",
    },
  ];

  useEffect(() => {
    const loadServices = async () => {
      try {
        setLoading(true);

        if (!axiosInstance) {
          setServices(defaultServices);
          return;
        }

        const response = await fetchServices(axiosInstance);

        if (response.success && response.data.services) {
          setServices(response.data.services);
        } else {
          // Fallback to default services on API error
          console.warn("Failed to fetch services, using defaults");
          setServices(defaultServices);
        }
      } catch (error) {
        console.error("Error loading services:", error);
        setServices(defaultServices);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, [axiosInstance]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-gray-600 text-white py-20">
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
            {user ? (
              <Link
                to="/dashboard"
                className="border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-emerald-600 transition-colors"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                className="border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-emerald-600 transition-colors"
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Cleaning Services
        </h2>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="flex items-center space-x-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
              <span className="text-gray-600">Loading services...</span>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => {
              // Color themes for visual variety
              const colors = [
                "border-gray-200 bg-gray-100 text-gray-700",
                "border-emerald-200 bg-emerald-50 text-emerald-700",
              ];
              const colorClass = colors[index % colors.length];

              return (
                <div
                  key={service._id}
                  className={`${colorClass} p-6 rounded-xl border-2 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="text-left">
                    <h3 className="text-xl font-bold mb-3">
                      {service.serviceName}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium opacity-75">
                        Professional Service
                      </span>
                      <Link
                        to="/booking"
                        className="inline-flex items-center text-sm font-medium hover:underline"
                      >
                        Book Now
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Show More Button */}
        {services.length > 6 && (
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>View All Services</span>
              <span className="bg-emerald-500 text-emerald-100 px-2 py-1 rounded-lg text-sm">
                {services.length}
              </span>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
