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
    <div id="Service" className="w-full min-h-[100vh] bg-[#0C363C] px-3">
      {/* heading */}
      <div className=" flex flex-col justify-start items-center gap-3">
        <h1 className="text-4xl w-full text-center font-medium text-[#F5F7F9] pt-6">
          {" "}
          Where focus meets functionality for smarter learning{" "}
        </h1>
        <p className=" flex justify-center items-center text-[#F5F7F9] text-center">
          Everything you need to ace your semester in one app
        </p>
      </div>

      {/* cards */}
      <div className="w-full flex justify-center items-center flex-wrap gap-x-10 gap-y-6 pt-10 ">
        {studyServices.map((item, index) => {
          return (
            <ServiceCards
              key={index}
              icon={item.icon}
              topic={item.title}
              desc={item.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Service;
