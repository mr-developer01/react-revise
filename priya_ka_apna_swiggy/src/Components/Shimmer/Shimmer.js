import "./Shimmer.css";
const Shimmer = (props) => {
    // console.log(props);
    const { bgImg, itemRate, resName, resRating, resDlTime, resAdd, cuisine } =
      props;
    return (
      <div style={{minWidth: "400px", height: "450px", backgroundColor: "#dadada"}}>
        <div
          className="bg"
          style={{}}
        >
          <h1>
            
          </h1>
        </div>
        <div className="res-name">
          <h2></h2>
        </div>
        <div className="res-rating">
          <h2></h2>
        </div>
        <div className="d-time">
          <h2></h2>
        </div>
        <div className="cuisine">
          <p></p>
        </div>
        <div className="res-add">
          <p></p>
        </div>
      </div>
    );
  };

  
  export default Shimmer;