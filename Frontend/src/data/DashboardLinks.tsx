import Searchbar from "@/Components/Search/Searchbar";
import Notification from "@/Components/Notification/Notification";
import Settings from "@/Components/Settings/Settings";
import Profile from "@/Components/Profile/Profile";
import type { DashboardLinkType } from "@/Models/NavlinkModel";

export const dashboardLinks: DashboardLinkType[] = [
  {
    id: 1,
    name: "Search",
    icon: <Searchbar />,
    onClick: () => console.log("Search clicked"),
    title: "Search",
  },
  {
    id: 2,
    name: "Notifications",
    icon: <Notification />,
    onClick: () => console.log("Notifications clicked"),
    title: "Notifications",
  },
  {
    id: 3,
    name: "Settings",
    icon: <Settings />,
    onClick: () => console.log("Settings clicked"),
    title: "Settings",
  },
  {
    id: 4,
    name: "Profile",
    icon: <Profile />,
    link: "/profile",
    title: "Profile",
  },
];
