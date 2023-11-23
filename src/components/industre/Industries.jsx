
import { industries } from "../../apiData/Industries"
import { useNavigate } from "react-router-dom";
import "./Industries.css"
const industry = "./Images/industry.png"

const Industries = () => {
    const navigate = useNavigate();
    const backHome = () => {
      navigate('/')
    }
    return (
        <div className="industry-container">


            <div className="industry">
                <div className="industry-title">
                    <h2>Industries</h2>
                    <button onClick={backHome}>Home</button>
                </div>

                <div className="industry-image">
                    <img src={industry} alt="" />
                </div>
            </div>

            <div className="Our-Industries">
                <div className="industries-top-title">
                    <h2>Our Industries</h2>
                    <h3>Innovations In Key Industries</h3>
                    <p>In today’s digital world, Real-time operations and transparency are essential for every industry. We are an interactive team of developers that build award-winning websites, softwares, and applications for diverse domains. With the advanced technologies, We can Turn your idea into groundbreaking solutions</p>
                </div>
                <div className="industries-bottom-images">
                    {
                        industries.map((data, index, arr) => {
                            const { image, title1, title2 } = data;
                            return (
                                <div className="industry-div">
                                    <img src={image} alt="" />
                                    <h1>{title1}</h1>
                                    <p>{title2}</p>
                                </div>

                            )
                        })


                    }
                </div>

            </div>
        </div>

    )
}

export default Industries;