import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const ChatLayout = () => {
  return (
    <div className="max-w-screen min-h-screen dark:bg-[#0a081f]">
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ChatLayout;
