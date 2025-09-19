import LandingLayout from "@/Layout/LandingLayout";
import MainLayout from "@/Layout/MainLayout";
import LandingPage from "@/page/landing/LandingPage";
import { Routes, Route } from "react-router-dom";

const Routing = () => {
  return (
    <Routes>
      {/* Landing Layout : */}
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<LandingPage />} />
      </Route>
      {/* Main layout : Containing Navbar, Bottombar */}
      <Route path="/supapp" element={<MainLayout />}></Route>
    </Routes>
  );
};

export default Routing;
