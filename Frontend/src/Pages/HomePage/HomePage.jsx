import React from "react";
import Cards from "./comps/Cards";

const cardDetails = [
  {
    name: "Crypto Wallet",
    animationUrl:
      "https://lottie.host/6738d52a-a3a5-49bf-8145-f5848a11b29a/ufF4w4dZRl.lottie",
    to: "/Supapp/wallet",
  },
  {
    name: "Ecommerce",
    animationUrl:
      "https://lottie.host/c4e230f6-5a8f-49f7-8044-f19eecefecbf/qwP0aR1eV5.lottie",
    to: "/",
  },
  {
    name: "Chat",
    animationUrl:
      "https://lottie.host/85e5502c-5214-4027-9260-f5ee026ae7f2/HJwCmLqIch.lottie",
    to: "/SuPaPP/chat",
  },
];

const HomePage = () => {
  return (
    <div className="text-white min-h-[calc(100vh-80.8px)] w-full flex flex-col justify-start items-center pt-5 ">
      {/* heading section */}
      <h1 className="text-4xl font-bold w-full flex justify-center gap-x-4 flex-wrap md:mt-10 lg:text-5xl text-shadow-md text-shadow-[#00000041]">
        <p className="text-[#9e92eb]">Create. </p>
        <p className="text-black dark:text-white">Connect. </p>
        <p className="text-[#9e92eb]">Sell. </p>
        <p className="text-black dark:text-white">Support.</p>
      </h1>

      {/* options section */}
      <div className=" w-full flex justify-center items-center p-2">
        <div className="bg-[#b6acf2bf] h-full w-[90%] flex flex-wrap justify-center items-center gap-5 py-5 rounded-4xl mt-4 lg:py-8 lg:gap-10 2xl:w-[70%] 2xl:gap-20 md:mt-12 shadow-md shadow-[#00000041]">
          {cardDetails.map((item, index) => {
            return (
              <Cards
                key={index}
                name={item.name}
                animationUrl={item.animationUrl}
                to={item.to}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
