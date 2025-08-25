import React, { useState } from "react";

import { GiHamburgerMenu, GiHidden } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { LuPanelLeftClose } from "react-icons/lu";
import SearchBar from "../Ui/SearchBar";
import Logo from "./Logo";
import NavLink from "./NavLink";

const Navbar = ({ links = [], type = "", search = true, title }) => {
  const location = useLocation();
  const [isOpen, setisOpen] = useState(true);

  return (
    // navbar container
    <div
      className={`${
        type === "main"
          ? `bg-[#fbf9f7] h-[100vh] flex-col border-r-2 border-[#dfdedeb7] ${
              isOpen
                ? "w-[50vw] sm:w-[40vw] lg:w-[30vw] xl:w-[20vw]"
                : "w-[15vw] sm:w-[10vw] md:w-[8vw] lg:w-[6vw] xl:w-[4vw]"
            }`
          : "bg-white h-[10vh] w-full"
      }   flex  pt-2 justify-between transition-all ease-in-out duration-300 `}
    >
      {/* logo container */}
      <div
        className={` ${
          type === "main"
            ? "w-full h-[8vh] border-b-2 border-[#dfdedeb7] justify-between px-3 flex-shrink-0"
            : "w-[35%] sm:w-[20%] h-full justify-center"
        }   flex  items-center`}
      >
        <Logo isOpen={isOpen} title={title} />
        <button
          className={`${type === "main" ? "block text-2xl" : "hidden"} ${
            isOpen ? "" : "mx-auto"
          }`}
          aria-label="Toggle sidebar"
        >
          <LuPanelLeftClose onClick={() => setisOpen((prev) => !prev)} />
        </button>
      </div>

      {/* Searchbar container */}
      {search && (
        <div
          className={`${
            type === "main"
              ? "w-full h-[20vh] flex items-center justify-center"
              : "hidden"
          }   `}
        >
          <SearchBar
            className={"w-[95%] h-[70%] "}
            close={isOpen ? false : true}
          />
        </div>
      )}

      {/* links */}
      <div
        className={`${
          type === "main"
            ? "w-full flex-col h-[65vh]"
            : "w-[60%] h-full md:flex hidden"
        }  `}
      >
        <ul
          className={`${
            type === "main"
              ? "flex-col justify-start items-start gap-4 px-2"
              : "gap-13 justify-center items-center"
          } w-full h-full flex  text-lg font-semibold`}
        >
          {links.map((item) => {
            if (location.pathname === "/") {
              return (
                <NavLink
                  variant={"top"}
                  item={item}
                  isOpen={isOpen}
                  type={type}
                  key={item.id}
                />
              );
            } else {
              return (
                <NavLink
                  item={item}
                  isOpen={isOpen}
                  type={type}
                  key={item.id}
                />
              );
            }
          })}
        </ul>
      </div>

      {/* SignUp */}
      <div className="w-[43%] sm:w-[30%] md:w-[15%] h-full flex justify-around items-center pr-2">
        <button
          className={`text-white bg-[#0C363C] px-6 py-2 rounded-full text-lg ${
            type === "main" ? "hidden" : ""
          }`}
        >
          <Link to={"/auth/register"}> SignUp</Link>
        </button>

        {/* hamburger on smaller screen */}
        <div className={`md:hidden ${type === "main" ? "hidden" : ""}`}>
          <GiHamburgerMenu className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
