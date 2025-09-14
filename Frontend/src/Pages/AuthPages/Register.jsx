import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import study from "../../Assets/Icon/study3.jpg";
import { FcGoogle } from "react-icons/fc";
import { registerUser } from "../../Store/Slice/authSlice";
import toast from "react-hot-toast";
import { LoadingSpinner } from "../../Components/Ui/Messages";
import useGoogleAuth from "../../Lib/googleAuth";

const Register = () => {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.username || !user.email || !user.password) {
      toast.error("All fields are mandatory");
      return;
    }
    try {
      await dispatch(registerUser(user)).unwrap();
      navigate("/auth/otp");
    } catch (error) {
      console.error("Registration failed", error);
    }
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

        {/* Register Section */}
        <div className="flex-1 flex flex-col justify-start items-center gap-3 px-6 py-8">
          <div className="flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C363C]">
              Create your account
            </h3>
            <p className="mt-2 max-w-md text-sm sm:text-base font-semibold text-[#0c363c99]">
              Master your academics effortlessly with our powerful all-in-one
              study system.
            </p>
          </div>

          {/* Inputs */}
          <div className="w-full sm:w-[70%] lg:w-[60%] flex flex-col gap-3 mt-4">
            {/* Username */}
            <div className="border-2 border-[#0c363c42] focus-within:border-[#0C363C] w-full h-[55px] relative p-1 pb-3 rounded-xl">
              <input
                className="h-full w-full pt-7 pb-2 pl-2 border-none outline-none bg-transparent"
                name="username"
                type="text"
                value={user.username}
                onChange={handleChange}
              />
              <label className="absolute top-0 left-2 text-[#0c363c99] font-semibold">
                Username
              </label>
            </div>

            {/* Email */}
            <div className="border-2 border-[#0c363c42] focus-within:border-[#0C363C] w-full h-[55px] relative p-1 pb-3 rounded-xl">
              <input
                className="h-full w-full pt-7 pb-2 pl-2 border-none outline-none bg-transparent"
                name="email"
                type="email"
                value={user.email}
                onChange={handleChange}
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
                type="password"
                value={user.password}
                onChange={handleChange}
              />
              <label className="absolute top-0 left-2 text-[#0c363c99] font-semibold">
                Password
              </label>
            </div>

            {/* Remember Me */}
            <div className="flex justify-center items-center">
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

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2.5 bg-[#0C363C] text-white font-bold text-lg sm:text-xl rounded-full"
            >
              Register
            </button>

            {/* Loading */}
            {loading.register && <LoadingSpinner />}

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

            {/* Login Redirect */}
            <div className="flex flex-wrap justify-center gap-2 mt-3 font-semibold">
              <p className="text-[#0C363C]">Already have an account?</p>
              <Link to="/auth/login" className="text-blue-600">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
