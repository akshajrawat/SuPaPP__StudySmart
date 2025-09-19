import Navbar from "@/Components/Navbar/Navbar";
import { dashboardLinks } from "@/data/DashboardLinks";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="min-h-screen">
      <Navbar navlinks={dashboardLinks} type="dashboard"/>
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default MainLayout;
