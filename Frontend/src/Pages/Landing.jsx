import React from "react";
import { Link } from "react-router-dom";
import {
  easeIn,
  easeInOut,
  easeOut,
  easingDefinitionToFunction,
  motion,
} from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
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

const supaPPFeatures = [
  "All-in-one app: social, chat, pay & shop",
  "Easy & familiar design",
  "Supports PlayStation gear",
  "Fast & reliable anywhere",
  "No app switching needed",
];

const motionDelay = 0.2;

const Landing = () => {
  return (
    // Landing page start
    <div className="p-4 pb-20 mt-4 cursor-pointer select-none">
      {/* Intro section start */}
      <div className="flex md:justify-around lg:justify-between h-[calc(100vh-64px)] ">
        {/* heading start */}
        <div className="flex flex-col gap-5 ">
          <h2 className="flex flex-col text-5xl xl:text-7xl font-semibold">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="dark:text-white"
            >
              SuPaPP
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="text-[#4fd1d9]"
            >
              Super APP
            </motion.span>
          </h2>
          <motion.span
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 2 * motionDelay,
            }}
            className="text-lg font-semibold text-[#727382] md:w-[400px] sm:w-[550px]"
          >
            This Hyper-Versatile SuPaPP Concept Brings All Your Daily Apps
            Together — Making Life Far More Seamless and Efficient.
          </motion.span>
          {/* button section start */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 3 * motionDelay,
            }}
            className=" flex gap-6 mt-7"
          >
            <Link
              to={"./"}
              className=" w-[111px] h-[38px] bg-[#4fd1d9] dark:text-black font-semibold text-white px-3 py-1 rounded-sm flex justify-center items-center"
            >
              Get Started
            </Link>
            <Link
              to={"./"}
              className=" text-[#727382] h-[38px] flex justify-center items-center gap-1 font-medium"
            >
              Explore Features <FaLongArrowAltRight />
            </Link>
          </motion.div>
          {/* button section end */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 4 * motionDelay,
            }}
            className="flex w-full h-[100px] flex-wrap text-[#7273827e] text-2xl font-bold mt-15"
          >
            <span className="w-[50%] flex justify-center items-center md:justify-start">
              SuPaPP
            </span>
            <span className="w-[50%] flex justify-center items-center md:justify-start">
              SuPaPP
            </span>
            <span className="w-[50%] flex justify-center items-center md:justify-start">
              SuPaPP
            </span>
            <span className="w-[50%] flex justify-center items-center md:justify-start">
              SuPaPP
            </span>
          </motion.div>
        </div>
        {/* heading end */}

        {/* picture start  */}
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 80 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
            delay: 1 * motionDelay,
          }}
          className=" lg:flex justify-center items-start h-[400px] hidden "
        >
          <DotLottieReact
            src="https://lottie.host/bed1ff33-08f1-42f3-873e-a495ce6c80a6/Qf2fPCXn8g.lottie"
            loop
            autoplay
          />
        </motion.div>
        {/* picture end */}
      </div>
      {/* Intro section end */}

      {/* Information section start */}
      <div
        id="About"
        className=" flex md:justify-around lg:justify-between pt-40"
      >
        {/* picture start  */}
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className=" lg:flex justify-center items-center aspect-square h-[300px]  min-w-[400px] hidden"
        >
          <DotLottieReact
            src="https://lottie.host/2e6a3613-3959-4b27-b59d-a3b1f2f39fcc/MFXRv2NDJt.lottie"
            loop
            autoplay
          />
        </motion.div>
        {/* picture end */}
        <div className="flex flex-col gap-5 text-center sm:text-start justify-start items-center sm:items-start h-[100vh]">
          <motion.h3
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: easeOut, delay: motionDelay }}
            className="flex justify-center items-center text-4xl font-bold gap-2 whitespace-nowrap"
          >
            <span className="dark:text-white"> Made with </span>
            <span className="text-[#4fd1d9]">Excellence</span>
          </motion.h3>
          <span className="text-lg font-semibold text-[#727382] md:max-w-[450px]">
            Your SuPaPP isnt just an app — its your all-in-one digital
            companion. Designed to run seamlessly across Android, iOS, and the
            web, it brings together all your essential features in one place.
          </span>
          <ul className="text-[#727382]  text-sm font-semibold flex flex-col items-start  gap-4 mt-4">
            {supaPPFeatures.map((item, index) => {
              return (
                <motion.li
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: easeOut,
                  }}
                  key={index}
                  className="relative before:content-[''] before:absolute before:-left-5 before:top-2 before:h-1 before:w-3 before:bg-[#4fd1d9] sm:ml-6"
                >
                  {item}
                </motion.li>
              );
            })}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: easeOut,
              }}
              className="w-full flex justify-start items-center"
            >
              <Link
                to={"./"}
                className=" w-[111px] h-[38px] bg-[#4fd1d9] font-semibold text-white dark:text-black px-3 py-1 rounded-sm flex justify-center items-center mt-4 ml-8 sm:ml-1"
              >
                About Us
              </Link>
            </motion.div>
          </ul>
        </div>
      </div>
      {/* Information section end */}
      {/* Features section start */}
      <div
        id="Features"
        className=" flex flex-col justify-center items-center gap-5 bg-[#dfdfdf44] dark:bg-[#14131A]  mx-auto border border-[#727382] rounded-2xl pb-10 px-10 mt-4"
      >
        <h3 className="flex justify-center items-center text-4xl font-semibold gap-2 whitespace-nowrap mt-6">
          <span className="dark:text-white"> Our </span>
          <span className="text-[#4fd1d9]">Features</span>
        </h3>
        <div className="flex justify-center items-center gap-10 flex-wrap">
          {features.map((item, index) => {
            return (
              <div
                className="flex flex-col justify-center items-center bg-[#c5c5c524] w-[210px] md:w-[270px] lg:w-[180px] h-[222px] border border-[#727382] rounded-2xl"
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
      {/* Features section end */}
    </div>
    // landing page end
  );
};

export default Landing;
