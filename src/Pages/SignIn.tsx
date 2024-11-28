import { Link } from "react-router-dom";

function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100  ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back to Planet Tutors!
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Sign in to access your account.
        </p>
        <form className="mt-6">
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-indigo-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign-In Button */}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors mt-4"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="mt-6 border-t border-gray-300"></div>

        {/* Sign-Up Suggestion */}
        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link
            to="/SignUpPage"
            className="text-indigo-500 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignInPage;
