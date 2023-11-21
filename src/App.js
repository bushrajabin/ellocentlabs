// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./ErrorPage";
import { Services } from "./common/common";
const router = createBrowserRouter([
  {
    path: "*",
   element:<ErrorPage/>
  },
  {
    path: "/",
    element: <Home />,
  },

  {
    path:"/services",
    element:<> <h2>this is services page</h2></>,

  }, {
    path:"/indutries",
    element:<> <h2>this is indutries page</h2></>,

  }
]);
function App() {
  return (

    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
