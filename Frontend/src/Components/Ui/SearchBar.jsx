import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({
  query,
  onChange,
  placeholder = "Search...",
  className = "",
}) => {
  return (
    <div
      className={`flex items-center justify-center h-[13%] px-4 py-3 border-b border-gray-300 dark:border-[#29274a] ${className}`}
    >
      <div className="flex items-center w-full bg-gray-100 dark:bg-[#19173a] rounded-full px-4 py-2 shadow-inner">
        <FaSearch className="text-gray-500 dark:text-[#8d8ea1] text-lg mr-2" />
        <input
          type="text"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="bg-transparent w-full text-sm text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-[#8d8ea1] outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
