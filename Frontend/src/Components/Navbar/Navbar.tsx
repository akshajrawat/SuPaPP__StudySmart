import type { DashboardLinkType, LandingLinkType } from "@/Models/NavlinkModel";
import type { ReactElement } from "react";

interface props {
  navlinks: (DashboardLinkType | LandingLinkType)[];
  type: string;
}

const Navbar = ({ navlinks, type }: props) => {
  return (
    <nav className="w-full h-[55px] sm:h-[65px] xl:h-[80px] px-3  flex justify-between items-center">
      {/* LOGO SECTION */}
      <div className="h-full flex items-center justify-center">
        <h1
          className={`pl-1 ${
            type === "landing" ? "text-2xl sm:text-3xl font-bold" : ""
          } ${
            type === "dashboard"
              ? "text-2xl sm:text-2xl lg:text-3xl  font-bold "
              : ""
          }`}
        >
          SuPaPP
        </h1>
      </div>

      {/* OPTIONS SECTION */}
      <ul>
        <div
          className={`h-full flex justify-evenly items-center    ${
            type === "landing"
              ? "text-lg gap-3 sm:text-2xl sm:gap-4 bg-black border border-[#ffffff38] rounded-full px-2 shadow-xs shadow-[#ffffff15]"
              : ""
          } ${type === "dashboard" ? "sm:text-xl sm:gap-3" : ""}`}
        >
          {navlinks.map((item): ReactElement => {
            return (
              <li onClick={item.onClick} className="py-2 px-2" key={item.id}>
                {item.icon}
              </li>
            );
          })}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
