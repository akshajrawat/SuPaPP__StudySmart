import React from "react";
import messagePng from "../../Assets/Icon/message.png";

const NoSelected = () => {
  return (
    <div className="min-h-full w-full flex flex-col justify-center items-center text-center pl-16 bg-white dark:bg-[#0a081f] text-black dark:text-white transition-colors duration-300 relative">
      <div className="w-32 h-32 sm:w-40 sm:h-40 mb-4">
        <img
          className="w-full h-full object-contain"
          src={messagePng}
          alt="No Chat"
        />
      </div>

      <div className="text-lg font-semibold mb-1">
        Welcome to SuPapp WorkShop
      </div>
      <div className="text-sm text-gray-600 dark:text-[#8d8ea1]">
        Select a workSpace to start working!!
      </div>
    </div>
  );
};

export default NoSelected;
