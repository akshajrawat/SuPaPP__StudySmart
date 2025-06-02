import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaVideo } from "react-icons/fa";

const ChatTop = () => {
  return (
    <>
      {/* top section start */}
      <div className="w-full h-[9vh] py-5 flex border-b-2 border-[#7273825a]">
        {/* back button */}
        <div className="w-[20%] flex justify-start items-center text-2xl text-black dark:text-white">
          <span className="ml-4">
            <FaArrowLeft />
          </span>
        </div>
        {/* back button end */}
        {/* Info section */}
        <div className="w-[40%]  flex items-center">
          {/* profile photo */}
          <span className="bg-red-600 w-[40px] h-[40px] rounded-full"></span>
          {/* name */}
          <span className=" inline-flex flex-col w-[80%] pl-5">
            <p className="text-black dark:text-white font-bold text-lg">
              {" "}
              John Doe
            </p>
            <p className="text-[#8d8ea1] text-sm">@John_doe</p>
          </span>
        </div>
        {/* info section end */}
        {/* Call section */}
        <div className="w-[40%] flex text-3xl text-black dark:text-white justify-evenly items-center">
          <span>
            <IoIosCall />
          </span>
          <span>
            <FaVideo />
          </span>
        </div>
        {/* call section end */}
      </div>
      {/* top section start */}
    </>
  );
};

export default ChatTop;
