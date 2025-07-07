import React from "react";
import logo from "../../Assets/Icon/Logo.svg";

const Navbar = () => {
  return (
    // navbar container
    <div className="w-full h-[10vh] flex bg-white pt-2">
      {/* logo container */}
      <div className="w-[20%] h-full flex justify-center items-center gap-2">
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
      <div className="w-[60%] h-full">
        <ul className="w-full h-full flex justify-center items-center gap-13 text-lg font-semibold">
          <li>Home</li>
          <li>About </li>
          <li> Services </li>
          <li> Contact</li>
        </ul>
      </div>

      {/* SignUp */}
      <div className="w-[20%] h-full flex justify-center items-center">
        <button className="text-white bg-[#0C363C] px-6 py-2 rounded-full text-lg">
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Navbar;
