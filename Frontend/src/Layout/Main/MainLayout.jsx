import React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { socketConnect } from "../../Lib/socket";
import { setOnlineUsers } from "../../Store/Slice/chatSlice";
import Navbar from "../../Components/Navbar/Navbar";

const navbarLinks = [
  { name: "Home", link: "/SuPaPP" },
  { name: "Chat", link: "/SuPaPP/chat" },
  { name: "Crypto & Wallet", link: "/SuPaPP/wallet" },
  { name: "Shopping", link: "/SuPaPP/ecommerce" },
  { name: "Profile", link: "/SuPaPP/profile" },
  { name: "Logout", action: "logout" }, // Use this to dispatch logout
];

const MainLayout = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const cleanup = socketConnect(auth.user.id, (userIds) => {
      dispatch(setOnlineUsers(userIds));
    });

    return () => {
      cleanup();
    };
  }, [auth.user?.id]);

  return (
    <div className="max-w-screen min-h-screen dark:bg-[#0a081f]">
      <Navbar links={navbarLinks} />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
