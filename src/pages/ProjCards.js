import React from "react";
import Lottie from "lottie-react";

const ProjCards = ({ item }) => {
  const { ProjectName, animation, Description, link } = item;

  return (
    <div className="w-[90vw] justify-center">
      <div className="card card-side w-96 bg-base-100 shadow-xl ">
        <figure>
          <Lottie animationData={animation} loop={true}></Lottie>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{ProjectName}</h2>
          <p>{Description}</p>
          <div className="card-actions justify-end">
            <a href={link} target="_blank">
              <button className="btn btn-secondary btn-outline">View</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjCards;
