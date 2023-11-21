import {awardImages} from '../../apiData/AwardImages'
import "./Awards.css"
const Awards = () => {

    return (

        <div className="awardpage">
            <div className="awardTitle">
                <h2>Awards and Accolades</h2>
                <h3>Experience our Precision, Quality & Agility</h3>
            </div>
            <div className="awardList">
                {
                    awardImages.map((data, index, array) => {

                        return (
                            <div className="div-for-award">
                                <img src={data.Image} ></img>
                                <p>{data.title}</p>
                            </div>

                        )
                    })
                }
            </div>
        </div>

    )
}

export default Awards;