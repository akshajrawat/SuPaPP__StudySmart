import React from "react";
import logo from "../../Assets/Icon/Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { LuPanelLeftClose } from "react-icons/lu";
import SearchBar from "../Ui/SearchBar";

const Navbar = ({ links = [], type = "" }) => {
  const location = useLocation();

  return (
    // navbar container
    <div
      className={`${
        type === "main"
          ? "bg-[#fbf9f7] h-[100vh] w-[20vw] flex-col border-r-2 border-[#dfdedeb7]"
          : "bg-white h-[10vh] w-full"
      }   flex  pt-2 justify-between `}
    >
      {/* logo container */}
      <div
        className={` ${
          type === "main"
            ? "w-full h-[15vh] border-b-2 border-[#dfdedeb7] justify-between px-5"
            : "w-[35%] sm:w-[20%] h-full justify-center"
        }   flex  items-center `}
      >
        <div className="flex justify-center items-center gap-1">
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
          className={`${type === "main" ? "block text-2xl" : "hidden"}`}
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
        <SearchBar className={"w-[95%] h-[70%]"} />
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
                  <span className="mb-1">{item.icon}</span>
                  <Link to={item.link}>{item.name}</Link>
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
