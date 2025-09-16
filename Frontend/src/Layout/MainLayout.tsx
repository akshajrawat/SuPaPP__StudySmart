import Navbar from "@/Components/Navbar/Navbar";
import { navLinks } from "@/data/NavLinks";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar navlinks={navLinks} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
