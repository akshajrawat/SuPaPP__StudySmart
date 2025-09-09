import React from "react";
import ServiceCards from "../Comps/ServiceCards";
import {
  FaRegCalendarAlt,
  FaTasks,
  FaBookOpen,
  FaClock,
  FaLightbulb,
  FaChartLine,
} from "react-icons/fa";

const studyServices = [
  {
    icon: <FaRegCalendarAlt />,
    title: "Study Planner",
    desc: "Plan your subjects, goals, and study sessions in one place.",
  },
  {
    icon: <FaTasks />,
    title: "Task Management",
    desc: "Track assignments, daily tasks, and deadlines with ease.",
  },
  {
    icon: <FaBookOpen />,
    title: "Smart Notes",
    desc: "Organize, access, and revise your notes anytime, anywhere.",
  },
  {
    icon: <FaClock />,
    title: "Focus Timer",
    desc: "Use Pomodoro-based sessions to stay productive and avoid burnout.",
  },
  {
    icon: <FaLightbulb />,
    title: "AI Doubt Solver",
    desc: "Get instant help and explanations with our built-in AI assistant.",
  },
  {
    icon: <FaChartLine />,
    title: "Progress Tracker",
    desc: "Visualize your learning progress and stay on top of your goals.",
  },
];

const Service = () => {
  return (
    <div id="Service" className="w-full min-h-screen bg-[#0C363C] px-4 py-12">
      {/* heading */}
      <div className="flex flex-col justify-start items-center gap-4 text-center max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#F5F7F9]">
          Where focus meets functionality for smarter learning
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#F5F7F9]/80">
          Everything you need to ace your semester in one app
        </p>
      </div>

      {/* cards */}
      <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-8">
        {studyServices.map((item, index) => (
          <ServiceCards
            key={index}
            icon={item.icon}
            topic={item.title}
            desc={item.desc}
            className="w-full max-w-xs sm:max-w-sm"
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
