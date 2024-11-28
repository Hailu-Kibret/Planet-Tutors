import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Join Planet Tutors!
        </h2>
        <p className="text-gray-600 text-center mt-2">
          Create an account to get started.
        </p>
        <form className="mt-6">
          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-semibold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
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

          {/* Password */}
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
              placeholder="Create a password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-semibold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Sign-Up Button */}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors mt-4"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="mt-6 border-t border-gray-300"></div>

        {/* Sign-In Suggestion */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/signInPage"
            className="text-indigo-500 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
