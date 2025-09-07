import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const WorkspaceForm = ({ handleCancelClick }) => {
  const handleCreateClick = () => {
    // TODO: handle create logic here
  };

  return (
    <div className="bg-[#ffffff1a] backdrop-blur-sm w-screen h-screen fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="bg-white shadow-sm border border-[#dfdedeb7] rounded-2xl p-8 sm:p-10 w-11/12 sm:w-80 relative">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-red-500 hover:text-red-700 hover:scale-110 transition"
          onClick={handleCancelClick}
        >
          <AiOutlineClose size={20} />
        </button>

        {/* Title Input */}
        <input
          type="text"
          placeholder="Title"
          className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#641eef] transition"
        />

        {/* Description Input */}
        <input
          type="text"
          placeholder="Description"
          className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#641eef] transition"
        />

        {/* Create Button */}
        <button
          onClick={handleCreateClick}
          className="w-full bg-[#641eef] text-white py-2 rounded-lg font-semibold shadow-md hover:bg-[#4e13c6] hover:shadow-lg hover:scale-[1.02] transition"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default WorkspaceForm;
