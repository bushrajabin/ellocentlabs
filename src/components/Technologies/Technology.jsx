
import { useNavigate } from "react-router-dom";
import "./Technology.css"
const technologyImage = "./Images/tech2.png"
const image2 = "./Images/technology.png"
const Technology = () => {
    const navigate = useNavigate();
    const backHome = () => {
      navigate('/')
    }
    return (
        <div className="technology-container">
            <div className="technology-top">
                <div className="technology-top-title">
                    <h1>Technologies</h1>
                    <button onClick={backHome}>Home</button>
                </div>
                <div className="technology-image">
                    <img src={technologyImage} alt="" />
                </div>
            </div>

            <div className="technology-bottom-image">
                <div className="technology-left-titles">
                    <h2>Technology Stack</h2>
                    <h3>Scale Your Business With Future-Proof Technologies</h3>
                    <p>Ellocent Labs IT Solutions Pvt. Ltd. is an emerging software solution provider company in India. We have a seasoned team of developers, designers, and testers who are chosen for their commitment to quality and exemplary skills. Our developers employ the latest technologies, frameworks, and components to create efficient solutions per today's digital world demands and requirements. To build stellar software, some technologies are best for developing the front end, and some are best for the back end. Well, our seasoned team can direct you to the specific needs of the project. Additionally, we work closely with our precious clients to turn their dreams into reality, integrate their feedback into projects, and develop efficient software solutions.</p>
                </div>

                <div className="technology-right-image">
                    <img src={image2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Technology