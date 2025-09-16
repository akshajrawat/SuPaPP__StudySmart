import { FaCog } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { ModeToggle } from "../mode-toggle";

const Settings = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center justify-center p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 ring-0 outline-none">
        <FaCog />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel> Settings </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <ModeToggle sr={false} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Settings;
