import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { verifyOtp } from "../../Store/Slice/authSlice";

const Otp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputRef = useRef([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // auto focus
  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

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

    if (value && index < newOtp.length - 1) {
      inputRef.current[index + 1].focus();
    }
  };

  // Handle keyDown
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRef.current[index - 1].focus();
      }
    }
  };

  // handle focus
  const handleFocus = (e) => {
    const length = e.target.value.length;
    e.target.setSelectionRange(length, length);
  };

  // handle Submit

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const finalOtp = otp.join("");
    if (finalOtp.length != 6) {
      toast.error("Incomplete Otp");
      return;
    }

    const submit = {
      email: user.email,
      otp: finalOtp,
    };

    try {
      await dispatch(verifyOtp(submit)).unwrap();
      navigate("/supapp");
    } catch (error) {
      console.error("Error while sending otp ", error);
    }
  };

  return (
    <div className="h-[calc(100vh-67px)] w-full flex justify-center items-center bg-[#f0f7fd]">
      {/* otp form */}
      <form
        onSubmit={HandleSubmit}
        className="h-[55%] w-[50%] shadow-2xl rounded-xl overflow-hidden bg-[#E2FFC8] flex flex-col justify-center"
      >
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
                className="h-[65px] w-[65px] outline-2 outline-[#153F45] text-2xl pl-6 rounded-2xl focus:outline-4"
                ref={(el) => (inputRef.current[index] = el)}
                key={index}
                type="text"
                value={item}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onClick={handleFocus}
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

        <button className="w-[70%] mx-auto mt-5 py-2.5 bg-[#0C363C] text-white font-bold text-xl rounded-full">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Otp;
