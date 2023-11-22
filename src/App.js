// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./ErrorPage";
import Nav from "./components/Nav/Nav";
import { Services } from "./common/common";
const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/services",
    element: (
      <>
        {" "}
        <h2>this is services page</h2>
      </>
    ),
  },
  {
    path: "/technologies",
    element: (
      <>
        {" "}
        <h2>this is indutries page</h2>
      </>
    ),
  },
  {
    path: "/industries",
    element: (
      <>
        {" "}
        <h2>this is services page</h2>
      </>
    ),
  },
  {
    path: "/work",
    element: (
      <>
        {" "}
        <h2>this is services page</h2>
      </>
    ),
  },
  {
    path: "/blog",
    element: (
      <>
        {" "}
        <h2>this is services page</h2>
      </>
    ),
  },
]);

function App() {
  return (
    <React.StrictMode>
      
      {/* <h2 className="bg-red-500 absolute top-0">test</h2> */}
      {/* <Nav setIsOpen={setIsOpen} setActiveLinks={setActiveLinks} activeLinks={activeLinks} /> */}

      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
