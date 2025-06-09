import React, { useEffect, useMemo, useRef, useState } from "react";
import ChatTop from "./ChatTop";
import { FaLink } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import {
  getMessage,
  sendMessage,
  setMesasges,
} from "../../../Store/Slice/chatSlice";
import { getSocketMessage } from "../../../Lib/socket";
import RerenderedMessage from "./RerenderMessage";

const ChatBox = () => {
  const dispatch = useDispatch();
  const chat = useSelector((state) => state.chat);

  const [message, setMessage] = useState({
    text: "",
    media: "",
  });
  const [imageSending, setImageSending] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    const cleanup = getSocketMessage((message) => {
      dispatch(setMesasges(message));
    });
    dispatch(getMessage());

    return () => {
      cleanup();
    };
  }, [chat.selected?.id]);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTo({
        top: messageContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chat.message]);

  const fileInputRef = useRef(null);
  const messageContainerRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    e.target.value = null;
    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
    setMessage((prev) => ({
      ...prev,
      media: file,
    }));
  };

  const handleTextChange = (e) => {
    setMessage((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPreviewUrl(null);
    if (!message.text.trim() && !message.media) {
      return;
    }

    const form = new FormData();
    if (message.text) form.append("text", message.text);
    if (message.media) {
      setImageSending(true);
      form.append("image", message.media);
    }

    await dispatch(sendMessage(form));
    setImageSending(false);
    setMessage({
      text: "",
      media: "",
    });
  };

  const rerenderedMessage = useMemo(() => {
    return chat.message?.map((item, index) => {
      if (!item) return null;
      const isReceiver = item.senderId === chat.selected?._id;
      return (
        <RerenderedMessage key={index} item={item} isReceiver={isReceiver} />
      );
    });
  }, [chat.message, chat.selected?._id]);

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] w-full bg-white text-black dark:bg-[#0a081f] dark:text-white transition-colors duration-300">
      {/* Top bar */}
      <ChatTop />

      {/* Chat container */}
      <div
        ref={messageContainerRef}
        className="flex-1 px-4 py-3 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#cfcfcf] dark:scrollbar-thumb-[#3d3b63] scrollbar-track-transparent"
      >
        <div className="flex flex-col gap-3">
          {rerenderedMessage}
          {/* skeleton */}
          {imageSending && (
            <div
              role="status"
              className="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700 self-end w-[300px] mt-3"
            >
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </div>
      </div>

      {/* Message input area */}
      {previewUrl && (
        <div className="w-[100px] h-[100px] mb-2 relative">
          <img
            src={previewUrl}
            alt=""
            className="object-cover w-full h-full rounded"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setPreviewUrl(null);
              setMessage((prev) => ({ ...prev, media: null }));
            }}
            className="absolute top-0 left-0 bg-[#848484] backdrop-blur-2xl p-1 rounded-full text-white"
          >
            <RxCross1 />
          </button>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="w-full px-4 py-2.5 border-t border-gray-300 dark:border-[#29274a] transition-colors duration-300"
      >
        <div className="flex items-center w-full bg-gray-100 dark:bg-[#19173a] rounded-full px-4 py-2 shadow-md transition-colors duration-300">
          <input
            type="file"
            ref={fileInputRef}
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              fileInputRef.current.click();
            }}
            className="text-gray-500 dark:text-[#8d8ea1] text-xl mr-2 cursor-pointer hover:text-black dark:hover:text-white transition-colors duration-300"
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
            type="submit"
            className="text-gray-500 dark:text-[#8d8ea1] text-2xl ml-2 cursor-pointer hover:text-black dark:hover:text-white transition-colors duration-300"
          >
            <IoSend />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatBox;
