import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const AboutCards = ({ title, desc }) => {
  return (
    <div className="flex gap-1">
      <div className="text-xl mt-1">
        <AiFillCheckCircle />
      </div>
      <div>
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className=" text-[#000000b4] font-semibold">{desc}</p>
      </div>
    </div>
  );
};

export default AboutCards;
