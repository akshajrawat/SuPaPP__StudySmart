import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-100 dark:bg-[#0a081f] px-4">
      <div className="w-full max-w-md bg-white dark:bg-[#1a1a2e] p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Create an Account
        </h2>

        <form className="space-y-5">
          {/* Username */}
          <div>
            <label
              className="block text-gray-600 dark:text-gray-300 mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#0f0f1c] dark:text-white"
            />
          </div>

          {/* Email */}
          <div>
            <label
              className="block text-gray-600 dark:text-gray-300 mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#0f0f1c] dark:text-white"
            />
          </div>

          {/* Password */}
          <div>
            <label
              className="block text-gray-600 dark:text-gray-300 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[#0f0f1c] dark:text-white"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#4fd1d9] hover:bg-[#417678] text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Register
          </button>
        </form>

        {/* Optional link */}
        <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-[#4fd1d9] font-bold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
