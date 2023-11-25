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
            <p className="list-disc font-mono text-left py-5 text-[#c48a16] ">Systems Engineer | .Net Framework | Oct 2020 - Aug 2021</p>
            <ul className="list-disc font-mono text-left py-5">
              <li className="py-1">
                Designed, developed and maintained RESTful Web APIs using the ASP.NET Web API framework which
                impacted around 5 million users.Conducted comprehensive API testing with Postman to ensure proper
                functionality.
              </li>
              <li className="py-1">
                Created and optimized the MS SQL database schema and stored procedures, resulting notable reduction
                in query execution time and enabling the efficient retrieval and storage of data.
              </li>
              <li className="py-1">Collaborated with product owners, and QA teams to ensure timely delivery of high-quality software, while
                leveraging HTML, CSS, and JavaScript for front-end and user interface development.
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
                Developed peripheral libraries and Application Drivers using Node.js and Typescript for micro-controllers
                within MCC Melody, a vital component of MPLABX IDE, serving a user base of over 2 million.
              </li>
              <li className="py-1"> 
                Engineered user-friendly and intuitive software interfaces to simplify the configuration process for peripherals.
                This aimed to enhance user efficiency by providing clear and accessible configurations.
              </li>
              <li className="py-1">Designed and implemented a dynamic user interface (UI) for MCC Melody, utilizing React.js, Redux for
                state management, and Jest for comprehensive unit testing, ensuring high code quality and stability.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
