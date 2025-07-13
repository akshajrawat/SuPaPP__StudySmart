import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inpuRef = useRef([]);

  // handles the timer
  useEffect(() => {
    let interval;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer]);

  // handle chnage of input
  const handleChange = (e, index) => {
    const value = e.target.value.slice(-1);

    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];

    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <div className="h-[calc(100vh-67px)] w-full flex justify-center items-center bg-[#f0f7fd]">
      {/* otp form */}
      <form className="h-[55%] w-[50%] shadow-2xl rounded-xl overflow-hidden bg-[#E2FFC8] flex flex-col justify-center">
        {/* otp top section */}
        <div className=" flex flex-col justify-center items-center gap-2">
          <h3 className=" text-4xl font-bold text-[#0C363C]">Enter your OTP</h3>
          <p className="w-[90%] text-center text-xl font-semibold text-[#0c363c99]">
            Your OTP has been sent to your registered email address. Please
            check your inbox or spam folder.
          </p>
        </div>

        {/* input section */}
        <div className="w-full flex gap-6 justify-center items-center mt-5">
          {otp.map((item, index) => {
            return (
              <input
                className="h-[65px] w-[65px] border-2 border-black text-2xl pl-6.5 rounded-2xl focus:border-4"
                ref={(el) => (inpuRef.current[index] = el)}
                key={index}
                type="text"
                value={item}
                onChange={(e) => handleChange(e, index)}
              />
            );
          })}
        </div>

        <p className="mx-auto text-xl font-semibold mt-5 flex gap-3">
          {" "}
          Resend available in {timer}s :{" "}
          <Link
            className={`${timer !== 0 ? "text-gray-400 " : "text-blue-600"}`}
          >
            Resend
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Otp;
