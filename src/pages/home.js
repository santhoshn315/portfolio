import React from "react";
import Banner from "./Banner/Banner";
import About from "../pages/About";
import Project from "./Project";
import Contact from "./Contact";
import About1 from "./About1";
function home() {
  return (
    <div className="overflow-x-hidden">
      <Banner></Banner>
      <About1></About1>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
}

export default home;
