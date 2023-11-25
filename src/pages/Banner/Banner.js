import React from "react";
import Lottie from "lottie-react";
import webdev from "./../../assets/Banner/116528-web-development.json";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div className="bg-base-200 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-5 gap-3">
        <div className="w-[96] lg:w-full">
          <Lottie animationData={webdev} loop={true} />
        </div>

        <div className="w-[96] lg:w-full ">
          <h1 className="text-5xl text-[#c48a16] font-bold">
            <Typewriter
              options={{
                strings: [
                  "Holaaaaaa!!!!",
                  "I am Santhosh",
                  "A passionate developer and tech enthusiast",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="py-6 text-xl font-mono text-center lg:text-left">
            Hi, I'm Santosh N, a Software Engineer passionate about building software that makes a difference.<br></br><br></br>
            I earned my Master's in Computer Science from R V College of Engineering and currently work at Microchip Technology, where I develop
            user interfaces and Peripheral libraries for MCC Melody, a software component of MPLABX IDE.<br></br><br></br>
            At Infosys, I worked on developing RESTful Web APIs using the ASP.NET and crafting MS SQL queries and stored procedures, aimed at optimizing database performance.
            <br></br><br></br>
            I love staying updated with the latest in tech and believe in the power of teamwork for innovative solutions. Let's connect and explore the world of software together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
