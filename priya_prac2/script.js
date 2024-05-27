import React from "react";
import ReactDOM from "react-dom/client";

// let name = "Rahul";

// JSX
// const headind1 = <h1>hgdfgh</h1>;

// const headind = (
//   <>
//     <div>
//       <h1>{10 > 12 ? "Rahul" : "Kunal"}</h1>
//     </div>
//     <div>
//       <h1>Priya</h1>
//     </div>
//   </>
// );

// Component :--
// 1. Functional Component
const Heading = () => {
  return (
    <>
        <h1>Heading!!!</h1>
    </>
  );
};

const HeadingComponent = () => {
  return (
    <div>
      <h1>ajhvsdbc</h1>
      <h1>ajhvsdbc</h1>
      <Heading />
    </div>
  );
};
// 1. Class Component

// console.log(headind);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
