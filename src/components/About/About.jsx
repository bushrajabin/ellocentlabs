import "./About.css"

const aboutImg = 'Images/about.jpg'
const About = () => {
    return (
        <div className="mainContainer">
            <div className="about">
                <h2>DELIGHT YOUR CUSTOMERS</h2>
                <h1><span style={{ color: "blue" }}>We are awarderd</span> 12th position  <span style={{ color: "blue" }}>by the Top Software Companies</span></h1>
                <p>Ellocent Labs IT Solutions Pvt. Ltd. successfully marked its presence in the prominent IT development business world by delivering innovative solutions via implementing the SOLID coding principles.
                </p>
                <button className="btn2">LEARN MORE</button>
            </div>
            <div className="image">
                <img src={aboutImg} alt="aboutImg" />
            </div>
        </div>
    )
}

export default About;