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
          <h1 className="text-5xl text-[#ffbb00] font-bold">
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
          <p className="py-6 text-xl font-mono text-justify">
            Hi, my name is Santhosh and I am a recent college graduate with a
            degree in computer science. I am excited to start my career in the
            field and am eager to learn as much as possible. I have a strong
            foundation in various programming languages and am proficient in
            problem-solving and critical thinking skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
