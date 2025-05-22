import React from "react";
import {
  FaUsers,
  FaComments,
  FaCreditCard,
  FaShoppingBag,
} from "react-icons/fa";

const features = [
  {
    name: "Social Media",
    icon: <FaUsers />,
  },
  {
    name: "Chatting",
    icon: <FaComments />,
  },
  {
    name: "Payment",
    icon: <FaCreditCard />,
  },
  {
    name: "Shopping",
    icon: <FaShoppingBag />,
  },
];

const Features = () => {
  return (
    <>
      <div id="Features" className=" min-h-[100vh] flex items-center justify-center mt-30 md:mt-15">
        <div className=" flex flex-col justify-start items-center gap-5 bg-[#dfdfdf44] dark:bg-[#14131A] w-full min-h-[85vh] rounded-2xl pb-10 px-10 mt-15">
          <h3 className="flex justify-center items-center text-4xl font-semibold gap-2 whitespace-nowrap mt-8">
            <span className="dark:text-white"> Our </span>
            <span className="text-[#4fd1d9]">Features</span>
          </h3>
          <div className="flex justify-center items-center gap-10 flex-wrap">
            {features.map((item, index) => {
              return (
                <div
                  className="flex flex-col justify-center items-center bg-[#c5c5c524] w-[210px] md:w-[270px] lg:w-[350px] h-[222px]  rounded-2xl"
                  key={index}
                >
                  <div className="w-full h-[80%] flex justify-center items-center text-6xl text-[#4fd1d9]">
                    {item.icon}
                  </div>
                  <div className="w-full h-[20%] flex justify-center items-center text-xl font-bold dark:text-white">
                    {item.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
