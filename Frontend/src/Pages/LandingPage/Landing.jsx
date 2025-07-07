import React from "react";
import { FaStar } from "react-icons/fa";
import { SlSpeedometer } from "react-icons/sl";
import { VscProject } from "react-icons/vsc";
import study from "../../Assets/Icon/study.jpg"

const Landing = () => {
  return (
    <div className="w-full h-[calc(100vh-67px)]">
      {/* home section*/}
      <div className="w-full h-full flex flex-col justify-start items-center gap-3 relative">
        <h1 className="text-5xl w-[50%] text-center font-medium text-[#153F45] pt-20">
          {" "}
          The ultimate platform for students who want to win{" "}
        </h1>
        <p className="w-full flex justify-center items-center text-xl text-[#153F45]">
          Everything you need to ace your semester in one app
        </p>
        <div className="w-full flex justify-center items-center gap-4 mt-6">
          <button className="flex justify-center items-center text-white bg-[#0C363C] w-[130px] h-[45px] rounded-full text-lg shadow-md font-medium">
            GetStarted
          </button>
          <button className="flex justify-center items-center bg-white text-[#0C363C] w-[130px] h-[45px] rounded-full text-lg shadow-md font-medium">
            Explore
          </button>
        </div>
        <div className="flex w-full mx-auto justify-center items-center pt-4">
          <FaStar className="text-yellow-500 text-xl" />
          <FaStar className="text-yellow-500 text-xl" />
          <FaStar className="text-yellow-500 text-xl" />
          <FaStar className="text-yellow-500 text-xl" />
          <FaStar className="text-yellow-500 text-xl" />
          <p className="ml-2 text-xl flex justify-center items-center font-semibold mt-1 text-[#0C363C]">
            5.0
          </p>
        </div>

        {/* cards */}
        <div className="bg-[#0c363c] h-[350px] w-[280px] absolute bottom-5 left-10 rounded-2xl shadow-2xl shadow-[#00000089] overflow-hidden">
          <img className="w-full h-full object-cover" src={study} alt="" />
        </div>
        <div className="bg-[#0c363c] h-[260px] w-[200px] absolute bottom-5 left-90 rounded-2xl shadow-2xl shadow-[#00000089] flex flex-col justify-start pt-15 items-center gap-2 text-white">
          <h3 className="text-2xl font-bold"> 100+ </h3>
          <p className="text-center text-xl w-[60%]">
            {" "}
            users already love the experience
          </p>
        </div>
        <div className=" h-[200px] w-[320px] absolute bottom-5 rounded-2xl shadow-2xl shadow-[#00000089] flex flex-col justify-end items-start gap-5 pl-4 pb-4">
          <div className="text-4xl">
            <VscProject />
          </div>
          <p className="text-left w-[80%] text-xl">
            Enhance productivity through smarter study systems
          </p>
        </div>
        <div className="bg-[#E2FFC8] h-[260px] w-[180px] absolute bottom-5 right-90 rounded-2xl shadow-2xl shadow-[#00000089] flex flex-col justify-start pt-15 items-center gap-2">
          <h3 className="text-2xl font-bold">1000s</h3>
          <p className="text-center w-[50%]"> of Notes Shared and Counting</p>
        </div>
        <div className="bg-[#0c363c] h-[350px] w-[280px] absolute bottom-5 right-10 rounded-2xl shadow-2xl shadow-[#00000089] text-white flex flex-col justify-end items-start gap-5 pl-4 pb-4">
          <div className="text-4xl">
            <SlSpeedometer />
          </div>
          <p className="text-left w-[80%] text-xl">
            Enhance productivity through smarter study systems
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
