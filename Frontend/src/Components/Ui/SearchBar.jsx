import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({
  query,
  onChange,
  placeholder = "Search...",
  className,
}) => {
  return (
    <div
      className={`${className} rounded-sm bg-white shadow-sm overflow-hidden flex`}
    >
      {/* icon */}
      <div className="h-full w-[15%] flex justify-center items-center">
        <FaSearch className="text-xl text-gray-700" />
      </div>
      {/* input */}
      <input
        className="w-[85%] h-full outline-none pr-5 text-black placeholder-gray-700 placeholder:font-medium"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
