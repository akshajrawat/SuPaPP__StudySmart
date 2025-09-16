import MainLayout from "@/Layout/MainLayout";
import { Routes, Route } from "react-router-dom";

const Routing = () => {
  return (
    <Routes>
      {/* Main layout : Containing Navbar, Bottombar */}
      <Route path="/SuPaPP" element={<MainLayout />}></Route>
    </Routes>
  );
};

export default Routing;
