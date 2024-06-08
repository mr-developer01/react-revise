import ReactDOM from "react-dom/client";
import Nav from "./Components/Nav/Nav";
import Body from "./Components/Body/Body";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./Components/About/About";
import Error from "./Components/Error/Error";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      errorElement: <Error />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/about/contact",
    element: <Contact />
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
