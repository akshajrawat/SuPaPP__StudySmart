import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { axiosInstance } from "../Lib/axios";
import { authenticate, success } from "../Store/authSlice/authSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";

const ProtectedRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get("/auth/verify-token", {
          withCredentials: true,
        });
        if (res.status === 200) {
          dispatch(success({ user: res.data }));
          dispatch(authenticate());
          toast.success("Data recovered");
        }
      } catch (error) {
        console.error(error);
      }
    })();
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
