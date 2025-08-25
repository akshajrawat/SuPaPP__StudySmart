import React from "react";
import logo from "../../Assets/Icon/Logo.svg";
import { Link } from "react-router-dom";
const Logo = ({ isOpen = true, title }) => {
  return (
    <Link
      to={"/"}
      className={`flex justify-center items-center gap-1 ${
        isOpen ? "" : "hidden"
      }`}
    >
      {!title && (
        <div className="h-[35px]">
          <img
            className="w-full h-full object-cover"
            src={logo}
            alt="supapp logo"
          />
        </div>
      )}

      <p className="text-xl font-semibold"> {title? title : "SuPaPP"}</p>
    </Link>
  );
};

export default Logo;
