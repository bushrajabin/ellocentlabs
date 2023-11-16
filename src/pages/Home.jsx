import { useEffect, useState } from "react"
// import React { useState } from "react"
import React ,{useState} from "react"
import Nav from "../components/Nav/Nav"
import Contact from "../components/contact/Contact"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
  
        <>
       
            <Nav setIsOpen={setIsOpen} />
        </>
    )
}

export default Home