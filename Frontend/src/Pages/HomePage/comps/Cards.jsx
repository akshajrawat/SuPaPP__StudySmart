import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Cards = () => {
  return (
    <div
      className="relative group w-full sm:w-[300px] h-[420px] p-5 rounded-3xl shadow-2xl bg-[#0a081f]/60 backdrop-blur-md border border-[#29274a] 
      hover:scale-[1.03] transition-all duration-300 ease-in-out hover:ring-2 hover:ring-[#5f5dc3]"
      style={{
        background:
          "linear-gradient(135deg, #0a081f 0%, #1a1838 40%, #29274a 70%, #3d3b63 100%)",
      }}
    >
      {/* Animation inside themed circular frame */}
      <div className="h-[65%] w-full flex justify-center items-center">
        <div className="w-[160px] h-[160px] rounded-full bg-[#1a1830] shadow-inner shadow-[#3d3b63] flex justify-center items-center p-2">
          <DotLottieReact
            src="https://lottie.host/c4e230f6-5a8f-49f7-8044-f19eecefecbf/qwP0aR1eV5.lottie"
            loop
          />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-center text-[#cdd3f3] mt-4 drop-shadow-md">
        E-commerce
      </h2>

      {/* Subtitle */}
      <p className="text-sm text-center text-[#a5a7cd] mt-1 leading-relaxed">
        Power your store with seamless shopping, smart payments & chat support.
      </p>
    </div>
  );
};

export default Cards;
