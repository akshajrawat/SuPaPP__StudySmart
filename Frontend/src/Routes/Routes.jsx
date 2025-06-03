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

const AppRoutes = () => {
  return (
    <Routes>
      {/* Render main layout when in "/" path */}

      <Route element={<LandingLayout />}>
        <Route path="/" element={<Landing />}></Route>
      </Route>

      {/* protected Routes */}
      <Route element={<ProtectedRoutes />}>
        {/* Render chat layout when in "/auth" path */}
        <Route element={<MainLayout />}>
          <Route path="/SuPaPP" element={<Chat />}></Route>
        </Route>

        {/* Render auth layout when in "/auth" path */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="otp" element={<Otp />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
