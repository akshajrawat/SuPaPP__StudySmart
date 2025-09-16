import { FaBell } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

const Notification = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center justify-center p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 ring-0 outline-none">
        <FaBell />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel> Notifications </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem> Empty </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notification;
