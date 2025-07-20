const NotFound = () => {
  const handleGoHome = () => {
    // TODO: Navigate to home page
    window.location.href = "/";
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          {/* 404 Illustration */}
          <div className="mx-auto w-32 h-32 bg-gradient-to-r from-emerald-600 to-gray-500 rounded-full flex items-center justify-center mb-6">
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
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20.055a7.962 7.962 0 01-5.657-2.343 7.962 7.962 0 010-11.269A7.962 7.962 0 0112 3.657a7.962 7.962 0 015.657 2.686 7.962 7.962 0 010 11.314z"
              />
            </svg>
          </div>

          {/* Error Code */}
          <div className="space-y-2">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-600 to-gray-500 bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="text-2xl font-semibold text-gray-800">
              Page Not Found
            </h2>
          </div>

          {/* Error Message */}
          <div className="space-y-3">
            <p className="text-gray-600 leading-relaxed">
              Oops! The page you're looking for seems to have been moved,
              deleted, or doesn't exist.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Error Code: 404 - Resource Not Found</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <button
              onClick={handleGoHome}
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>Go to Homepage</span>
              </div>
            </button>

            <button
              onClick={handleGoBack}
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
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span>Go Back</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
