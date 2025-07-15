import React from "react";
import AboutCards from "../Comps/AboutCards";
import { VscProject } from "react-icons/vsc";
import study from "../../../Assets/Icon/study2.jpg";

const studyBenefits = [
  {
    id: 1,
    title: "Enhancing Learning with Smart Tech",
    desc: "With advanced tools and intelligent features, our app helps you study more effectively. From organizing notes to AI-powered doubt solving, we make learning smoother and more efficient.",
  },
  {
    id: 2,
    title: "Optimized Study Workflow",
    desc: "Maximize your focus and productivity with structured planners, Pomodoro timers, and task trackers. Our tools are designed to streamline your study routine and save time.",
  },
  {
    id: 3,
    title: "AI-Powered Study Support",
    desc: "Leverage the power of AI to clarify doubts instantly, generate summaries, and get smart suggestions tailored to your study patterns. Learn faster and retain more with less effort.",
  },
];

const About = () => {
  return (
    <div id="About" className="min-h-[100vh] w-full bg-white flex ">
      <div className="min-h-[100vh] w-[45%] flex justify-center items-center ">
        <div className="w-[90%] h-[80%] bg-[#00000017] rounded-2xl flex justify-center items-center relative">
          <div className="w-[90%] h-[80%] rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={study}
              alt="study"
            />
          </div>
          <div className="h-[150px] w-[240px] xl:h-[200px] xl:w-[320px] absolute bg-white bottom-4 right-5 rounded-2xl shadow-2xl shadow-[#00000089] lg:flex flex-col justify-end items-start gap-3 pl-3 pb-1  z-100">
            <div className="text-4xl">
              <VscProject />
            </div>
            <p className="text-left w-[80%] text-lg xl:text-xl">
              Enhance productivity through smarter study systems
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[100vh] w-[55%] flex flex-col gap-8 justify-center items-center p-5">
        <h2 className="text-5xl font-semibold ">
          Key Benefits of Our App for Smarter Studying
        </h2>
        <p className=" text-[#000000b4] font-semibold w-full">
          Our app helps students boost productivity, stay focused, and achieve
          academic success — all in one platform.
        </p>

        {/* options */}
        <div className="flex flex-col gap-10 text-[#0C363C]">
          {studyBenefits.map((item) => {
            return (
              <AboutCards key={item.id} title={item.title} desc={item.desc} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
