import React from "react";
import { FaSearch } from "react-icons/fa";

const SideChat = () => {
  return (
    <>
      {/* side section */}
      <div className=" flex justify-center items-center h-[10%] px-2">
        <div className="flex h-[70%]  w-full border border-[#727382] rounded-xl mt-2 p-3">
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
    </>
  );
};

export default SideChat;
