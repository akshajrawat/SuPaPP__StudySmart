import React from "react";
import Cards from "./comps/Cards";

const HomePage = () => {
  return (
    <div className="text-white h-[calc(100vh-80.8px)] w-full flex flex-col">
      {/* heading */}
      <h1 className="text-4xl font-bold text-shadow-2xs text-shadow-gray-50 h-[20%] w-full flex justify-center">
        Explore Our Features!!!!
      </h1>
      <div className="h-[80%] w-full flex justify-center">
        <Cards />
      </div>
    </div>
  );
};

export default HomePage;
