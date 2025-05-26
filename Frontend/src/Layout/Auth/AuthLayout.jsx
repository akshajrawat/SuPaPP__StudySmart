import { main } from "framer-motion/client";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const AuthLayout = () => {
  return (
    <div className="max-w-screen min-h-screen dark:bg-[#0a081f]">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
