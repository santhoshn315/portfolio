import React from "react";
import Lottie from "lottie-react";
import webdev from "./../../assets/Banner/116528-web-development.json";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div className="bg-base-200 p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3 md:grid-cols-1">
        <div className="w-[300px] lg:w-full">
          <Lottie animationData={webdev} loop={true} />
        </div>

        <div className="w-[300px] lg:w-full flex-col justify-center items-center text-center">
          <h1 className="text-5xl text-secondary font-bold">
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
          <p className="py-6 lg:text-lg text-sm text-center">
            Hi, my name is Santhosh and I am a recent college graduate with a
            degree in computer science. I am excited to start my career in the
            field and am eager to learn as much as possible. I have a strong
            foundation in various programming languages and am proficient in
            problem-solving and critical thinking skills. Throughout my studies,
            I have completed numerous projects and internships, giving me a
            taste of real-world experience. I am a proactive and hardworking
            individual, always willing to go the extra mile to achieve my goals.
            I am confident that my skills and determination will make me a
            valuable asset to any team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
