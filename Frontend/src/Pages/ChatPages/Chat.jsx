import React from "react";
import SideChat from "./Comp/SideChat";
import ChatBox from "./Comp/ChatBox";

const Chat = () => {
  return (
    <div className="chat-container min-h-screen max-w-screen flex ">
      {/* Side Section for user display */}
      <aside className="hidden min-h-screen w-[35vw] bg-red-700 sm:block  ">
        <SideChat />
      </aside>
      {/* Chat box */}
      <div className="min-h-screen  max-w-screen sm:w-[65vw]">
        {" "}
        <ChatBox />
      </div>
    </div>
  );
};

export default Chat;
