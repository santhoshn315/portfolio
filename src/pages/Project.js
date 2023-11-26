import React from "react";
import ProjCards from "./ProjCards";
import hodo from "../assets/Projects/90724-travel-world-usa.json";
import jobify from "../assets/Projects/103199-hiring-pt-2.json";
import driver from "../assets/Projects/63800-car-animation.json";
import phishing from "../assets/Projects/55951-hacker-using-laptop.json";
const Project = () => {
  const proj = [
    {
      ProjectName: "Hodophile tales",
      animation: hodo,
      link: "https://github.com/santhoshn315/Hodophile-tales",
      Description:
        "MERN-based social media platform for travel enthusiasts. Users can share their adventures, photos, and tips while engaging with fellow travelers through likes and comments.",
    },
    {
      ProjectName: "JobHunt",
      animation: jobify,
      link: "https://github.com/santhoshn315/JobHunt",
      Description:
        "Mobile app developed using React Native, streamlines job search by fetching live job listings from top platforms such as LinkedIn, Indeed, and Google for Jobs into one intuitive interface.",
    }, 
    {
      ProjectName: "Driver Drowsiness Detection",
      animation: driver,
      link: "https://github.com/santhoshn315/Driver-Drowsiness-Detection",
      Description:
        "A computer vision system that can detect driver drowsiness in a real-time video stream and then alert if the driver appears to be drowsy by spotting signs of drowsiness like closed eyes or nodding."
    },
    {
      ProjectName: "Jobify",
      animation: jobify,
      link: "https://github.com/santhoshn315/Jobify",
      Description:
        "A MERN Application to keep track of status of Job applications like Online Assesment, Interviews, Accepted or Rejected status of the candidate.",
    },
    {
      ProjectName: "Phishing URL Detection using ML",
      animation: phishing,
      link: "https://github.com/santhoshn315/phishing",
      Description:
        "Web application that takes the URL from the user and classifies if the given URL is Legitimate using Machine Learning.",
    },

  ];
  return (
    <div>
      <h1 className="text-2xl md:text-4xl text-[#c48a16] text-center py-10 w-[98vw] justify-center">
        My Projects
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-10 justify-center align-center">
        {proj.map((item, i) => (
          <ProjCards key={i} item={item}></ProjCards>
        ))}
      </div>
    </div>
  );
};

export default Project;
