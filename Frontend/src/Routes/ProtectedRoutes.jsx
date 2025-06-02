import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { axiosInstance } from "../Lib/axios";
import { authChecking, authenticate } from "../Store/authSlice/authSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";

const ProtectedRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authChecking());
  }, []);

  const location = useLocation();
  const auth = useSelector((state) => state.auth);

  const isAuth = auth.isAuthenticated;

  if (location.pathname.startsWith("/auth")) {
    return isAuth ? <Navigate to={"/SuPaPP"} replace /> : <Outlet />;
  } else {
    return isAuth ? <Outlet /> : <Navigate to={"/auth/login"} replace />;
  }
};

export default ProtectedRoutes;
