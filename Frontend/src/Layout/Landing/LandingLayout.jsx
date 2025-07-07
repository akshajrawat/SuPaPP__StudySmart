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
    <div id="Home" className="relative min-h-[100vh] max-w-* bg-[#F5F7F9]">
      <Navbar links={links} />
      <main className=" overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
