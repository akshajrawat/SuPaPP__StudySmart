import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import study from "../../Assets/Icon/study3.jpg";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Store/Slice/authSlice";
import toast from "react-hot-toast";
import useGoogleAuth from "../../Lib/googleAuth";
import { LoadingSpinner } from "../../Components/Ui/Messages";

const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      toast.error("All fields are mandatory");
      return;
    }
    try {
      await dispatch(loginUser(user)).unwrap();
      navigate("/Supapp");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const googleAuthHandler = useGoogleAuth();

  return (
    <div className="min-h-[calc(100vh-67px)] w-full flex justify-center items-center bg-[#f0f7fd] p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl shadow-2xl rounded-xl overflow-hidden bg-[#E2FFC8] flex flex-col lg:flex-row"
      >
        {/* Image Section */}
        <div className="h-48 lg:h-auto w-full lg:w-[40%]">
          <img className="w-full h-full object-cover" src={study} alt="study" />
        </div>

        {/* Login Section */}
        <div className="flex-1 flex flex-col justify-start items-center gap-3 px-6 py-8">
          <div className="flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C363C]">
              Welcome back to SuPaPP
            </h3>
            <p className="mt-2 max-w-md text-sm sm:text-base font-semibold text-[#0c363c99]">
              Master your academics effortlessly with our powerful all-in-one
              study system.
            </p>
          </div>

          {/* Inputs */}
          <div className="w-full sm:w-[70%] lg:w-[60%] flex flex-col gap-3 mt-4">
            {/* Email */}
            <div className="border-2 border-[#0c363c42] focus-within:border-[#0C363C] w-full h-[55px] relative p-1 pb-3 rounded-xl">
              <input
                className="h-full w-full pt-7 pb-2 pl-2 border-none outline-none bg-transparent"
                name="email"
                value={user.email}
                onChange={handleChange}
                type="email"
              />
              <label className="absolute top-0 left-2 text-[#0c363c99] font-semibold">
                Email
              </label>
            </div>

            {/* Password */}
            <div className="border-2 border-[#0c363c42] w-full h-[55px] relative p-1 pb-3 rounded-xl focus-within:border-[#0C363C]">
              <input
                className="h-full w-full pt-7 pb-2 pl-2 border-none outline-none bg-transparent"
                name="password"
                value={user.password}
                onChange={handleChange}
                type="password"
              />
              <label className="absolute top-0 left-2 text-[#0c363c99] font-semibold">
                Password
              </label>
            </div>

            {/* Options */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <Link className="font-bold text-[#0C363C]" to="/auth/forgot">
                Forgot Password?
              </Link>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#0C363C] focus:ring-[#0C363C] rounded"
                />
                <label htmlFor="remember" className="text-[#0C363C] font-bold">
                  Remember Me
                </label>
              </div>
            </div>

            {/* Login Button */}
            <button className="w-full py-2.5 bg-[#0C363C] text-white font-bold text-lg sm:text-xl rounded-full">
              Login
            </button>

            {/* Loading */}
            {loading.login && <LoadingSpinner />}

            {/* Separation */}
            <div className="flex items-center w-full my-4">
              <hr className="flex-grow border-t border-[#0C363C]" />
              <span className="mx-4 text-[#0C363C] font-medium">OR</span>
              <hr className="flex-grow border-t border-[#0C363C]" />
            </div>

            {/* Google Auth */}
            <button
              type="button"
              onClick={googleAuthHandler}
              className="w-full py-2.5 bg-[#0c363c42] font-semibold text-lg sm:text-xl rounded-full flex items-center justify-center gap-3"
            >
              <FcGoogle className="text-3xl sm:text-4xl" />
              <span className="flex justify-center items-center sm:text-left">
                Continue with Google
              </span>
            </button>

            {/* Register Link */}
            <div className="flex flex-wrap justify-center gap-2 mt-3 font-semibold">
              <p className="text-[#0C363C]">Don’t have an account?</p>
              <Link to="/auth/register" className="text-blue-600">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
