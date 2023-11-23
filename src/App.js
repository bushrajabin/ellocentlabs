// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./ErrorPage";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
import Industries from "./components/industre/Industries";
import Technology from "./components/Technologies/Technology";
import Blog from "./components/Blog/Blog";
import Work from "./pages/Work";
import Service from "./components/Service/Service";
import Ai from "./servicesPage/AiPage/Ai";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLinks, setActiveLinks] = useState(null);

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
          <Route path="/services" element={<Service />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/technologies" element={<Technology />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/work" element={<Work />} />
          <Route path="/ai" element={<Ai />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
