import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  authenticate,
  loaderStop,
  start,
  success,
} from "../../Store/authSlice/authSlice";
import { axiosInstance } from "../../Lib/axios";
import toast from "react-hot-toast";
import { LoadingSpinner } from "../../Components/Ui/Messages";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(start());
    // throws error if any of the field is missing
    if (!user.email || !user.password) {
      dispatch(loaderStop());
      toast.error("All fields are mandatory");
      return;
    }

    // email validation

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      dispatch(loaderStop());
      toast.error("Email is not valid");
      return;
    }

    // sending post request
    try {
      const response = await axiosInstance.post("/auth/login", user);
      setUser({ email: "", password: "" });
      if (response.status === 200) {
        dispatch(success({ user: response.data.user }));
        dispatch(authenticate());
        toast.success(response.data.message);
        navigate("/SuPaPP");
      }
    } catch (error) {
      dispatch(loaderStop());
      toast.error(error.response.data.message);
      throw new Error("Error at handle change | LOGIN");
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-100 dark:bg-[#0a081f] px-4">
      <div className="w-full max-w-md bg-white dark:bg-[#1a1a2e] p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label
              className="block text-gray-600 dark:text-gray-300 mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
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
              name="password"
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
            Login
          </button>
          {auth.loading && <LoadingSpinner />}
        </form>

        {/* Optional link */}
        <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="text-[#4fd1d9] font-bold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
