import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, setSelectedUser } from "../../../Store/Slice/chatSlice";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdGroupAdd } from "react-icons/md";
import { IoSettings } from "react-icons/io5";

const SideChat = () => {
  const dispatch = useDispatch();
  const chat = useSelector((state) => state.chat);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

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
      <div className="h-[79%] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-[#3d3b63] scrollbar-track-transparent">
        {chat.users?.filteredUsers?.map((item, index) => (
          <div
            onClick={() => {
              dispatch(setSelectedUser(item));
            }}
            key={index}
            className="flex items-center px-6 py-4 hover:bg-gray-100 dark:hover:bg-[#19173a] transition-colors border-b border-gray-200 dark:border-[#29274a] cursor-pointer"
          >
            {/* profile photo */}
            <div className="w-12 h-12 rounded-full flex-shrink-0 shadow-md border border-gray-300 dark:border-[#3d3b63] relative">
              <img
                src={item.profilePhoto}
                alt="user"
                className="w-full h-full object-cover rounded-full"
              />
              {chat.onlineUsers.includes(item._id) && (
                <span
                  className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-[#0a081f]"
                  title="Online"
                />
              )}
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

      {/* Options section */}
      <div className="h-[8%] text-black dark:text-white border-t border-gray-300 dark:border-[#29274a]">
        <ul className="w-full h-full flex text-[#89888d] dark:text-[#8d8ea1] text-3xl justify-evenly">
          <li className="relative border-l border-gray-300 dark:border-[#29274a] w-[33%] h-full flex justify-center items-center hover:text-black dark:hover:text-white before:content-['Exit'] before:absolute before:text-lg before:font-bold before:bg-black  dark:before:bg-[#29274a] before:text-white dark:before:text-white before:px-5 before:rounded-full before:opacity-0 hover:before:-translate-y-9 hover:before:opacity-100 before:transition-all before:ease-in-out after:h-0 after:w-0 after:border-l-[8px] after:border-r-[8px] after:border-t-[10px] after:border-white dark:after:border-t-[#29274a] after:border-r-transparent after:border-l-transparent hover:after:-translate-y-5 after:absolute after:opacity-0 hover:after:opacity-100 after:transition-all after:ease-in-out after:border-t-black before:whitespace-nowrap">
            <FaArrowLeftLong />
          </li>
          <li className="relative border-l border-gray-300 dark:border-[#29274a] w-[33%] h-full flex justify-center items-center hover:text-black dark:hover:text-white before:content-['Add_Group'] before:absolute before:text-lg before:font-bold before:bg-black  dark:before:bg-[#29274a] before:text-white dark:before:text-white before:px-5 before:rounded-full before:opacity-0 hover:before:-translate-y-9 hover:before:opacity-100 before:transition-all before:ease-in-out after:h-0 after:w-0 after:border-l-[8px] after:border-r-[8px] after:border-t-[10px] after:border-white dark:after:border-t-[#29274a] after:border-r-transparent after:border-l-transparent hover:after:-translate-y-5 after:absolute after:opacity-0 hover:after:opacity-100 after:transition-all after:ease-in-out after:border-t-black before:whitespace-nowrap">
            <MdGroupAdd />
          </li>
          <li className="relative border-l border-gray-300 dark:border-[#29274a] w-[33%] h-full flex justify-center items-center hover:text-black dark:hover:text-white before:content-['Settings'] before:absolute before:text-lg before:font-bold before:bg-black  dark:before:bg-[#29274a] before:text-white dark:before:text-white before:px-5 before:rounded-full before:opacity-0 hover:before:-translate-y-9 hover:before:opacity-100 before:transition-all before:ease-in-out after:h-0 after:w-0 after:border-l-[8px] after:border-r-[8px] after:border-t-[10px] after:border-white dark:after:border-t-[#29274a] after:border-r-transparent after:border-l-transparent hover:after:-translate-y-5 after:absolute after:opacity-0 hover:after:opacity-100 after:transition-all after:ease-in-out after:border-t-black before:whitespace-nowrap">
            <IoSettings />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideChat;
