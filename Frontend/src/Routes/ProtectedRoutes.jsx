import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { authChecking, authenticate } from "../Store/Slice/authSlice";
import { useEffect } from "react";

const ProtectedRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authChecking());
  }, []);

  const location = useLocation();
  const auth = useSelector((state) => state.auth);

  const isAuth = auth.isAuthenticated;

  if(auth.loading){
    return <div> loading..... </div>
  }

  if (location.pathname.startsWith("/auth")) {
    return isAuth ? <Navigate to={"/SuPaPP"} replace /> : <Outlet />;
  } else {
    return isAuth ? <Outlet /> : <Navigate to={"/auth/login"} replace />;
  }
};

export default ProtectedRoutes;
