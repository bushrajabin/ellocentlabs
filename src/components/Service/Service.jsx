import { Services } from "../../common/common";
import "./Service.css"
const Service = () => {
    return (
        <div className="services-container">
            {
                Services.map((serviceData) => {
                    const { heading, titles } = serviceData;
                    return (
                        <div className="services">
                            <div className="service-heading">
                                <h3>{heading}</h3>
                            </div>

                            <div className="service-types">
                                <p>{titles}</p>
                            </div>

                        </div>

                    )
                })
            }
        </div>
    )

}

export default Service;