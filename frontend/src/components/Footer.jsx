const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
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
              Professional cleaning services for homes and businesses in Sri
              Lanka.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
              Services
            </h4>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-500 text-sm">Home Cleaning</li>
              <li className="text-gray-500 text-sm">Deep Cleaning</li>
              <li className="text-gray-500 text-sm">Office Cleaning</li>
              <li className="text-gray-500 text-sm">Carpet Cleaning</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-500 text-sm">123 Flower Road</li>
              <li className="text-gray-500 text-sm">Colombo 07</li>
              <li className="text-gray-500 text-sm">+94 76 123 4567</li>
              <li className="text-gray-500 text-sm">info@cleanpro.lk</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">
              Opening Hours
            </h4>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-500 text-sm">
                Mon-Fri: 8:00 AM - 6:00 PM
              </li>
              <li className="text-gray-500 text-sm">Sat: 9:00 AM - 4:00 PM</li>
              <li className="text-gray-500 text-sm">Sun: Closed</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CleanPro. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-500 text-sm">Proudly serving Sri Lanka</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
