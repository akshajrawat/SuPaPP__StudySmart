import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PageNavbar = ({ links }) => {
  // get current location
  const location = useLocation();

  // current active link
  const activeLink = links.find(
    (e) => e.link.toLowerCase() === location.pathname.toLowerCase()
  );

  //   getting userinfo
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="bg-[#fbf9f7] w-full h-[9.2vh] flex-shrink-0 border-b-2 border-[#dfdedeb7] flex  items-center justify-between pt-3 px-5">
      {/* title */}
      <div className="flex justify-center items-center gap-2 font-semibold text-xl sm:text-2xl ">
        <span className="mb-1">{activeLink.icon}</span>
        <p>{activeLink.name}</p>
      </div>

      {/* profile */}
      <div className="flex items-center gap-3">
        {/* Small vertical border */}
        <div className="h-6 border-l-3 border-[#b8b8b8b7] "></div>
        {/* Profile circle */}
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src={user.profilePhoto}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PageNavbar;
