import type { NavLinkType } from "@/Models/NavlinkModel";
import type { ReactElement } from "react";

interface props {
  navlinks: NavLinkType[];
}

const Navbar = ({ navlinks }: props) => {
  return (
    <nav className="w-full h-[50px] flex justify-between items-center">
      {/* LOGO SECTION */}
      <div className="h-full w-[30%] flex items-center justify-center">
        <h1 className="text-xl font-bold">SuPaPP</h1>
      </div>

      {/* OPTIONS SECTION */}
      <ul className=" h-full w-[60%] flex justify-center items-center pt-1 gap-1">
        {navlinks.map((item): ReactElement => {
          return <li className="py-2 px-2" key={item.id}> {item.icon}</li>;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
