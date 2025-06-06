import React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { connectSocket } from "../../Store/Slice/authSlice";

const MainLayout = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(connectSocket());
  }, [auth.user]);

  return (
    <div className="max-w-screen min-h-screen dark:bg-[#0a081f]">
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
