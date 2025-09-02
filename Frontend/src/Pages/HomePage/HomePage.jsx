import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

const HomePage = () => {
  return (
    <div className="max-h-[calc(100vh-9.2vh)] overflow-hidden">
      <Navbar type="main" search={false} title={"Workshop"} button={"New WorkSpace"}/>
    </div>
  );
};

export default HomePage;
