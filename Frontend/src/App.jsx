import { useEffect, useState } from "react";
import AppRoutes from "./Routes/Routes";
import toast, { Toaster } from "react-hot-toast";
import { axiosInstance } from "./Lib/axios";
import { useDispatch } from "react-redux";
import { success } from "./Store/authSlice/authSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      const res = axiosInstance.get("/auth/verify-token");
      if (res.status === 200) {
        dispatch(success({ user: res.data }));
        toast.success("Data recovered");
      }
    } catch (error) {
      throw new Error("Error at app.jsx");
    }
  }, []);

  return (
    <>
      <div>
        <div>
          <Toaster />
        </div>
      </div>
      <AppRoutes />
    </>
  );
}

export default App;
