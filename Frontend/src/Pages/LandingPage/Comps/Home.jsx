import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const motionDelay = 0.2;

const Home = () => {
  return (
    <>
      <div className="flex md:justify-around lg:justify-between h-[70vh] mt-15">
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
    </>
  );
};

export default Home;
