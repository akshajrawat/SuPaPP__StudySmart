import React, { useEffect, useRef, useState } from "react";
import ChatTop from "./ChatTop";
import { FaLink } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { getMessage, sendMessage } from "../../../Store/Slice/chatSlice";

const ChatBox = () => {
  const dispatch = useDispatch();
  const chat = useSelector((state) => state.chat);

  // message skeleton
  const [message, setMessage] = useState({
    text: "",
    media: "",
  });

  // getting message
  useEffect(() => {
    dispatch(getMessage());
  }, []);

  // refrence to the file input
  const fileInputRef = useRef(null);

  // handle change when some file is selected
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    e.target.value = null;
    
    setMessage((prev) => ({
      ...prev,
      media: file,
    }));
  };

  // Handle the text change
  const handleTextChange = (e) => {
    setMessage((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // handle the submition of the message
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.text.trim() && !message.media) {
      return;
    }

    dispatch(sendMessage(message));
    setMessage({
      text: "",
      media: "",
    });
  };

  return (
    <div className="flex flex-col h-full w-full bg-white text-black dark:bg-[#0a081f] dark:text-white transition-colors duration-300">
      {/* Top bar */}
      <ChatTop />

      {/* Chat container */}
      <div className="flex flex-col h-[81vh] px-4 py-3 overflow-y-auto scrollbar-thin scrollbar-thumb-[#cfcfcf] dark:scrollbar-thumb-[#3d3b63] scrollbar-track-transparent text-gray-200">
        {chat.message?.map((item, index) => {
          if (item.senderId === chat.selected._id) {
            return (
              <div
                key={index}
                className="self-start max-w-[70%] lg:max-w-[50%]"
              >
                {item.media && (
                  <div className="w-[200px] h-[200px] overflow-hidden rounded-xl mt-2">
                    <img
                      src={item.media}
                      alt="Chat media"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {item.text && (
                  <p
                    className="bg-[#5C6AC4] mt-4 px-3 py-2 rounded-2xl relative
            after:h-0 after:w-0 after:border-b-[8px] after:border-r-[10px] after:border-t-[8px]
            after:border-b-transparent after:border-r-[#5C6AC4] after:border-t-transparent
            after:absolute after:left-0 after:-translate-x-2 after:translate-y-1"
                  >
                    {item.text}
                  </p>
                )}
              </div>
            );
          } else {
            return (
              <div key={index} className="self-end max-w-[70%] lg:max-w-[50%]">
                {item.media && (
                  <div className="w-[200px] h-[200px] overflow-hidden rounded-xl mt-2">
                    <img
                      src={item.media}
                      alt="Chat media"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {item.text && (
                  <p
                    className="bg-[#3E3B5B] mt-4 px-3 py-2 rounded-2xl relative
            after:h-0 after:w-0 after:border-b-[8px] after:border-l-[10px] after:border-t-[8px]
            after:border-b-transparent after:border-l-[#3E3B5B] after:border-t-transparent
            after:absolute after:right-0 after:translate-x-2 after:translate-y-1"
                  >
                    {item.text}
                  </p>
                )}
              </div>
            );
          }
        })}
      </div>

      {/* Message input area */}
      <form className="w-full px-4 py-2.5 border-t border-gray-300 dark:border-[#29274a]">
        <div className="flex items-center w-full bg-gray-100 dark:bg-[#19173a] rounded-full px-4 py-2 shadow-md transition-colors duration-300">
          <input
            type="file"
            ref={fileInputRef}
            multiple
            accept="image/*,video/*"
            className="hidden"
            onChange={handleFileChange}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              fileInputRef.current.click();
            }}
            className="text-gray-500 dark:text-[#8d8ea1] text-xl mr-2 cursor-pointer hover:text-black dark:hover:text-white transition"
          >
            <FaLink />
          </button>
          <input
            type="text"
            name="text"
            autoComplete="off"
            onChange={handleTextChange}
            value={message.text}
            placeholder="Type your message..."
            className="flex-1 bg-transparent text-sm text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-[#727382] outline-none"
          />
          <button
            onClick={handleSubmit}
            className="text-gray-500 dark:text-[#8d8ea1] text-2xl ml-2 cursor-pointer hover:text-black dark:hover:text-white transition"
          >
            <IoSend />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatBox;
