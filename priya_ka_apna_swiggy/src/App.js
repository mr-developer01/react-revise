import React from "react";
import ReactDom from "react-dom/client";
import Nav from "./Components/Nav";
import Body from "./Components/Body";

const App = () => {
  return (
    <>
      <Nav />
      <Body />
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
