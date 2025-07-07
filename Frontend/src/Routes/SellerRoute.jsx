import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const SellerRoute = () => {
  const { user } = useSelector((state) => state.auth);

  //   checks whether the user is seller or not
  if (!user || user.role !== "seller") {
    return <Navigate to={"/SuPaPP/ecommerce"} replace />;
  }
  return <Outlet />;
};

export default SellerRoute;
