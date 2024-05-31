import RestroCard from "./RestroCard";
import React, { useState } from "react";
import { resData } from "../utils/mockData";

const Body = () => {
  // useState hook
  const [mainResData, setMainResData] = useState(resData);
  const [toggle, setToggle] = useState(true);

  // filter functionality
  const topRatedRestro = () => {
    if (toggle) {
      const filterData = mainResData.filter((data) => {
        return data.info.avgRating > 4.2 ? data : null;
      });
      setMainResData(filterData);
    } else {
      setMainResData(resData);
    }
    setToggle(!toggle);
  };


  return (
    <div className="body-p">
      <button onClick={topRatedRestro}>
        {toggle ? "Top Rated Resto" : "Show All Restro"}
      </button>
      <div className="body">
        {mainResData.map((data) => (
          <RestroCard
            key={data.info.id}
            bgImg={data.info.cloudinaryImageId}
            itemRate={data.info.aggregatedDiscountInfoV3}
            resName={data.info.name}
            resRating={data.info.avgRating}
            resDlTime={data.info.sla.slaString}
            cuisine={data.info.cuisines}
            resAdd={data.info.areaName}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
