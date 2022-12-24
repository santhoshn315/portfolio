import React from "react";
import Lottie from "lottie-react";

const ProjCards = ({ item }) => {
  const { id, ProjectName, animation, Description ,link} = item;

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <Lottie animationData={animation} loop={true} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{ProjectName}</h2>
          <p>{Description}</p>
          <div className="card-actions justify-end">
            <a href={link}>
              <button className="btn btn-secondary btn-outline">View</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjCards;
