import React from "react";
import Home from "./Sections/Home";
import Service from "./Sections/Service";
import About from "./Sections/About";
import Faq from "./Sections/Faq";
import Contact from "./Sections/Contact";

const Landing = () => {
  return (
    <div>
      {/* Home Section */}
      <Home />

      {/* Service section */}
      <Service />

      {/* About section */}
      <About />

      {/* faq section */}
      <Faq />

      {/* contact section */}
      <Contact />
    </div>
  );
};

export default Landing;
