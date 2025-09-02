import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ variant = "side", item, isOpen = true, type }) => {
  if (variant === "top") {
    return (
      <li>
        <a
          onClick={(e) => {
            const el = document.querySelector(item.link);
            if (el) {
              e.preventDefault();
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          href={item.link}
        >
          {item.name}
        </a>
      </li>
    );
  }

  return (
    <li
      className={`${
        type === "main"
          ? "w-full h-[20%] flex items-center gap-2 px-3 rounded-sm hover:bg-[#f0eeed]"
          : ""
      }`}
    >
      <Link
        className={`${
          isOpen ? "justify-start" : "justify-center"
        } flex  items-center gap-2 w-full h-full `}
        to={item.link}
      >
        {" "}
        <span className={` mb-1 text-xl`}>{item.icon}</span>
        <p className={`${isOpen ? "" : "hidden"}`}>{item.name}</p>
      </Link>
    </li>
  );
};

export default NavLink;
