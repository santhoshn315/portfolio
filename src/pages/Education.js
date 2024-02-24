import React from "react";

function About1() {
  return (
    <div className="justify-center">
      <h1 className="text-4xl text-[#c48a16] text-center py-10 font-mono w-[100vw] justify-center">
        Education
      </h1>
      // <div className="card card-bordered font-mono my-1 grid grid-cols-1 justify-center md:px-10 bg-base-100 shadow-xl w-[100vw] mx-1">
      //   <div className="card-body justify-center">
      //     <h2 className="card-title  text-[#c48a16]">10th Standard</h2>
      //     <p>Cambridge Public School | 2014</p>
      //     <div className="card-actions justify-end md:justify-left">
      //       <div className="badge  text-[#c48a16] badge-lg text-xl">84%</div>
      //     </div>
      //   </div>
      // </div>
      // <div className="card card-bordered font-mono my-1 grid grid-cols-1 justify-center align-center md:px-10 bg-base-100 shadow-xl w-[100vw] mx-1">
      //   <div className="card-body">
      //     <h2 className="card-title font-mono text-[#c48a16]">12th Standard</h2>
      //     <p>Nagarjuna PU College | 2016</p>
      //     <div className="card-actions justify-end md:justify-left">
      //       <div className="badge  text-[#c48a16] badge-lg text-xl">85%</div>
      //     </div>
      //   </div>
      // </div>
      <div className="card card-bordered my-1 font-mono grid grid-cols-1 justify-center align-center md:px-10 bg-base-100 shadow-xl w-[100vw] mx-1">
        <div className="card-body">
          <h2 className="card-title text-[#c48a16]">
            Bachelors of Engineering
          </h2>
          <p>SJC Institute of Technology | Information Science | 2020</p>
          <div className="card-actions justify-end md:justify-left">
            <div className="badge  text-[#c48a16] badge-lg text-xl">7.03</div>
          </div>
        </div>
      </div>
      <div className="card card-bordered font-mono my-1 grid grid-cols-1 justify-center align-center md:px-10 bg-base-100 shadow-xl w-[100vw]">
        <div className="card-body">
          <h2 className="card-title text-[#c48a16]">Masters</h2>
          <p>RV College of Engineering | Computer Science | 2023</p>
          <div className="card-actions justify-end md:justify-left">
            <div className="badge text-[#c48a16] badge-lg text-xl">8.94</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About1;
