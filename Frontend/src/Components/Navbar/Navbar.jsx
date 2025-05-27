import React, { useState, useEffect } from "react";
import Logo from "../../Assets/Icon/Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const navLinks = [
  { name: "Home", link: "#Home" },
  { name: "About", link: "#About" },
  { name: "Features", link: "#Features" },
  { name: "FAQs", link: "#Faqs" },
  { name: "Contact", link: "#Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme == "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDark = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    const elem = document.documentElement;

    if (newDark) {
      elem.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      elem.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  };

  return (
    <>
      {/* This is the navbar start*/}
      <nav className="w-full h-[56px] flex justify-between items-center px-7 py-8 md:p-4 lg:p-10 bg-white dark:bg-[#0a081f] z-10 sticky top-0">
        {/* Logo section start */}
        <h1 className="flex items-end gap-2">
          <img className="h-[30px] relative top-[-4px]" src={Logo} alt="" />
          <p className="font-bold text-lg md:text-3xl dark:text-white">
            {" "}
            SuPaPP{" "}
          </p>
        </h1>
        {/* Logo section end */}

        {/* Navbar main start */}

        <div className="hidden lg:flex w-[50%] h-[100%] font-bold text-lg text-[#727382]">
          <ul className="w-full h-full flex justify-between items-center ">
            {navLinks.map((item, index) => {
              return (
                <li
                  key={index}
                  className="w-full flex justify-center items-center h-9 p-3 hover:text-black dark:hover:text-white"
                >
                  <a href={item.link}>{item.name}</a>
                </li>
              );
            })}
            <li
              onClick={() => toggleDark()}
              className="w-full flex justify-center items-center h-9 p-3  relative"
            >
              <MdOutlineDarkMode className="text-2xl text-[#727382] dark:hover:text-white hover:text-black absolute top-1" />
            </li>
          </ul>
        </div>

        {/* Navbar main end */}

        {/* Option section start */}
        <div className="w-[70px] lg:hidden">
          <ul className="flex justify-between items-center w-full">
            <li
              onClick={() => toggleDark()}
              className="h-[30px] w-[30px] flex justify-center items-center"
            >
              <MdOutlineDarkMode className="h-[75%] w-[75%] text-[#727382]" />
            </li>
            <li
              onClick={() => setIsOpen(!isOpen)}
              className="h-[20px] w-[20px] flex justify-center items-center hover:text-black dark:hover:text-white"
            >
              <GiHamburgerMenu className="h-full w-full text-[#727382]" />
            </li>
          </ul>
        </div>
        {/* Option section end */}
      </nav>
      {/* Sidebar start  */}
      <aside
        className={`text-medium h-[100vh] w-[80%] z-50 right-0 top-0 fixed bg-white dark:bg-[#0a081f] shadow shadow-[#727382] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-all ease-linear duration-300`}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-full h-[56px] flex justify-end items-center shadow shadow-[#727382]"
        >
          <IoClose className="text-2xl mr-3 text-[#727382]" />
        </div>
        <ul className=" flex flex-col h-[252px] w-full px-9 mt-5 text-[#727382]  font-semibold gap-4 ">
          {navLinks.map((item, index) => {
            return (
              <li
                key={index}
                className="w-full flex justify-start items-center h-9 p-3  hover:text-black dark:hover:text-white "
              >
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </aside>
      {/* Sidebar end  */}
      {/* This is the navbar end*/}
    </>
  );
};

export default Navbar;
