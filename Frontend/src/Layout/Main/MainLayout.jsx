import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-screen min-h-screen dark:bg-[#0a081f]">
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
