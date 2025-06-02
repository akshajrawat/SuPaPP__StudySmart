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
      <div className=" h-[82vh]">hi this is container</div>
      {/* Message input portion */}
      <div className=" w-full h-[10vh] p-1">
        {/* floating input */}
        <div className="flex h-[80%] w-full border border-[#727382] rounded-full ">
          <div className="h-full w-[15%] flex justify-center items-center text-black dark:text-white">
            <FaLink />
          </div>
          <input
            className="h-full  w-[70%] text-[#727382] border-none outline-none pl-5"
            type="text"
            placeholder="Message..."
          />
          <div className="h-full flex items-center justify-center w-[15%] text-2xl text-black dark:text-white">
            <IoSend />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;

// Watch me build a chat interface for my supapp
//  we will use insta and the ui just shown as an inference
// This much for this video
// Follow for more !!!!
