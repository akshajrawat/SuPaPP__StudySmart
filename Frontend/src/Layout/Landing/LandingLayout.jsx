import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const links = [
  { name: "Home", link: "#Home" },
  { name: "About", link: "#About" },
  { name: "Features", link: "#Features" },
  { name: "FAQs", link: "#Faqs" },
  { name: "Contact", link: "#Contact" },
];

const LandingLayout = () => {
  return (
    <div
      id="Home"
      className="relative min-h-[100vh] max-w-* dark:bg-[#0a081f] md:px-7 xl:px-40 "
    >
      <Navbar links={links} />
      <main className="xl:px-5 overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
