import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loaderStop, verifyOtp } from "../../Store/Slice/authSlice";
import toast from "react-hot-toast";
import { LoadingSpinner } from "../../Components/Ui/Messages";

const Otp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [otp, setOtp] = useState(Array(6).fill(""));

  const inputRef = useRef([]);
  console.log(auth);
  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  // useeffect
  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/SuPaPP");
    }
  }, [auth.isAuthenticated, navigate]);

  // Handle the value of each otp input field
  const handleChange = (e, index) => {
    const value = e.target.value;

    if (isNaN(value)) return;

    const newOtp = [...otp];

    newOtp[index] = value.slice(-1);

    setOtp(newOtp);

    if (value && index < 5 && inputRef.current[index + 1]) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRef.current[index].setSelectionRange(1, 1);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (!newOtp[index] && index > 0 && inputRef.current[index - 1]) {
        inputRef.current[index - 1].focus();
        setOtp(newOtp);
      } else {
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
    console.log(otp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // joins the otp on submit cand create a 6 length string
    const finalOtp = otp.join("");
    const email = auth.user.email;

    if (!finalOtp || !email) {
      dispatch(loaderStop());
      toast.error("Error! Try Again Later");
      throw new Error("Error at handle submit || OTP");
    }

    if (finalOtp.length < 6) {
      dispatch(loaderStop());
      toast.error("Otp must be 6-digit");
      return;
    }
    const submit = {
      email: email,
      otp: finalOtp,
    };

    // verifyotp
    dispatch(verifyOtp(submit));

    otp.forEach((index) => {
      otp[index] = "";
    });
  };

  return (
    <div className="text-white flex justify-center items-center h-[calc(100vh-64px)] max-w-* px-3">
      <form
        className="bg-[#ffffff18] backdrop:blur-3xl rounded-2xl max-w-sm md:max-w-xl xl:max-w-2xl flex flex-col items-center gap-3 px-3 md:px-7 py-5 border-2 border-[#7273827d] dark:border-0"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl md:text-3xl text-black dark:text-white font-bold flex justify-center mt-4">
          Enter OTP
        </h1>
        <div className="w-full flex justify-around items-center gap-4 flex-wrap">
          {otp.map((value, index) => {
            return (
              <input
                className="dark:bg-[#00000061] bg-[#4a4a4a49] h-[40px] w-[40px] md:w-[60px] md:h-[60px] rounded-lg outline-none border border-[#7273827d] pl-4 md:pl-6 md:text-lg"
                ref={(input) => (inputRef.current[index] = input)}
                key={index}
                type="text"
                value={otp[index]}
                onClick={() => handleClick(index)}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            );
          })}
        </div>
        <button
          disabled={auth.loading}
          className="bg-[#00f7ff] hover:bg-[#6fcacd] active:bg-[#29888b] w-[100%] mt-3 py-2 rounded-xl font-bold text-lg"
        >
          Verify Otp
        </button>
        <div>
          <span className="text-black dark:text-white">
            Didn't receive code?
          </span>
          <Link className="text-[#00f7ff] font-bold hover:text-[#6fcacd] active:text-[#29888b]">
            Resend
          </Link>
        </div>
        {auth.loading && <LoadingSpinner />}
      </form>
    </div>
  );
};

export default Otp;
