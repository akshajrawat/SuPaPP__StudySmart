import { useState } from "react";
import MainLayout from "./Layout/Main/MainLayout";
import AppRoutes from "./Routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
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
