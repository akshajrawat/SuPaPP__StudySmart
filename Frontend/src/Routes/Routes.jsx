import { Route, Routes } from "react-router-dom";
import React from "react";
import Landing from "../Pages/LandingPage/Landing";
import AuthLayout from "../Layout/Auth/AuthLayout";
import Register from "../Pages/AuthPages/Register";
import Login from "../Pages/AuthPages/Login";
import Otp from "../Pages/AuthPages/Otp";
import Chat from "../Pages/ChatPages/Chat";
import ProtectedRoutes from "./ProtectedRoutes";
import LandingLayout from "../Layout/Landing/LandingLayout";
import MainLayout from "../Layout/Main/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Wallet from "../Pages/Wallet/Wallet";
import EcommerceHome from "../Pages/EcommercePages/EcommerceHome/EcommerceHome";
import ProductView from "../Pages/EcommercePages/EcommerceHome/Sections/ProductView";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Render main layout when in "/" path */}

      <Route element={<LandingLayout />}>
        <Route path="/" element={<Landing />} />
      </Route>   

      {/* protected Routes */}
      <Route element={<ProtectedRoutes />}>
        {/* Render chat layout when in "/auth" path */}
        <Route path="/SuPaPP" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="chat" element={<Chat />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="ecommerce" element={<EcommerceHome />} />
          <Route path="product/:id" element={<ProductView />} />
        </Route>

        {/* Render auth layout when in "/auth" path */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="otp" element={<Otp />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
