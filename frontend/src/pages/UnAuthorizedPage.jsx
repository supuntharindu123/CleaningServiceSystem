import React from "react";

const UnAuthorizedPage = () => {
  const handleLogin = () => {
    // TODO: Navigate to login page
    window.location.href = "/login";
  };

  const handleGoHome = () => {
    // TODO: Navigate to home page
    window.location.href = "/";
  };

  const handleContactSupport = () => {
    // TODO: Navigate to contact/support page
    window.location.href = "/contact";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          {/* 401 Illustration */}
          <div className="mx-auto w-32 h-32 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-16 h-16 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>

          {/* Error Code */}
          <div className="space-y-2">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              401
            </h1>
            <h2 className="text-2xl font-semibold text-gray-800">
              Access Denied
            </h2>
          </div>

          {/* Error Message */}
          <div className="space-y-3">
            <p className="text-gray-600 leading-relaxed">
              You don't have permission to access this page. Please sign in with
              proper credentials to continue.
            </p>
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <div className="flex items-center space-x-2 text-sm text-red-700">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
                <span>Error Code: 401 - Unauthorized Access</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-emerald-600 to-gray-500 text-white py-3 px-6 rounded-lg font-medium hover:from-emerald-700 hover:to-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
            >
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span>Sign In</span>
              </div>
            </button>

            <button
              onClick={handleGoHome}
              className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-all duration-200"
            >
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>Go to Homepage</span>
              </div>
            </button>
          </div>

          {/* Security Notice */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg
                  className="w-5 h-5 text-blue-600 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-blue-800">
                  Security Notice
                </p>
                <p className="text-xs text-blue-700 mt-1">
                  This page is protected to ensure the security of your cleaning
                  service data and personal information.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Quick access to public pages:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <a
              href="/services"
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 border border-gray-200 transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="/about"
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 border border-gray-200 transition-colors duration-200"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 border border-gray-200 transition-colors duration-200"
            >
              Contact
            </a>
            <a
              href="/register"
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 border border-gray-200 transition-colors duration-200"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnAuthorizedPage;
