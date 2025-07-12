import React from "react";
import {Link } from "react-router-dom"
import { FaStar } from "react-icons/fa";
import { SlSpeedometer } from "react-icons/sl";
import { VscProject } from "react-icons/vsc";
import study from "../../../Assets/Icon/study.jpg";
import { MdWaves } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";

const Home = () => {
  return (
    <div id="Home" className="w-full h-[calc(100vh-67px)] p-4">
      {/* home section*/}
      <div className="w-full h-full flex flex-col justify-start items-center gap-3 relative">
        <h1 className="text-4xl w-full md:w-[80%] sm:text-5xl md:text-6xl text-center font-medium text-[#153F45] pt-20">
          {" "}
          The ultimate platform for students who want to win{" "}
        </h1>
        <p className="w-full flex justify-center items-center text-xl text-[#153F45] text-center">
          Everything you need to ace your semester in one app
        </p>
        <div className="w-full flex justify-center items-center gap-4 mt-6">
          <button className="flex justify-center items-center text-white bg-[#0C363C] w-[130px] h-[45px] rounded-full text-lg shadow-md font-medium">
            <Link to={"/auth/login"}>GetStarted</Link>
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

        {/* 1 */}
        <div className="bg-[#0c363c] h-[300px] w-[200px] xl:h-[350px] xl:w-[280px] absolute bottom-0 left-5 rounded-2xl shadow-2xl shadow-[#00000089] overflow-hidden hidden lg:flex">
          <img className="w-full h-full object-cover" src={study} alt="" />
        </div>

        {/* 2 */}
        <div className="bg-[#0c363c] h-[210px] w-[130px] xl:h-[260px] xl:w-[200px] absolute bottom-0 left-60 xl:left-90 rounded-2xl shadow-2xl shadow-[#00000089] lg:flex flex-col justify-start pt-10 xl:pt-15 items-center gap-2 text-white hidden">
          <h3 className="text-xl xl:text-2xl font-bold"> 100+ </h3>
          <p className="text-center text-lg xl:text-xl w-[60%]">
            {" "}
            users already love the experience
          </p>
        </div>

        {/* 3 */}
        <div className="h-[150px] w-[240px] xl:h-[200px] xl:w-[320px] absolute bottom-0 rounded-2xl shadow-2xl shadow-[#00000089] lg:flex flex-col justify-end items-start gap-3 pl-3 pb-1 hidden">
          <div className="text-4xl">
            <VscProject />
          </div>
          <p className="text-left w-[80%] text-lg xl:text-xl">
            Enhance productivity through smarter study systems
          </p>
        </div>

        {/* 4 */}
        <div className="bg-[#E2FFC8] h-[210px] w-[130px] xl:h-[260px] xl:w-[180px] absolute bottom-0 right-60 xl:right-90 rounded-2xl shadow-2xl shadow-[#00000089] lg:flex flex-col justify-start pt-15 items-center gap-2 hidden">
          <h3 className="text-2xl font-bold">1000s</h3>
          <p className="text-center w-[50%]"> of Notes Shared and Counting</p>
        </div>

        <div className="bg-[#0c363c] h-[300px] w-[200px] xl:h-[350px] xl:w-[280px] absolute bottom-0 right-5 rounded-2xl shadow-2xl shadow-[#00000089] text-white lg:flex flex-col justify-end items-start gap-5 pl-4 pb-4 hidden">
          <div className="text-4xl">
            <SlSpeedometer />
          </div>
          <p className="text-left w-[80%] text-xl">
            Enhance productivity through smarter study systems
          </p>
        </div>

        {/* extras */}
        <div className="w-[50px] h-[50px] border-2 border-[#0C363C] rounded-full flex justify-center items-center absolute bottom-10 right-15 lg:top-45 lg:right-20  ">
          <MdWaves className="text-[#0C363C] text-3xl" />
        </div>

        <div className="w-[50px] h-[50px] bg-[#E2FFC8] rounded-full flex justify-center items-center shadow-md absolute bottom-25 right-2 lg:top-30 lg:right-10  ">
          <VscGraphLine className="text-[#0C363C] text-3xl" />
        </div>

        <div className="w-[50px] h-[50px] border-2 border-[#0C363C] rounded-full flex justify-center items-center absolute bottom-25 left-2 lg:top-30 lg:left-10">
          <FaArrowTrendUp className="text-[#0C363C] text-3xl" />
        </div>

        <div className="w-[50px] h-[50px] bg-[#0C363C] rounded-full flex justify-center items-center absolute bottom-10 left-15 lg:top-45 lg:left-20  ">
          <BsStars className="text-white text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Home;
