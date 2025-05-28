import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, LoadingSpinner } from "../../Components/Ui/Messages";

const Register = () => {
  // defining
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({
    error: "",
    status: false,
  });
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  // funtion which handle change of input
  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(user);
  };

  // handling the submition of the form

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({
      error: "",
      status: false,
    });

    // throws error if any of the field is missing
    if (!user.username || !user.email || !user.password) {
      setLoading(false);
      setError({
        error: "All fields are mandatory",
        status: true,
      });
    }

    // sending post request
    try {
      const response = await axios.post(
        "http://localhost:3000/SuPaPP/auth/register",
        user
      );
      setLoading(false);
      localStorage.setItem("email", email);
      setUser({ username: "", email: "", password: "" });
      if (response.status === 201) {
        navigate("/auth/otp");
      } else {
        setError({
          error: response.data.message || "Failed to send message",
          status: true,
        });
        throw new Error(response.data.message);
      }
    } catch (error) {
      setLoading(false);
      setError({
        error: error.response?.data?.message || "Something went wrong!",
        status: true,
      });
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-100 dark:bg-[#0a081f] px-4">
      <div className="w-full max-w-md bg-white dark:bg-[#1a1a2e] p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
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
              name="username"
              placeholder="Enter username"
              value={user.username}
              onChange={handleChange}
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
              name="email"
              placeholder="Enter email"
              value={user.email}
              onChange={handleChange}
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
              name="password"
              placeholder="Enter password"
              value={user.password}
              onChange={handleChange}
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
          {error.status && <ErrorMessage message={error.error} />}
          {loading && <LoadingSpinner />}
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
