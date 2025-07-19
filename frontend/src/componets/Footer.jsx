const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
                CleanPro
              </span>
            </h3>
            <p className="text-gray-500 text-sm">
              Professional cleaning services for homes and businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-500">
                <span className="sr-only">Facebook</span>
                <span className="h-6 w-6">FB</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500">
                <span className="sr-only">Instagram</span>
                <span className="h-6 w-6">IG</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500">
                <span className="sr-only">Twitter</span>
                <span className="h-6 w-6">TW</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
              Services
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-emerald-600 text-sm"
                >
                  Residential Cleaning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-emerald-600 text-sm"
                >
                  Commercial Cleaning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-emerald-600 text-sm"
                >
                  Deep Cleaning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-emerald-600 text-sm"
                >
                  Move-In/Move-Out
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
              Company
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-emerald-600 text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-emerald-600 text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-emerald-600 text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-emerald-600 text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-500 text-sm">123 Clean Street</li>
              <li className="text-gray-500 text-sm">San Francisco, CA 94107</li>
              <li className="text-gray-500 text-sm">(555) 123-4567</li>
              <li className="text-gray-500 text-sm">hello@cleanpro.example</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CleanPro. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-emerald-600 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-emerald-600 text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-emerald-600 text-sm"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
