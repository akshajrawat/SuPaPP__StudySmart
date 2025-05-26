import { Route, Routes } from "react-router-dom";
import React from "react";
import MainLayout from "../Layout/Main/MainLayout";
import Landing from "../Pages/LandingPage/Landing";
import AuthLayout from "../Layout/Auth/AuthLayout";
import Register from "../Pages/AuthPages/Register";
import Login from "../Pages/AuthPages/Login";
import Otp from "../Pages/AuthPages/Otp";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Render main layout when in "/" path */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Landing />}></Route>
      </Route>

      {/* Render auth layout when in "/auth" path */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="otp" element={<Otp />}></Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
