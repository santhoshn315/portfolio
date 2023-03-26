import React from "react";
import Banner from "./Banner/Banner";
import About from "../pages/About";
import Project from "./Project";
import Contact from "./Contact";

function home() {
  return (
    <div className="overflow-x-hidden">
      <Banner></Banner>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
}

export default home;
