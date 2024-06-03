import RestroCard from "./RestroCard";
import React, { useState, useEffect } from "react";
import { topRatedRestro } from "../utils/mockData";
import Shimmer from "./Shimmer/Shimmer";

const Body = () => {
  // useState hook
  const [mainResData, setMainResData] = useState(null);
  const [toggle, setToggle] = useState(true);
  const [dummyCards, SetDummyCards] = useState([]);
  const dArr = [1,2,3,4,5,6,7,8,9,10]


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    const rawData = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9122238&lng=77.5923219");
    const readableData = await rawData.json();
    // console.log(readableData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    const allCards = readableData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
    SetDummyCards(allCards)
    setMainResData(allCards)
  }

  // Conditional Rendering
  if(mainResData === null){
    return (
      <div className="abc">
        {dArr.map(data => <Shimmer />)}
      </div>
    )
  }
  return (
    <div className="body-p">
      <button
        onClick={() => {
          topRatedRestro(toggle, mainResData, dummyCards, setMainResData, setToggle);
        }}
      >
        {toggle ? "Top Rated Resto" : "Show All Restro"}
      </button>
      <div className="body">
        {mainResData.map((data) => (
          <RestroCard
            key={data?.info?.id}
            bgImg={data?.info?.cloudinaryImageId}
            itemRate={data?.info?.aggregatedDiscountInfoV3}
            resName={data?.info?.name}
            resRating={data?.info?.avgRating}
            resDlTime={data?.info?.sla?.slaString}
            cuisine={data?.info?.cuisines}
            resAdd={data?.info?.areaName}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
