import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import useIsMobile from "../../Hooks/UseIsMobile";
import NoSelected from "./NoSelected";

const HomePage = () => {
  // frequntly checks the screen size of the screen
  const isMobile = useIsMobile();
  return (
    <div className="h-[calc(100vh-9.2vh)] overflow-hidden flex relative">
      <Navbar
        type="main"
        search={false}
        title={"Workshop"}
        button={"New WorkSpace"}
        className={"absolute top-0 left-0 h-screen z-10"}
      />

      {isMobile ? <NoSelected /> : "hi"}
    </div>
  );
};

export default HomePage;
