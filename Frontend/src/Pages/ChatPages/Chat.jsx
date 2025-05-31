import React from "react";
import SideChat from "./Comp/SideChat";
import ChatBox from "./Comp/ChatBox";

const Chat = () => {
  return (
    <div className="chat-container min-h-screen max-w-screen">
      {/* Side Section for user display */}
      <SideChat />

      {/* Chat box */}
      <ChatBox />
    </div>
  );
};

export default Chat;
