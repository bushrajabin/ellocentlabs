import "./Technology.css"
const technologyImage = "./Images/tech2.png"
const Technology = () => {
    return (
        <div className="technology-container">
            <div className="technology-top">
                <div className="technology-top-title">
                    <h1>Technologies</h1>
                    <button>Home</button>
                </div>
                <div className="technology-image">
                    <img src={technologyImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Technology