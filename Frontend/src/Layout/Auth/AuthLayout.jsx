import { main } from "framer-motion/client";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const links = [
  { name: "Home", link: "/" },
  { name: "Login", link: "/auth/login" },
  { name: "Register", link: "/auth/register" },
  { name: "FAQs", link: "#Faqs" },
];

const AuthLayout = () => {
  return (
    <div className="max-w-screen min-h-screen dark:bg-[#0a081f]">
      <Navbar links={links} />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
