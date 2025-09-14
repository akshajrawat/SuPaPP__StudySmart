import React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { socketConnect } from "../../Lib/socket";
import { setOnlineUsers } from "../../Store/Slice/chatSlice";
import Navbar from "../../Components/Navbar/Navbar";
import { FiHome, FiMessageCircle, FiBook, FiInbox } from "react-icons/fi";

const navbarLinks = [
  { id: 1, name: "Main", icon: <FiHome />, link: "/SuPaPP" },
  { id: 2, name: "Questions", icon: <FiMessageCircle />, link: "/SuPaPP/chat" },
  { id: 3, name: "Notes", icon: <FiBook />, link: "/SuPaPP/wallet" },
  { id: 4, name: "Inbox", icon: <FiInbox />, link: "/SuPaPP/ecommerce" },
];

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
    <div className="w-screen h-screen cursor-pointer overflow-hidden flex">
      <Navbar links={navbarLinks} type={"main"} />
      <main className="w-full h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
