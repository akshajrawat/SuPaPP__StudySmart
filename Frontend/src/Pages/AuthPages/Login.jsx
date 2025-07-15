import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import study from "../../Assets/Icon/study3.jpg";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Store/Slice/authSlice";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  
  // state for user
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // handling the submition
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

  // handling update of user
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    // login page start
    <div className="h-[calc(100vh-67px)] w-full flex justify-center items-center bg-[#f0f7fd]">
      {/* login form */}
      <form
        onSubmit={handleSubmit}
        className="h-[90%] w-[70%] shadow-2xl rounded-xl overflow-hidden bg-[#E2FFC8] flex"
      >
        {/* img section */}
        <div className="h-full w-[35%]">
          <img className="w-full h-full object-cover" src={study} alt="study" />
        </div>

        {/* login section */}
        <div className="h-full w-[65%] flex flex-col justify-start items-center gap-3 pt-15">
          <div className=" flex flex-col justify-center items-center">
            <h3 className=" text-4xl font-bold text-[#0C363C]">
              Welcome back to SuPaPP
            </h3>
            <p className="w-[60%] text-center font-semibold text-[#0c363c99]">
              Master your academics effortlessly with our powerful all-in-one
              study system.
            </p>
          </div>

          {/* inputs */}
          <div className="w-[50%] flex flex-col gap-2">
            {/* email */}
            <div className="border-2 border-[#0c363c42] focus-within:border-[#0C363C] w-full h-[50px] relative p-1 pb-3 rounded-xl">
              <input
                className="h-full w-full pt-7 pb-2 pl-1.5 border-none outline-none"
                name="email"
                value={user.email}
                onChange={handleChange}
                type="text"
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
                value={user.password}
                onChange={handleChange}
                type="text"
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
            <button className="w-full py-2.5 bg-[#0C363C] text-white font-bold text-xl rounded-full">
              Login
            </button>

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
              <p className="text-[#0C363C]">Dont have an account?</p>
              <Link to={"/auth/register"} className="text-blue-600">
                {" "}
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
