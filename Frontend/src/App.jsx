import { useEffect, useState } from "react";
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
