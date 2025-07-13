import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import study from "../../Assets/Icon/study3.jpg";
import { FcGoogle } from "react-icons/fc";
import { registerUser } from "../../Store/Slice/authSlice";
import toast from "react-hot-toast";
import { LoadingSpinner } from "../../Components/Ui/Messages";

const Login = () => {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  // handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // handle submit of form
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

  return (
    // register page start
    <div className="h-[calc(100vh-67px)] w-full flex justify-center items-center bg-[#f0f7fd]">
      {/* register form */}
      <form
        onSubmit={handleSubmit}
        className="h-[90%] w-[70%] shadow-2xl rounded-xl overflow-hidden bg-[#E2FFC8] flex"
      >
        {/* img section */}
        <div className="h-full w-[35%]">
          <img className="w-full h-full object-cover" src={study} alt="study" />
        </div>

        {/* register section */}
        <div className="h-full w-[65%] flex flex-col justify-start items-center gap-3 pt-10">
          <div className=" flex flex-col justify-center items-center">
            <h3 className=" text-4xl font-bold text-[#0C363C]">
              Create your account
            </h3>
            <p className="w-[60%] text-center font-semibold text-[#0c363c99]">
              Master your academics effortlessly with our powerful all-in-one
              study system.
            </p>
          </div>

          {/* inputs */}
          <div className="w-[50%] flex flex-col gap-2">
            {/* username */}
            <div className="border-2 border-[#0c363c42] focus-within:border-[#0C363C] w-full h-[50px] relative p-1 pb-3 rounded-xl">
              <input
                className="h-full w-full pt-7 pb-2 pl-1.5 border-none outline-none"
                name="username"
                type="text"
                value={user.username}
                onChange={handleChange}
              />
              <label
                className="absolute top-0 left-2 text-[#0c363c99] font-semibold"
                htmlFor="Name"
              >
                Username
              </label>
            </div>

            {/* email */}
            <div className="border-2 border-[#0c363c42] focus-within:border-[#0C363C] w-full h-[50px] relative p-1 pb-3 rounded-xl">
              <input
                className="h-full w-full pt-7 pb-2 pl-1.5 border-none outline-none"
                name="email"
                type="text"
                value={user.email}
                onChange={handleChange}
              />
              <label
                className="absolute top-0 left-2 text-[#0c363c99] font-semibold"
                htmlFor="Email"
              >
                Email
              </label>
            </div>

            {/* password */}
            <div className="border-2 border-[#0c363c42] w-full h-[50px] relative p-1 pb-3 rounded-xl focus-within:border-[#0C363C]">
              <input
                className="h-full w-full pt-7 pb-2 pl-1.5 border-none outline-none"
                name="password"
                type="text"
                value={user.password}
                onChange={handleChange}
              />
              <label
                className="absolute top-0 left-2 text-[#0c363c99] font-semibold"
                htmlFor="Password"
              >
                Password
              </label>
            </div>
            <div className="flex justify-between items-center">
              <Link className="font-bold text-[#0C363C]">
                {" "}
                Forgot Password?{" "}
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

            {/* Submit */}
            <button
              type="Submit"
              className="w-full py-2.5 bg-[#0C363C] text-white font-bold text-xl rounded-full"
            >
              Register
            </button>

            {/* loading */}
            {loading.register && <LoadingSpinner />}

            {/* seprtation */}
            <div className="flex items-center w-full my-4">
              <hr className="flex-grow border-t border-[#0C363C]" />
              <span className="mx-4 text-[#0C363C] font-medium">OR</span>
              <hr className="flex-grow border-t border-[#0C363C]" />
            </div>

            {/* google auth */}
            <button className="w-full py-2.5 bg-[#0c363c42] font-semibold text-xl rounded-full flex justify-start items-center gap-8">
              <FcGoogle className="text-4xl ml-5" />
              Continue with Google
            </button>

            <div className="flex gap-3 mx-auto font-semibold">
              <p className="text-[#0C363C]">Already have an account?</p>
              <Link to={"/auth/login"} className="text-blue-600">
                {" "}
                Log In
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
