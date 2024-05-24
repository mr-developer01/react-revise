import React from "react"
import ReactDOM from "react-dom/client"

const child = React.createElement("div", {id: "child"}, [React.createElement("h1", {key: 0}, "Hello, React!!!"), React.createElement("h1", {className: "h2", key: 1}, "Hello, React2222222!!!")]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(child);