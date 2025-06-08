import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import messagePng from "../../../Assets/Icon/message.png";

const NoChatSelected = () => {
  return (
    <div className="min-h-full flex flex-col justify-center items-center text-center px-4 bg-white dark:bg-[#0a081f] text-black dark:text-white transition-colors duration-300 relative">
      {/* Back button for small screens */}
      <button className="absolute top-4 left-4 sm:hidden text-xl text-black dark:text-white p-2 hover:bg-gray-200 dark:hover:bg-[#19173a] rounded-full transition">
        <FaArrowLeft />
      </button>

      <div className="w-32 h-32 sm:w-40 sm:h-40 mb-4">
        <img
          className="w-full h-full object-contain"
          src={messagePng}
          alt="No Chat"
        />
      </div>

      <div className="text-lg font-semibold mb-1">Welcome to SuPapp</div>
      <div className="text-sm text-gray-600 dark:text-[#8d8ea1]">
        Select a conversation to start chatting
      </div>
    </div>
  );
};

export default NoChatSelected;
