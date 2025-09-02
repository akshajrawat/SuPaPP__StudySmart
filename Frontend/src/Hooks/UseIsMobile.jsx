import React from "react";
import { useState, useEffect } from "react";

const UseIsMobile = ( breakpoint = 768 ) => {
  const [isMobile, setisMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    // handles the resizing of the screen
    const handleResize = () => {
      setisMobile(window.innerWidth < breakpoint);
    };
    window.addEventListener("resize", handleResize);

    // cleanup funtion
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

export default UseIsMobile;
