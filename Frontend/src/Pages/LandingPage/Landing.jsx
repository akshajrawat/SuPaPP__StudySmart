import React from "react";
import Home from "./Comps/Home";
import About from "./Comps/About";
import Features from "./Comps/Features";
import Faq from "./Comps/Faq";
import ContactMe from "./Comps/ContactMe";

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

      {/* Landing section start */}
      <Faq />

      {/* Contact me */}
      <ContactMe />
    </div>
    // landing page end
  );
};

export default Landing;
