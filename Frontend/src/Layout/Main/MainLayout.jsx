import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Landing from "../../Pages/LandingPage/Landing";

const MainLayout = () => {
  return (
    <div
      id="Home"
      className="relative min-h-[100vh] max-w-* dark:bg-[#0a081f] md:px-7 xl:px-40 "
    >
      <Navbar />
      <main className="xl:px-5 overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
