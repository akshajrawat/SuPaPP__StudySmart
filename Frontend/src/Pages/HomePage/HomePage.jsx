import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import useIsMobile from "../../Hooks/UseIsMobile";
import NoSelected from "./NoSelected";

import WorkspaceForm from "./WorkspaceForm";

const HomePage = () => {
  // states
  const [isCreatingWorkspace, setisCreatingWorkspace] = useState(false);

  // frequntly checks the screen size of the screen
  const isMobile = useIsMobile();

  // handles opening and closing of the form
  const handleClick = () => {
    setisCreatingWorkspace(true);
  };
  const handleCancelClick = () => {
    setisCreatingWorkspace(false);
  };

  return (
    <>
      {isCreatingWorkspace && (
        <WorkspaceForm
          handleCancelClick={handleCancelClick}
        />
      )}
      <div className="h-[calc(100vh-9.2vh)] overflow-hidden flex relative">
        <Navbar
          type="main"
          search={false}
          title={"Workshop"}
          button={"New WorkSpace"}
          className={"absolute top-0 left-0 h-screen z-10"}
          buttonOnClick={handleClick}
        />

        {isMobile ? <NoSelected /> : "hi"}
      </div>
    </>
  );
};

export default HomePage;
