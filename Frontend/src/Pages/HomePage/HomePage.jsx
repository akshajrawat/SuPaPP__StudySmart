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
          setisCreatingWorkspace={setisCreatingWorkspace}
        />
      )}

      <div className="h-[calc(100vh-9.2vh)] overflow-hidden flex relative">
        <div className={` ${isMobile ? "hidden" : ""}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          reprehenderit aperiam ipsa a sapiente, at inventore omnis, ducimus
          magni recusandae animi harum nam? Distinctio blanditiis esse dolorum
          quas fugit repellendus sed reiciendis consequatur nesciunt aliquam,
          necessitatibus placeat debitis repellat, dolore sapiente. Dolorem
          optio dolorum dolores?
        </div>
        {isMobile ? <NoSelected /> : "hi"}
      </div>
    </>
  );
};

export default HomePage;
