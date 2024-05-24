{/* <div id="parent">
    <div id="child">
        <div>
            <h1>Hello, React!!!</h1>
            <h1>Hello, React!!!</h1>
        </div>
        <h1>Hello, React2222222!!!</h1>
    </div>
</div> */}


// const heading = React.createElement("h1", {id : "heading"}, "Hello, Priya!!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// console.log(heading);


const child = React.createElement("div", {id: "child"}, [React.createElement("h1", {key: 0}, "Hello, React!!!"), React.createElement("h1", {className: "h2", key: 1}, "Hello, React2222222!!!")]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(child);



