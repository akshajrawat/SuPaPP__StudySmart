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
    <div
      id="About"
      className="min-h-screen w-full bg-white flex flex-col lg:flex-row"
    >
      {/* Left Image Section */}
      <div className="w-full lg:w-[45%] flex justify-center items-center p-4">
        <div className="w-full sm:w-[90%] lg:w-[90%] h-[300px] sm:h-[400px] lg:h-[80%] bg-[#00000017] rounded-2xl flex justify-center items-center relative">
          <div className="w-[90%] h-[90%] rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={study}
              alt="study"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-4 right-4 bg-white rounded-2xl shadow-2xl shadow-[#00000089] flex flex-col justify-end items-start gap-3 p-3 h-[120px] w-[200px] sm:h-[150px] sm:w-[240px] xl:h-[200px] xl:w-[320px]">
            <div className="text-2xl sm:text-3xl xl:text-4xl">
              <VscProject />
            </div>
            <p className="text-left text-sm sm:text-base xl:text-xl font-medium">
              Enhance productivity through smarter study systems
            </p>
          </div>
        </div>
      </div>

      {/* Right Text Section */}
      <div className="w-full lg:w-[55%] flex flex-col gap-6 lg:gap-8 justify-center items-center text-center lg:text-left p-6 lg:p-10">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold">
          Key Benefits of Our App for Smarter Studying
        </h2>
        <p className="text-[#000000b4] font-medium w-full max-w-2xl">
          Our app helps students boost productivity, stay focused, and achieve
          academic success — all in one platform.
        </p>

        {/* Cards */}
        <div className="flex flex-col gap-6 sm:gap-10 text-[#0C363C] w-full">
          {studyBenefits.map((item) => (
            <AboutCards key={item.id} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
