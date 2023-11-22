// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./ErrorPage";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import { Services } from "./common/common";
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLinks, setActiveLinks] = useState(null);

  const router = [
    {},
    {},

    {
      path: "/services",
      element: (
        <>
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
  ];

  return (
    <>
      <BrowserRouter>
        <Nav
          setIsOpen={setIsOpen}
          activeLinks={activeLinks}
          setActiveLinks={setActiveLinks}
        />
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<h2>services page!</h2>} />
          <Route path="/industries" element={<h3>industries</h3>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
