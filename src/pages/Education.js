import React from "react";

function About1() {
  return (
    <div className="justify-center">
      <h1 className="text-4xl text-secondary text-center py-10 w-[98vw] justify-center">
        Education
      </h1>
      <div className="card card-bordered my-1 grid grid-cols-1 justify-center md:px-10 bg-base-100 shadow-xl w-[98vw]">
        <div className="card-body justify-center">
          <h2 className="card-title text-secondary">10th Standard</h2>
          <p>Cambridge Public School | 2014</p>
          <div className="card-actions justify-end md:justify-left">
            <div className="badge  text-secondary badge-lg text-xl">84%</div>
          </div>
        </div>
      </div>
      <div className="card card-bordered my-1 grid grid-cols-1 justify-center align-center md:px-10 bg-base-100 shadow-xl w-[98vw]">
        <div className="card-body">
          <h2 className="card-title text-secondary">12th Standard</h2>
          <p>Nagarjuna PU College | 2016</p>
          <div className="card-actions justify-end md:justify-left">
            <div className="badge  text-secondary badge-lg text-xl">85%</div>
          </div>
        </div>
      </div>
      <div className="card card-bordered my-1 grid grid-cols-1 justify-center align-center md:px-10 bg-base-100 shadow-xl w-[98vw]">
        <div className="card-body">
          <h2 className="card-title text-secondary">
            Bachelors of Engineering
          </h2>
          <p>SJC Institute of Technology | Information Science | 2020</p>
          <div className="card-actions justify-end md:justify-left">
            <div className="badge  text-secondary badge-lg text-xl">7.03</div>
          </div>
        </div>
      </div>
      <div className="card card-bordered my-1 grid grid-cols-1 justify-center align-center md:px-10 bg-base-100 shadow-xl w-[98vw]">
        <div className="card-body">
          <h2 className="card-title text-secondary">Masters</h2>
          <p>RV College of Engineering | Computer Science | 2023</p>
          <div className="card-actions justify-end md:justify-left">
            <div className="badge text-secondary badge-lg text-xl">8.60</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About1;
