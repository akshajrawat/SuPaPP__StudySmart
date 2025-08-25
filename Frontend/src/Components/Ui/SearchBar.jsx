import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({
  query,
  close,
  onChange,
  placeholder = "Search...",
  className,
}) => {
  return (
    <div
      className={`${className} rounded-sm bg-white shadow-sm overflow-hidden flex`}
    >
      {/* icon */}
      <div
        className={`h-full  flex justify-center items-center ${
          close ? "w-full" : "w-[20%]"
        }`}
      >
        <FaSearch className="text-xl text-gray-700" />
      </div>
      {/* input */}
      <input
        className={`w-[80%] h-full outline-none pr-5 text-black placeholder-gray-700 placeholder:font-medium ${
          close ? "hidden" : ""
        }`}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
