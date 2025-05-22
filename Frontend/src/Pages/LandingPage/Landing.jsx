import React from "react";
import Home from "./Comps/Home";
import About from "./Comps/About";
import Features from "./Comps/Features";

const Landing = () => {
  return (
    // Landing page start
    <div className="p-4 pb-20 mt-4 cursor-pointer select-none">
      {/* Home section start */}
      <Home />

      {/* About section start */}
      <About />

      {/* Features section start */}
      <Features />
    </div>
    // landing page end
  );
};

export default Landing;
