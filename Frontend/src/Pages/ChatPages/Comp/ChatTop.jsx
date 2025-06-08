import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../../../Store/Slice/chatSlice";

const ChatTop = () => {
  const chat = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  return (
    <div className="w-full h-[10vh] px-4 flex items-center justify-between border-b border-gray-300 dark:border-[#29274a] bg-white dark:bg-[#0a081f] text-black dark:text-white transition-colors duration-300">
      {/* Back Button */}
      <div className="w-[15%] flex items-center sm:hidden">
        <button
          onClick={() => {
            dispatch(setSelectedUser(null));
          }}
          className="text-xl p-2 hover:bg-gray-200 dark:hover:bg-[#19173a] rounded-full transition-colors duration-300"
        >
          <FaArrowLeft />
        </button>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-4 w-[45%]">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-400 dark:border-[#3d3b63] shadow-md">
          <img
            src={chat.selected.profilePhoto}
            className="w-full h-full object-cover"
            alt="user"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-xs sm:text-base font-semibold leading-tight">
            {chat.selected.username}
          </p>
          <span className="text-xs sm:text-sm text-gray-500 dark:text-[#8d8ea1] leading-tight">
            @{chat.selected.username}
          </span>
        </div>
      </div>

      {/* Call Buttons */}
      <div className="w-[30%] sm:w-[30%] lg:w-[18%] flex justify-end items-center gap-4 text-2xl">
        <button className="hover:bg-gray-200 dark:hover:bg-[#19173a] p-2 rounded-full transition-colors duration-300">
          <IoIosCall />
        </button>
        <button className="hover:bg-gray-200 dark:hover:bg-[#19173a] p-2 rounded-full transition-colors duration-300">
          <FaVideo />
        </button>
      </div>
    </div>
  );
};

export default ChatTop;
