import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ name, animation, link }) => {
  return (
    <Link
      to={link}
      className="h-[300px] w-[250px] bg-[#9e92eb] flex flex-col rounded-2xl shadow-md gap-2 justify-start items-center"
    >
      <div className="h-[80%] w-full rounded-t-4xl">{animation}</div>
      <div className="h-[15%] w-[90%] rounded-full bg-black flex items-center justify-center text-2xl font-bold gap-3">
        <p className="text-white "> {name} </p>
      </div>
    </Link>
  );
};

export default Cards;
