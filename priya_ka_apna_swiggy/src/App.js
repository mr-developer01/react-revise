// import React from "react";
import ReactDom from "react-dom/client";
import Nav from "./Components/Nav/Nav";
import Body from "./Components/Body";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
