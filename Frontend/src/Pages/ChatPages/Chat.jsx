import React from "react";
import SideChat from "./Comp/SideChat";
import ChatBox from "./Comp/ChatBox";

const Chat = () => {
  return (
    <div className="chat-container min-h-screen max-w-screen flex ">
      {/* Side Section for user display */}
      <aside className="hidden sm:min-h-screen sm:w-[35vw]  sm:block  ">
        <SideChat />
      </aside>
      {/* Chat box */}
      <div className="min-h-screen  max-w-screen w-[100vw] sm:w-[65vw] sm:px-3 sm:border-l sm:border-[#8d8ea17c]">
        <ChatBox />
      </div>
    </div>
  );
};

export default Chat;
