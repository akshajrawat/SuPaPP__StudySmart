import React, { useEffect, useState } from "react";
import SideChat from "./Comp/SideChat";
import ChatBox from "./Comp/ChatBox";
import { useSelector } from "react-redux";
import NoChatSelected from "./Comp/NoChatSelected";

const Chat = () => {
  const chat = useSelector((state) => state.chat);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isLargeScreen = windowWidth >= 640;

  return (
    <div className="flex min-h-screen w-full bg-white dark:bg-[#0a081f] text-black dark:text-white transition-colors duration-300">
      {/* Sidebar */}
      {(!chat.selected || isLargeScreen) && (
        <aside
          className={`w-full sm:w-[35vw] border-r border-gray-300 dark:border-[#29274a] ${
            chat.selected && !isLargeScreen ? "hidden" : "block"
          }`}
        >
          <SideChat />
        </aside>
      )}

      {/* Chatbox */}
      {(chat.selected || isLargeScreen) && (
        <main
          className={`w-full sm:w-[65vw] flex flex-col ${
            !chat.selected && !isLargeScreen ? "hidden" : "block"
          }`}
        >
          {chat.selected ? <ChatBox /> : <NoChatSelected />}
        </main>
      )}
    </div>
  );
};

export default Chat;
