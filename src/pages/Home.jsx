import React, { useState } from "react"
import { Link } from "react-router-dom";
import Nav from "../components/Nav/Nav"
import About from "../components/About/About"
import Highlight from "../components/Highlight/Highlight"
import Clients from "../components/Clients/Clients"
import ClientSay from "../components/ClientsSay/ClientsSay"
import Awards from "../components/Awarads/Awards"
import Work from "./Work"
import Trade from "../components/TradePage/TradePage"
import Blog from "../components/Blog/Blog"
import Form from "../components/Form/Form"

const Home = () => {

    return (

        <React.Fragment>
            <About />
            <Highlight />
            <Clients />
            <ClientSay />
            <Awards />
            <Work />
            <Trade />
            <Blog />
            <Form />

        </React.Fragment>
    )
}

export default Home