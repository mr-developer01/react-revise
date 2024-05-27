const RestroCard = (props) => {
    // console.log(props);
    const { bgImg, itemRate, resName, resRating, resDlTime, resAdd, cuisine } =
      props;
    return (
      <div className="res-card">
        <div
          className="bg"
          style={{
            backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${bgImg})`,
          }}
        >
          <h1>
            {itemRate?.header} {itemRate?.subHeader}
          </h1>
        </div>
        <div className="res-name">
          <h2>{resName}</h2>
        </div>
        <div className="res-rating">
          <h2>{resRating}</h2>
        </div>
        <div className="d-time">
          <h2>{resDlTime}</h2>
        </div>
        <div className="cuisine">
          <p>{cuisine.join(", ")}</p>
        </div>
        <div className="res-add">
          <p>{resAdd}</p>
        </div>
      </div>
    );
  };

  
  export default RestroCard;