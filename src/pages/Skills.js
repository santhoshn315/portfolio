import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiBitbucket,
  DiHtml5,
  DiPython,
} from "react-icons/di";
import {
  SiExpress,
  SiMysql,
  SiMongodb,
  SiJira,
  SiPostman,
  SiGithub,
} from "react-icons/si";
import { TbBrandCpp, TbBrandTypescript, TbBrandVscode } from "react-icons/tb";
const Skills = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl text-[#ffbb00] text-center my-10 w-[100vw] justify-center">
        Professional Skillset
      </h1>
      <div className="vw-[100vw] md:m-20">
        <div className="flex flex-row justify-center ">
          <DiHtml5 className="border-2 border-yellow-600 rounded-lg p-2 m-1 w-1/6 h-1/6 scale-75 hover:scale-90"></DiHtml5>
          <DiJavascript1 className="border-2 border-yellow-600 rounded-lg p-2 m-1 w-1/6 h-1/6 scale-75 hover:scale-90"></DiJavascript1>
          <DiNodejs className="border-2 border-yellow-600 rounded-lg p-2 m-1 w-1/6 h-1/6 scale-75 hover:scale-90"></DiNodejs>
          <DiReact className="border-2 border-yellow-600 rounded-lg p-2 m-1 w-1/6 h-1/6 scale-75 hover:scale-90"></DiReact>
          <SiExpress className="border-2 border-yellow-600 rounded-lg p-2 m-1 w-1/6 h-1/6 scale-75 hover:scale-90"></SiExpress>
          <TbBrandTypescript className="border-2 border-yellow-600 rounded-lg p-2 m-1 w-1/6 h-1/6 scale-75 hover:scale-90"></TbBrandTypescript>
        </div>
        <div className="flex flex-row justify-center">
          <DiPython className="border-2 rounded-lg border-yellow-600 rounded-lg p-2 m-1 w-1/6 h-1/6 scale-75 hover:scale-90"></DiPython>
          <TbBrandCpp className="border-2 rounded-lg border-yellow-600 rounded-lg p-2 m-1 w-1/6 h-1/6 scale-75 hover:scale-90"></TbBrandCpp>
          <SiMysql className="border-2 rounded-lg border-yellow-600 rounded-lg p-2 m-1 w-1/6 h-1/6 scale-75 hover:scale-90"></SiMysql>
          <SiMongodb className="border-2 rounded-lg border-yellow-600 rounded-lg p-2 m-1 w-1/6 h-1/6 scale-75 hover:scale-90"></SiMongodb>
          <DiBitbucket className="border-2 rounded-lg border-yellow-600 rounded-lg p-2 m-1 w-1/6 h-1/6 scale-75 hover:scale-90"></DiBitbucket>
          <DiGit className="border-2 rounded-lg border-yellow-600 rounded-lg p-2 m-1 w-1/6 h-1/6 scale-75 hover:scale-90"></DiGit>
        </div>
      </div>
      <h1 className="text-2xl md:text-4xl mt-5 text-[#ffbb00] text-center  w-[100vw] justify-center">
        Tools I use
      </h1>
      <div className="vw-[90vw]  md:m-20">
        <div className="flex flex-row justify-center ">
          <TbBrandVscode className="border-2 border-yellow-600 rounded-lg p-2 m-1 w-1/6 h-1/6 m-5 scale-75 hover:scale-90"></TbBrandVscode>
          <SiJira className="border-2 border-yellow-600 rounded-lg p-2 m-1 w-1/6 h-1/6 m-5 scale-75 hover:scale-90"></SiJira>
          <SiPostman className="border-2 border-yellow-600 rounded-lg p-2 m-1 w-1/6 h-1/6 m-5 scale-75 hover:scale-90"></SiPostman>
          <SiGithub className="border-2 border-yellow-600 rounded-lg p-2 m-1 w-1/6 h-1/6 m-5 scale-75 hover:scale-90"></SiGithub>
        </div>
      </div>
    </div>
  );
};

export default Skills;
