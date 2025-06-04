import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, setSelectedUser } from "../../../Store/Slice/chatSlice";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdGroupAdd } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";

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
              localStorage.setItem("selectedUser", JSON.stringify(item));
              dispatch(setSelectedUser(item));
            }}
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

      {/* Options section */}
      <div className="h-[8%] text-black border-t border-[#29274a]">
        <ul className="w-full h-full flex text-[#89888d] text-3xl justify-evenly">
          <li className="border-l border-[#29274a]  w-[33%] h-full flex justify-center items-center hover:text-white before:content-['Exit'] before:absolute before:text-lg before:font-bold before:bg-white before:text-black before:px-5 before:rounded-full before:opacity-0 hover:before:-translate-y-9 hover:before:opacity-100 before:transition-all before:ease-in-out after:h-0 after:w-0 after:border-l-[8px] after:border-r-[8px] after:border-t-[10px] after:border-white after:border-r-transparent after:border-l-transparent hover:after:-translate-y-5 after:absolute after:opacity-0 hover:after:opacity-100 after:transition-all after:ease-in-out">
            <FaArrowLeftLong />
          </li>
          <li className="relative  border-l border-[#29274a] w-[33%] h-full flex justify-center items-center hover:text-white before:content-['Add_Group'] before:absolute before:text-lg before:font-bold before:bg-white before:text-black before:px-5 before:rounded-full before:opacity-0 hover:before:-translate-y-9 hover:before:opacity-100 before:transition-all before:ease-in-out after:h-0 after:w-0 after:border-l-[8px] after:border-r-[8px] after:border-t-[10px] after:border-white after:border-r-transparent after:border-l-transparent hover:after:-translate-y-5 after:absolute after:opacity-0 hover:after:opacity-100 after:transition-all after:ease-in-out">
            <MdGroupAdd className="hover:text-white" />
          </li>
          <li className="relative border-l border-[#29274a]  w-[33%] h-full flex justify-center items-center hover:text-white  before:content-['Follow'] before:absolute before:text-lg before:font-bold before:bg-white before:text-black before:px-5 before:rounded-full before:opacity-0 hover:before:-translate-y-9 hover:before:opacity-100 before:transition-all before:ease-in-out after:h-0 after:w-0 after:border-l-[8px] after:border-r-[8px] after:border-t-[10px] after:border-white after:border-r-transparent after:border-l-transparent hover:after:-translate-y-5 after:absolute after:opacity-0 hover:after:opacity-100 after:transition-all after:ease-in-out">
            <IoPersonAdd className="hover:text-white" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideChat;
