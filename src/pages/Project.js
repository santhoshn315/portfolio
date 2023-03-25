import React from "react";
import ProjCards from "./ProjCards";
import hodo from "../assets/Projects/90724-travel-world-usa.json";
import jobify from "../assets/Projects/103199-hiring-pt-2.json";
import driver from "../assets/Projects/63800-car-animation.json";
import phishing from "../assets/Projects/55951-hacker-using-laptop.json";
import crypto from "../assets/Projects/79966-bitcoin-cryptocurrency-city.json";
const Project = () => {
  const proj = [
    {
      ProjectName: "Hodophile tales",
      animation: hodo,
      link: "https://github.com/santhoshn315/Hodophile-tales",
      Description:
        "A MERN Social media application where the users can share their travelling experiences. Other users can like and comment on the posts.",
    },
    {
      ProjectName: "Jobify",
      animation: jobify,
      link: "https://github.com/santhoshn315/Jobify",
      Description:
        "A MERN Application to keep track of status of Job applications like Online Assesment, Interviews, Accepted or Rejected status of the candidate.",
    },
    {
      ProjectName: "Driver Drowsiness Detection",
      animation: driver,
      link: "https://github.com/santhoshn315/Driver-Drowsiness-Detection",
      Description:
        "A computer vision system that can automatically detect driver drowsiness in a real-time video stream and then alert if the driver appears to be drowsy.",
    },
    {
      ProjectName: "Phishing Detection using ML",
      animation: phishing,
      link: "https://github.com/santhoshn315/phishing",
      Description:
        "Developed a Web application that takes the URL from the user and classifies the given URL into Legitimate or not using Machine Learning Algorithms.",
    },
    {
      ProjectName: "Cryptoverse",
      animation: crypto,
      link: "https://github.com/santhoshn315/Cryptoverse",
      Description:
        "The CryptoVerse is a Cryptocurrency web application to get the latest updates, value statistics, market cap and news.",
    },
  ];
  return (
    <div>
      <h1 className="text-lg lg:text-4xl text-secondary text-center py-10 w-[90vw] justify-center">
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
