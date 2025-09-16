import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/Components/ui/input";

const Searchbar = () => {
  const [isOpen, setisOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setisOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        className="flex items-center justify-center p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 outline-none"
        onClick={handleClick}
      >
        <FaSearch />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-full bg-gray-100 dark:bg-[#161616] flex justify-center h-[20vh] pt-3">
          <Input
            placeholder="Search..."
            className="bg-white w-[70%] outline-0 text-sm"
          />
        </div>
      )}
    </div>
  );
};

export default Searchbar;
