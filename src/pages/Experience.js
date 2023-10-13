import React from "react";

function Experience() {
  return (
    <div className="justify-center">
      <h1 className="text-4xl text-[#ffbb00] text-center py-10 w-[100vw] justify-center">
        Experience
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="card card-bordered my-1 grid grid-cols-1 justify-center md:px-10 bg-base-100 shadow-xl mx-1">
          <div className="card-body justify-center">
            <h2 className="card-title text-[#ffbb00]">Systems Engineer</h2>
            <p>Infosys | .Net Framework | Oct 2020 - Aug 2021</p>
            <ul className="list-disc font-mono text-justify">
              <li>
                Designed, developed and maintained RESTful Web APIs using the ASP.NET Web API framework which
                impacted around 5 million users.Conducted comprehensive API testing with Postman to ensure proper
                functionality.
              </li>
              <li className="">
                Created and optimized the MS SQL database schema and stored procedures, resulting in a 23% reduction
                in query execution time and enabling the efficient retrieval and storage of data.
              </li>
              <li>Collaborated with product owners, and QA teams to ensure timely delivery of high-quality software, while
                leveraging HTML, CSS, and JavaScript for front-end and user interface development.
              </li>
            </ul>
          </div>
        </div>
        <div className="card card-bordered my-1 grid grid-cols-1 justify-center align-center md:px-10 bg-base-100 shadow-xl mx-1">
          <div className="card-body">
            <h2 className="card-title text-[#ffbb00]">Software Intern</h2>
            <p>
              Microchip Technology | Typescript Developer | Dec 2022 - Present
            </p>
            <ul className="list-disc font-mono text-justify">
              <li>
                Leveraged Node.js and TypeScript to design and develop peripheral libraries and drivers for micro-controllers
                within MCC Melody, a core component of MPLABX, catering to a user base of over 2 million.
              </li>
              <li className="">
                Developed intuitive software interfaces, facilitating efficient peripheral configuration, and implemented robust
                debugging and testing practices to ensure reliability.
              </li>
              <li>Designed and implemented a dynamic user interface (UI) for MCC Melody, utilizing React.js, Redux for
                state management and Jest for thorough unit testing to guarantee code quality and stability.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
