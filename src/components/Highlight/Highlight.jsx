import { highlightKey } from '../../common/common';
import './Highlight.css'
const Highlight = () => {
    return (
        <div className="highlightDiv">
            <div className="Top">
                <h2>Our Key Highlights</h2>
                <h3>ELIS Record in Nutshell</h3>
            </div>
            <div className="bottom">
                {
                    highlightKey.map((data, index, arr) => {
                        const { image, title1, title2 } = data
                        return (
                            <div className="highlightImages">
                                <img src={image} alt="image" />
                                <h2>{title1}</h2>
                                <p>{title2}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>

    )
}

export default Highlight;
