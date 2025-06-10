import React from "react";
import Cards from "./comps/Cards";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const cardDetails = [
  {
    name: "Payment ",
    component: (
      <DotLottieReact
        src="https://lottie.host/6738d52a-a3a5-49bf-8145-f5848a11b29a/ufF4w4dZRl.lottie"
        loop
        autoplay
      />
    ),
    link: "/",
  },
  {
    name: "Ecommerce ",
    component: (
      <DotLottieReact
        src="https://lottie.host/c4e230f6-5a8f-49f7-8044-f19eecefecbf/qwP0aR1eV5.lottie"
        loop
        autoplay
      />
    ),
    link: "/",
  },
  {
    name: "Chat ",
    component: (
      <DotLottieReact
        src="https://lottie.host/85e5502c-5214-4027-9260-f5ee026ae7f2/HJwCmLqIch.lottie"
        loop
        autoplay
      />
    ),
    link: "/SuPaPP/chat",
  },
];

const HomePage = () => {
  return (
    <div className="text-white min-h-[calc(100vh-80.8px)] w-full flex flex-col justify-start items-center pt-5">
      {/* heading */}
      <h1 className="text-4xl font-bold w-full flex justify-center gap-x-4 flex-wrap lg:mt-4 lg:text-5xl">
        <p className="text-[#4fd1d9]">Create. </p>
        <p>Connect. </p>
        <p className="text-[#4fd1d9]">Sell. </p>
        <p>Support.</p>
      </h1>
      <div className=" w-full flex justify-center items-center p-2">
        <div className="bg-[#0d0446bf] h-full w-[90%] flex flex-wrap justify-center items-center gap-5 py-5 rounded-4xl mt-4 lg:py-8 lg:gap-20 lg:w-[70%] lg:mt-8">
          {cardDetails.map((item, index) => {
            return (
              <Cards
                key={index}
                name={item.name}
                animation={item.component}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
