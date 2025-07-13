import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { authChecking } from "../Store/Slice/authSlice";
import { useEffect } from "react";
import Buffer from "../Components/Ui/Buffer";

const ProtectedRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authChecking());
  }, []);

  const location = useLocation();
  const auth = useSelector((state) => state.auth);

  const isAuth = auth.isAuthenticated;

  if (auth.loading.checking) {
    return <Buffer className="mt-45" />;
  }

  if (location.pathname.startsWith("/auth")) {
    return isAuth ? <Navigate to={"/SuPaPP"} replace /> : <Outlet />;
  } else {
    return isAuth ? <Outlet /> : <Navigate to={"/auth/login"} replace />;
  }
};

export default ProtectedRoutes;
