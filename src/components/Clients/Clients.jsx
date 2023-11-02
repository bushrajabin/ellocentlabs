import "./Clients.css"
import { videoUsrls } from "../../common/common"


const Clients = () => {

    return (
        <div className="client">
            <div className="clientResult">
                <h2>Our Clients Get Results</h2>
            </div>

            <div className="ifarmevideo">
                {
                    videoUsrls.map((url, index, array) => {
                        return (

                            <iframe src={url} frameborder="0" className="videos"></iframe>

                        )

                    })
                }
            </div>

        </div>
    )
}

export default Clients;