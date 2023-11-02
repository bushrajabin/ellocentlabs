import './Highlight.css'
const highligtImage1 = 'Images/img-1.png'
const highligtImage2 = 'Images/img-2.png'
const highligtImage3 = 'Images/img-3.png'
const highligtImage4 = 'Images/img-4.png'


const Highlight = () => {
    return (
        <div className="highlightDiv">
            <div className="Top">
                <h2>Our Key Highlights</h2>
                <h3>ELIS Record in Nutshell</h3>
            </div>
            <div className="bottom">
                <div className="img1">
                    <img src={highligtImage1} alt="highligtImage" />
                    <h3>5+</h3><h4> Years  Experience</h4>
                </div>
                <div className="img2">
                    <img src={highligtImage2} alt="highligtImage" />
                    <h3>100+ </h3>
                    <h4>Succesfully Delivering project</h4>
                </div>


                <div className="img3">
                    <img src={highligtImage3} alt="highligtImage" />
                    <h3>40+</h3>
                        <h4>Professionals
                        Under One Umbrella</h4>
                </div>
                <div className="img4">
                    <img src={highligtImage4} alt="highligtImage" />
                    <h3>30+</h3>
                    <h4>  Happy
                        Clients</h4>
                </div>

            </div>
        </div>

    )
}

export default Highlight;
