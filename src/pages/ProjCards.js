import React from "react";
import Lottie from "lottie-react";

const ProjCards = ({ item }) => {
  const { ProjectName, animation, Description, link } = item;

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl sm:grid-cols-1">
        <figure>
          <Lottie animationData={animation} loop={true} />
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
