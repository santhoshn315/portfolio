import React from "react";

function Experience() {
  return (
    <div className="justify-center">
      <h1 className="text-4xl text-secondary text-center py-10 w-[100vw] justify-center">
        Experience
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="card card-bordered my-1 grid grid-cols-1 justify-center md:px-10 bg-base-100 shadow-xl mx-1">
          <div className="card-body justify-center">
            <h2 className="card-title text-secondary">Systems Engineer</h2>
            <p>Infosys | .Net Framework | Oct 2020 - Aug 2021</p>
            <ul className="list-disc font-mono text-justify">
              <li>
                Primary responsibility as developer involved creating Web APIs
                using Entity framework.
              </li>
              <li className="">
                Created a RESTful Web API Service using ASP.Net Web API to
                generate data that was consumed by the front-end.
              </li>
              <li>Used Postman to test the API functionality.</li>
              <li>
                Participated in various client meetings with the team and
                Program Manager to discuss improvements/amendments in the
                application.
              </li>
            </ul>
          </div>
        </div>
        <div className="card card-bordered my-1 grid grid-cols-1 justify-center align-center md:px-10 bg-base-100 shadow-xl mx-1">
          <div className="card-body">
            <h2 className="card-title text-secondary">Software Intern</h2>
            <p>
              Microchip Technology | Typescript Developer | Dec 2022 - Present
            </p>
            <ul className="list-disc font-mono text-justify">
              <li>
                Part of MCU16 team that is responsible for Handling the MPLAB
                Code Configurator (MCC) Melody in MPLABX application, which
                enables users to configure Microchip Micro-controllers and
                generate highly efficient C code.
              </li>
              <li>
                Primary responsibility as typescript developer is to develop
                Peripheral Libraries(PLIBs) and Driver modules to support
                multiple peripherals.
              </li>
              <li>
                In addition,managed the user interface (UI) within the MCC
                Melody, which involved displaying dynamic data. We use Redux to
                control the state of the application.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
