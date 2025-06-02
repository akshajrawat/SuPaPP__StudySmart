import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { useSelector } from "react-redux";

const ChatTop = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <>
      {/* top section start */}
      <div className="w-full h-[10vh] py-5 flex border-b-2 justify-between border-[#7273825a]">
        {/* back button */}
        <div className="w-[15%] flex justify-start items-center text-3xl text-black dark:text-white sm:hidden">
          <span className="ml-6">
            <FaArrowLeft />
          </span>
        </div>
        {/* back button end */}
        {/* Info section */}
        <div className="w-[45%] pl-3 flex items-center">
          {/* profile photo */}
          <span className="w-[40px] h-[40px] rounded-full ">
            <img
              src={auth.user.profilePhoto}
              className="w-full h-full object-cover rounded-full"
              alt="user"
            />
          </span>
          {/* name */}
          <span className=" inline-flex flex-col w-[80%] pl-5">
            <p className="text-black dark:text-white font-bold text-lg">
            
              {auth.user.username}
            </p>
            <p className="text-[#8d8ea1] text-sm">@{auth.user.username}</p>
          </span>
        </div>
        {/* info section end */}
        {/* Call section */}
        <div className="w-[30%] sm:w-[30%] lg:w-[18%]  flex text-3xl text-black dark:text-white justify-around items-center">
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
