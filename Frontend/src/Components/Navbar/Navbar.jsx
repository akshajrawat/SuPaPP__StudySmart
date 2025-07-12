import React from "react";
import logo from "../../Assets/Icon/Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({links }) => {
  return (
    // navbar container
    <div
      className={`w-full h-[10vh] flex bg-white pt-2 justify-between`}
    >
      {/* logo container */}
      <div className="w-[35%] sm:w-[20%] h-full flex justify-center items-center gap-2">
        <div className="h-[40px]">
          <img
            className="w-full h-full object-cover"
            src={logo}
            alt="supapp logo"
          />
        </div>
        <p className="text-xl font-semibold"> SuPaPP</p>
      </div>

      {/* links */}
      <div className="w-[60%] md:flex h-full hidden">
        <ul className="w-full h-full flex justify-center items-center gap-13 text-lg font-semibold">
          {links.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* SignUp */}
      <div className="w-[43%] sm:w-[30%] md:w-[15%] h-full flex justify-around items-center pr-2">
        <button className="text-white bg-[#0C363C] px-6 py-2 rounded-full text-lg">
          SignUp
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
