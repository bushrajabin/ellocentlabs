// import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Highlight from "./components/Highlight/Highlight";
import Clients from "./components/Clients/Clients";
import ClientsSay from "./components/ClientsSay/ClientsSay";
import Awards from "./components/Awarads/Awards";
import Tradepage from "./components/TradePage/TradePage";
import Blog from "./components/Blog/Blog";
import React from "react";
function App() {
  return (
    <React.Fragment>
      <Nav />
      <About />
      <Highlight/>
      <Clients  />
      <ClientsSay/>
      <Awards/>
      <Tradepage/>
<Blog/>
    </React.Fragment>
  );
}

export default App;
