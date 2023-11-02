import "./ClientsSay.css";
const clientImage = "./Images/img-5.jpg"
const ratingImg = "./Images/img-6.jpg"
const ClientsSay = () => {
    return (
        <div className="clientSay">
            <h2>What our client says..</h2>
            <h3>Trusted By Our Esteemed Clients</h3>
            <img src={clientImage} alt="" className="client_img" />
            <img src={ratingImg} alt="" className="rating" />
            <h3>Danish say</h3>
            <h4>Founder & CEO, Taxionspot</h4>
            <p>We Have Contracted Ello Labs For Over A Year Now And We Are Very Pleased With The Work That They Are Able To Provide, Not Only That But They Deliver On The Expected Time Frame And Are Communicative Of Any Issues That They Are Facing. They Are Very Quick To Resolve Bugs And Any Discrepancies In The Project. They Are Very Talented In Full Stack Development.</p>
        </div>
    )
}

export default ClientsSay;