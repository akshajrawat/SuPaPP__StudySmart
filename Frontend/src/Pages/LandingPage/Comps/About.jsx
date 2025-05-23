import React from "react";
import { Link } from "react-router-dom";
import { easeOut, motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const supaPPFeatures = [
  "All-in-one app: social, chat, pay & shop",
  "Easy & familiar design",
  "Supports PlayStation gear",
  "Fast & reliable anywhere",
  "No app switching needed",
];

const motionDelay = 0.2;

const About = () => {
  return (
    <>
      <div
        id="About"
        className=" flex md:justify-around lg:justify-between pt-40 h-[80vh]"
      >
        {/* picture start  */}
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className=" lg:flex justify-center items-center aspect-square h-[400px]  min-w-[400px] hidden"
        >
          <DotLottieReact
            src="https://lottie.host/2e6a3613-3959-4b27-b59d-a3b1f2f39fcc/MFXRv2NDJt.lottie"
            loop
            autoplay
          />
        </motion.div>
        {/* picture end */}
        <div className="flex flex-col gap-5 text-center sm:text-start justify-start items-center sm:items-start ">
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
            <motion.li
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
            </motion.li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
