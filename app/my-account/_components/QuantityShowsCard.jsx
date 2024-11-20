"use client"

import React from "react";

const QuantityShowsCard = ({cardData}) => {

  return (
    <div className="card quantityCardShadow">
      <div className="card-body d-flex justify-content-between align-items-center" style={{color: "#171717"}}>
        <div>
          <h5 className="card-title mt-2 fs-6 fw-semibold">{cardData?.title}</h5>
          <div className="card-icon text-info" style={{fontSize: "40px",}}>
            <cardData.icon/>
          </div>

          <h5 className="card-title mt-2 fs-6 fw-semibold">{cardData?.description}</h5>
        </div>
        <div className="card-title mt-2 fs-5 fw-semibold">{cardData?.count}</div>
      </div>
    </div>
  );
};

export default QuantityShowsCard;
