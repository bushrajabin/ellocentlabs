import React, { useState } from "react"
// import { useEffect, useState } from "react"
import Nav from "../components/Nav/Nav"
import About from "../components/About/About"
import Highlight from "../components/Highlight/Highlight"
import Clients from "../components/Clients/Clients"
import ClientSay from "../components/ClientsSay/ClientsSay"
import Awards from "../components/Awarads/Awards"
import Work from "../components/Work/Work"
import Trade from "../components/TradePage/TradePage"
import Blog from "../components/Blog/Blog"
import Form from "../components/Form/Form"
import Contact from "../components/contact/Contact"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeLinks, setActiveLinks] = useState(null)
    return (

        <React.Fragment>

            <Nav setIsOpen={setIsOpen} setActiveLinks={setActiveLinks} activeLinks={activeLinks} />
            <About />
            <Highlight />
            <Clients />
            <ClientSay />
            <Awards />
            <Work />
            <Trade />
            <Blog />
            <Form />
            {/* <Contact/> */}
        </React.Fragment>
    )
}

export default Home