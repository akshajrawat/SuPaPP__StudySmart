import React, { useEffect } from "react";
import SideChat from "./Comp/SideChat";
import ChatBox from "./Comp/ChatBox";
import { useDispatch, useSelector } from "react-redux";
import NoChatSelected from "./Comp/NoChatSelected";
import { setSelectedUser } from "../../Store/Slice/chatSlice";

const Chat = () => {
  const chat = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("selectedUser"));
    dispatch(setSelectedUser(user));
  }, []);
  return (
    <div className="flex min-h-screen w-full bg-white dark:bg-[#0a081f] text-black dark:text-white transition-colors duration-300">
      {/* Sidebar for users */}
      <aside className="hidden sm:block sm:w-[35vw] border-r border-gray-300 dark:border-[#29274a]">
        <SideChat />
      </aside>

      {/* Chatbox section */}
      <main className="w-full sm:w-[65vw] flex flex-col">
        {chat.selected ? <ChatBox /> : <NoChatSelected />}
      </main>
    </div>
  );
};

export default Chat;
