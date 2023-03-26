import React from "react";
import Banner from "./Banner/Banner";
import About from "../pages/About";
import Project from "./Project";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
function home() {
  return (
    <div className="overflow-x-hidden">
      <Banner></Banner>
      <Education></Education>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
}

export default home;
