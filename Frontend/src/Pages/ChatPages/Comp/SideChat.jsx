import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../Store/authSlice/chatSlice";

const SideChat = () => {
  const dispatch = useDispatch();
  const chat = useSelector((state) => state.chat);

  // fetching all the users
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  console.log(chat.users);

  const auth = useSelector((state) => state.auth);
  return (
    <>
      {/* side section serchbar */}
      <div className=" flex justify-center items-center h-[13%] p-3 border-b-2 border-[#7273825a]">
        <div className="flex h-[60%]  w-full border border-[#ffffff7c] rounded-xl mt-2 p-3">
          <div className="h-full w-[12%] lg:w-[10%] text-xl flex justify-center items-center text-black dark:text-white">
            <FaSearch className="mr-2" />
          </div>
          <input
            className="h-full  w-[88%] lg:w-[90%] text-[#727382] border-none outline-none pl-2"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Side section userContainer */}
      <div className="">
        {chat.users?.filteredUsers?.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full flex items-center border-b-2 border-[#7273825a] px-8 py-4"
            >
              <span className="w-[40px] h-[40px] rounded-full ">
                <img
                  src={item.profilePhoto}
                  className="w-full h-full object-cover rounded-full"
                  alt="user"
                />
              </span>
              <span className=" inline-flex flex-col w-[70%] lg:w-[75%] pl-5">
                <p className="text-black dark:text-white font-bold text-lg">
                  {item.username}
                </p>
                <p className="text-[#8d8ea1] text-sm">@{item.username}</p>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SideChat;
