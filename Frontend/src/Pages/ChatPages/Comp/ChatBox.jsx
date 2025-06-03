import React from "react";
import ChatTop from "./ChatTop";
import { FaLink } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const ChatBox = () => {
  return (
    <div className="flex flex-col h-full w-full bg-white text-black dark:bg-[#0a081f] dark:text-white transition-colors duration-300">
      {/* Top bar */}
      <ChatTop />

      {/* Chat container */}
      <div className="flex-1 px-4 py-3 overflow-y-auto scrollbar-thin scrollbar-thumb-[#cfcfcf] dark:scrollbar-thumb-[#3d3b63] scrollbar-track-transparent">
        <p className="text-center text-[#6b6b6b] dark:text-[#8d8ea1]">
          hi this is container
        </p>
      </div>

      {/* Message input area */}
      <div className="w-full px-4 py-2 border-t border-gray-300 dark:border-[#29274a]">
        <div className="flex items-center w-full bg-gray-100 dark:bg-[#19173a] rounded-full px-4 py-2 shadow-md transition-colors duration-300">
          <div className="text-gray-500 dark:text-[#8d8ea1] text-xl mr-2 cursor-pointer hover:text-black dark:hover:text-white transition">
            <FaLink />
          </div>
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-transparent text-sm text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-[#727382] outline-none"
          />
          <div className="text-gray-500 dark:text-[#8d8ea1] text-2xl ml-2 cursor-pointer hover:text-black dark:hover:text-white transition">
            <IoSend />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
