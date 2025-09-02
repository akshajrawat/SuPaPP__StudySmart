import React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { socketConnect } from "../../Lib/socket";
import { setOnlineUsers } from "../../Store/Slice/chatSlice";
import Navbar from "../../Components/Navbar/Navbar";
import { FiHome, FiMessageCircle, FiBook, FiInbox } from "react-icons/fi";
import PageNavbar from "../../Components/Navbar/PageNavbar";

const MainLayout = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth.user?.id) return;

    const cleanup = socketConnect(auth.user.id, (userIds) => {
      dispatch(setOnlineUsers(userIds));
    });

    return () => {
      cleanup();
    };
  }, [auth.user?.id]);

  return (
    <div className="max-w-screen min-h-screen dark:bg-[#0a081f] cursor-pointer flex overflow-hidden">
      <Navbar links={navbarLinks} type={"main"} />
      <main className="flex-1">
        <PageNavbar links={navbarLinks} />
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
