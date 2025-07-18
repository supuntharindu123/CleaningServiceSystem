const LightDarkLoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          {/* Logo/Title Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              <span className="bg-gradient-to-r from-emerald-600 to-gray-500 bg-clip-text text-transparent">
                CleanPro
              </span>
            </h1>
            <p className="text-gray-500">
              Professional cleaning services portal
            </p>
          </div>

          <form className="space-y-5">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800 placeholder-gray-400"
                placeholder="you@example.com"
              />
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-emerald-400"
                >
                  Forgot?
                </a>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-gray-800 placeholder-gray-400"
                placeholder="••••••••"
              />
            </div>

            {/* Remember Me & Submit */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="h-4 w-4 text-emerald-500 focus:ring-purple-400 border-gray-300 rounded"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-600"
              >
                Remember this device
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-500 to-emerald-700 text-white py-3 px-4 rounded-lg hover:from-emerald-600 hover:to-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-white transition-all duration-200 shadow-md"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                New to CleanPro?
              </span>
            </div>
          </div>

          {/* Sign Up Link */}
          <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-white transition-all duration-200">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LightDarkLoginPage;
