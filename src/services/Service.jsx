import { Services } from "../common/common";
const Service = () => {
    return(
    <div className="services-container">
        {
            Services.map((serviceData) => {
                const { heading, titles } = serviceData;
                return (
                    <div className="services">
  <h1>{heading}</h1>
                    <p>{titles}</p>
                    </div>
                  
                )
            })
        }
    </div>
    )

}

export default Service;