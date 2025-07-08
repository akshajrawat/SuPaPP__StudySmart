import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const ServiceCards = ({ icon, topic, desc }) => {
  return (
    <div className="h-[270px] w-[370px] bg-[#ffffff1b] backdrop:blur-2xl text-white rounded-2xl flex flex-col items-start justify-between p-6">
      <div className="flex justify-between w-full">
        <span className="text-4xl">{icon}</span>
        <GoArrowUpRight className="text-4xl" />
      </div>
      <div>
        <h3 className="text-3xl"> {topic}</h3>
        <p className="text-sm"> {desc}</p>
      </div>
    </div>
  );
};

export default ServiceCards;
