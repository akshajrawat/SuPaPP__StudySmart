import React from "react";

const Buffer = ({ className = "" }) => {
  return (
    <div className={`flex justify-center items-start flex-row gap-2 h-[100vh] pt-55 ${className}`}>
      <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
      <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
    </div>
  );
};

export default Buffer;
