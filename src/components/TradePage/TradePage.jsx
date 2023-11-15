
import "./TradePage.css"

import { tradeImages } from "../../common/common"

const webImage = "https://ellocentlabs.com/static/toolsoftradefeatured-2d165abd2755f312cd97bd0d87be6b95.svg"

const Tradepage = () => {

  const onlinks = (link) => {
    console.log(link)

  }
  return (

    <div className="tradepage">
      <div className="iconImage">
        <div className="heading">
          <h2>Our Tools of Trade</h2>
          <p>We Hold In-Depth Expertise In Future Proof Technologies</p>
        </div>
        <div className="awardimage">
          {
            tradeImages.map((data, index, array) => {

              const { Image, title, link } = data
              return (
                <div className="award">
                  <a href={link} target="_blank"><img src={Image} onClick={() => onlinks(link)} ></img></a>
                  <p>{title}</p>

                </div>


              )
            })
          }
        </div>

      </div>

      <div className="webImage">
        <img src={webImage}></img>

      </div>

    </div>

  )
}

export default Tradepage;