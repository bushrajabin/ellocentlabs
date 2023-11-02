import { awardImages } from "../../common/common"
import "./Awards.css"
const Awards = () => {

    return (
        <div className="awardList">


            {
                awardImages.map((image, index, array) => {
                    return (
                        <div className="award">
                            <img src={image} className="videos"></img>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Awards;