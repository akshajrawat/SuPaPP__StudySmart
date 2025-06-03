import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../Store/Slice/chatSlice";

const SideChat = () => {
  const dispatch = useDispatch();
  const chat = useSelector((state) => state.chat);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const auth = useSelector((state) => state.auth);

  return (
    <div className="h-full w-full bg-white dark:bg-[#0a081f] text-black dark:text-white transition-colors duration-300">
      {/* Search bar */}
      <div className="flex items-center justify-center h-[13%] px-4 py-3 border-b border-gray-300 dark:border-[#29274a]">
        <div className="flex items-center w-full bg-gray-100 dark:bg-[#19173a] rounded-full px-4 py-2 shadow-inner">
          <FaSearch className="text-gray-500 dark:text-[#8d8ea1] text-lg mr-2" />
          <input
            type="text"
            placeholder="Search users..."
            className="bg-transparent w-full text-sm text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-[#8d8ea1] outline-none"
          />
        </div>
      </div>

      {/* User list */}
      <div className="h-[87%] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-[#3d3b63] scrollbar-track-transparent">
        {chat.users?.filteredUsers?.map((item, index) => (
          <div
            key={index}
            className="flex items-center px-6 py-4 hover:bg-gray-100 dark:hover:bg-[#19173a] transition-colors border-b border-gray-200 dark:border-[#29274a] cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 shadow-md border border-gray-300 dark:border-[#3d3b63]">
              <img
                src={item.profilePhoto}
                alt="user"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col ml-4">
              <p className="text-black dark:text-white font-medium text-base">
                {item.username}
              </p>
              <p className="text-gray-500 dark:text-[#8d8ea1] text-sm">
                @{item.username}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideChat;
