import RestroCard from "./RestroCard";
import {resData} from "../utils/mockData";
const a = "aaa";
const Body = () => {
    
    console.log(resData);
    return (
      <div className="body">
        {resData.map((data) => (
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
    );
  };

  export default Body;