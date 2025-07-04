import React from "react";

const NotFound = ({ title, desc }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center text-white bg-[#19173a] rounded-xl shadow-md px-6">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="No Results"
        className="w-28 h-28 mb-4 opacity-80"
      />
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-400 max-w-sm">{desc}</p>
    </div>
  );
};

export default NotFound;
