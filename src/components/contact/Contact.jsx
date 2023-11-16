import { useState } from "react"
import "./Contact.css"
const contactUs = "./Images/contactUS.png"

const Contact = () => {
    return (
        <div className="main-card">
            <div className="contact-us">
                <div className="left-titles">
                    <h1>Contact US</h1>
                    <button>Home</button>
                </div>
                <div className="right-image">
                    <img src={contactUs} alt="" />
                </div>
            </div>

            <div className="address">
                <h2>Visit US</h2>
                <h4> Our Address</h4>
                <p>Mohali</p>
                <p>Plot No. C-184, 4th Floor, Industrial Area, Phase­ VIII­A, Sector 75, Sahibzada Ajit Singh Nagar, Punjab 160071, India</p>
            </div>

            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.544835007323!2d76.68959797562013!3d30.703080174598682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feefc6d84d361%3A0xdff70f3b5d78a533!2sSTPI%20Incubation%20Center%20Mohali!5e0!3m2!1sen!2sin!4v1700130075021!5m2!1sen!2sin" />

            </div>
        </div>

    )
}

export default Contact;