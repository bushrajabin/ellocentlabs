import "./Industries.css"
const industry = "./Images/industry.png"

const Industries = () => {
    return (
        <div className="industry">
            <div className="industry-title">
                <h2>Industries</h2>
                <button>Homes</button>
            </div>

            <div className="industry-image">
                <img src={industry} alt="" />
            </div>
        </div>
    )
}

export default Industries;