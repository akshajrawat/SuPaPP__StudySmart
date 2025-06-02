import React from "react";
import ChatTop from "./ChatTop";
import { FaLink } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const ChatBox = () => {
  return (
    <>
      {/* top section */}
      <ChatTop />
      {/* Chat container */}
      <div className=" h-[80vh]">hi this is container</div>
      {/* Message input portion */}
      <div className=" w-full h-[10vh] p-1">
        {/* floating input */}
        <div className="flex h-[80%] w-full border border-[#727382] rounded-full mt-2">
          <div className="h-full md:w-[10%] lg:w-[8%] w-[15%] flex justify-center items-center text-black dark:text-white">
            <FaLink />
          </div>
          <input
            className="h-full w-[70%] md:w-[84%] text-[#727382] border-none outline-none "
            type="text"
            placeholder="Message..."
          />
          <div className="h-full flex items-center justify-center md:w-[8%] w-[15%] text-2xl text-black dark:text-white">
            <IoSend />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;

