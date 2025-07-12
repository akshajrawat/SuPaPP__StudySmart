import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const links = [
  { id: 1, name: "Home", link: "#Home" },
  { id: 2, name: "Service", link: "#Service" },
  { id: 3, name: "About", link: "#About" },
  { id: 4, name: "FAQs", link: "#Faqs" },
  { id: 5, name: "Contact", link: "#Contact" },
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
