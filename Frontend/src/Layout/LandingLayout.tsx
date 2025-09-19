import Navbar from "@/Components/Navbar/Navbar";
import { landingLinks } from "@/data/LandingLinks";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <main className="bg-[url('/Images/landingbackground.jpg')] bg-cover min-h-screen max-w-screen sm:px-8 lg:px-20 xl:px-30">
      <Navbar navlinks={landingLinks} type="landing" />
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default LandingLayout;
