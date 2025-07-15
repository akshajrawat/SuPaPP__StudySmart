import React from "react";
import Logo from "../../Assets/Icon/Logo.svg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaGithub />,
    url: "https://github.com/your-username",
  },
  {
    icon: <FaInstagram />,
    url: "https://instagram.com/your-username",
  },
  {
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/your-username",
  },
];

const Footer = () => {
  return (
    // footer start
    <footer className=" bg-black w-full border-t border-[#72738275] text-white">
      {/* Introduction column */}
      <div className="flex flex-col gap-4 mt-4 px-5 pb-3">
        <div className="flex items-end gap-2">
          <img className="h-[30px]" src={Logo} alt="" />
          <p className="font-bold"> SuPaPP </p>
        </div>

        {/* Intro para */}
        <span className="font-medium">
          Welcome to SuPaPP. Supercharge your digital life with an all-in-one
          experience — messaging, shopping, payments, entertainment, and more —
          all in one powerful app. Connect, explore, and do more with SuPaPP.
        </span>

        {/* Social links  */}
        <div className="flex gap-4 ">
          {socialLinks.map((item, index) => (
            <a key={index} href={item.url} className="text-xl">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      {/* Introduction column */}

      {/* copyright column */}
      <div className="flex justify-center items-center text-sm font-semibold  border-t border-[#72738267] p-3">
        Copyright 202 - All Rights Reserved
      </div>
    </footer>
    // footer end
  );
};

export default Footer;
