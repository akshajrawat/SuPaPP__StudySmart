import React from "react";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Cards = ({ name, animationUrl, to }) => {
  return (
    <div className="h-[400px] w-[350px] bg-[#9e92eb] flex flex-col rounded-2xl shadow-md shadow-[#00000041] gap-2 justify-start items-center">
      <div className="h-[80%] w-full rounded-t-4xl">
        <DotLottieReact
          src={animationUrl}
          autoplay={false}
          loop
          playOnHover={true}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      <Link
        to={to}
        className="h-[15%] w-[90%] rounded-full bg-black hover:bg-white hover:text-black flex items-center justify-center text-2xl font-bold gap-3 transition-all ease-in-out shadow-md shadow-[#00000041]"
      >
        {name}
      </Link>
    </div>
  );
};

export default Cards;
