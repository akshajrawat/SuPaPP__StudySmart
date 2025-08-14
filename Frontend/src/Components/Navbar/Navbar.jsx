import React, { useState } from "react";
import logo from "../../Assets/Icon/Logo.svg";
import { GiHamburgerMenu, GiHidden } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { LuPanelLeftClose } from "react-icons/lu";
import SearchBar from "../Ui/SearchBar";

const Navbar = ({ links = [], type = "" }) => {
  const location = useLocation();
  const [isOpen, setisOpen] = useState(true);

  return (
    // navbar container
    <div
      className={`${
        type === "main"
          ? `bg-[#fbf9f7] h-[100vh] flex-col border-r-2 border-[#dfdedeb7] ${
              isOpen ? "w-[20vw]" : "w-[4vw]"
            }`
          : "bg-white h-[10vh] w-full"
      }   flex  pt-2 justify-between transition-all ease-in-out duration-300`}
    >
      {/* logo container */}
      <div
        className={` ${
          type === "main"
            ? "w-full h-[15vh] border-b-2 border-[#dfdedeb7] justify-between px-3"
            : "w-[35%] sm:w-[20%] h-full justify-center"
        }   flex  items-center `}
      >
        <div
          className={`flex justify-center items-center gap-1 ${
            isOpen ? "" : "hidden"
          }`}
        >
          <div className="h-[35px]">
            <img
              className="w-full h-full object-cover"
              src={logo}
              alt="supapp logo"
            />
          </div>
          <p className="text-xl font-semibold"> SuPaPP</p>
        </div>
        <LuPanelLeftClose
          onClick={() => setisOpen((prev) => !prev)}
          className={`${type === "main" ? "block text-2xl" : "hidden"} ${
            isOpen ? "" : "mx-auto"
          }`}
        />
      </div>

      {/* Searchbar container */}
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

      {/* links */}
      <div
        className={`${
          type === "main" ? "w-full flex-col h-[65vh]" : "w-[60%] h-full "
        } md:flex hidden`}
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
                <li key={item.id}>
                  <a href={item.link}>{item.name}</a>
                </li>
              );
            } else {
              return (
                <li
                  className={`${
                    type === "main"
                      ? "w-full h-[20%] flex items-center justify-start gap-2 px-3 rounded-sm hover:bg-[#f0eeed]"
                      : ""
                  }`}
                  key={item.id}
                >
                  <Link
                    className="flex justify-center items-center gap-2"
                    to={item.link}
                  >
                    {" "}
                    <span className="mb-1 text-xl">{item.icon}</span>
                    <p
                      className={`${
                        isOpen ? "" : "opacity-0 pointer-events-none"
                      } transition-all ease-in-out`}
                    >
                      {item.name}
                    </p>
                  </Link>
                </li>
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
        <div className="md:hidden">
          <GiHamburgerMenu className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
