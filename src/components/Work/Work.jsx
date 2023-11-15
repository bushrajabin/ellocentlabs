import { workImage } from "../../common/common";
import "./Work.css"
const Work = () => {
    return (
        <div className="packageDiv">
            <div className="package-top-title">
                <h2>WORK WE ARE PROUD OF</h2>
                <h3>We Are A Whole Package To Spark Growth, & Break Business Boundaries</h3>
            </div>

            <div className="package-div">
                {
                    workImage.map((data, index, arr) => {
                        const { image, title1, title2 } = data;
                        return (
                            <div className="work-images">
                                <div className="left_images">
                                    <img src={image} alt="" />
                                    <h2>{title1}</h2>
                                </div>
                                 <p>{title2}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Work;