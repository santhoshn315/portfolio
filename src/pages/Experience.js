import React from "react";

function Experience() {
  return (
    <div className="justify-center">
      <h1 className="text-4xl text-[#c48a16] text-center font-mono py-10 w-[100vw] justify-center">
        Experience
      </h1>
      <div className="grid grid-cols-1 font-mono md:grid-cols-2 ">
        <div className="card card-bordered my-1 grid font-mono grid-cols-1 justify-center md:px-10 bg-base-100 shadow-xl mx-1">
          <div className="card-body justify-center">
            <h2 className="card-title text-[#c48a16]">Infosys</h2>
            <p className="list-disc font-mono text-left py-5 text-[#c48a16] ">Systems Engineer | Oct 2020 - Aug 2021</p>
            <ul className="list-disc font-mono text-left py-5">
              <li className="py-1">
                Built scalable RESTful APIs using Java (Spring Boot) and Spring Data JPA, serving 5M+ users.
                Tested APIs with Postman to ensure reliability.
              </li>
              <li className="py-1">
                Optimized SQL queries, stored procedures, and indexing in PostgreSQL, reducing execution time by 35%
                and improving performance.
              </li>
              <li className="py-1">Developed front-end using React.js and ES6 JavaScript, collaborating with product and QA teams to
                deliver responsive UIs.
              </li>
            </ul>
          </div>
        </div>
        <div className="card card-bordered my-1 grid grid-cols-1 justify-center align-center md:px-10 bg-base-100 shadow-xl mx-1">
          <div className="card-body">
            <h2 className="card-title text-[#c48a16]">Microchip Technology</h2>
            <p className="list-disc font-mono text-left py-1 text-[#c48a16]">
              <div >Software Intern | Dec 2022 - Nov 2023</div><br></br>
              <div >Software Engineer 2 | Nov 2023 - Present</div>
            </p>
            <ul className="list-disc font-mono text-left py-5">
              <li className="py-1">
                Developed peripheral libraries and configuration drivers for MCC Melody, a plugin for the Java-based
                MPLABX IDE, enabling peripheral setup and C code generation for 2M+ users.
              </li>
              <li className="py-1"> 
                Built React-based UI components using Typescript and Redux; achieved 80%+ unit test coverage with Jest and
                integrated with a Java backend via plugin interfaces.
              </li>
              <li className="py-1">Created RESTful Java services (Spring Boot) to serve peripheral metadata, enabling UI features based on device
                hardware specs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
