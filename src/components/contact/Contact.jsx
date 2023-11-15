import "./Contact.css"
const Contact = () => {

    const SubmitForm=()=>{
        // alert("hii")

    }
    return (
        <div className="contact_page">
            <div className="contact_top_title">
                <h2>Reach US Out</h2>
                <h3>Unstoppable Innovation Starts Here</h3>
            </div>

            <div className="contact_input_field">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="number" />
                <select id="options" >
                    <option value="select">Select Services </option>
                    <option value="Major service">Major service</option>
                    <option value="Web Development">Web Development </option>
                    <option value="Mobile App  Development">Mobile App  Development</option>
                    <option value="Designing Services">Designing Services</option>
                    <option value="igital Marketing">Digital Marketing</option>
                </select>
                <textarea name="" id="text" cols="100" rows="1" placeholder="Note"></textarea><br></br>
                <button className="submitButton" onClick={SubmitForm}>SUBMIT</button>
            </div>
        </div>



    )
}

export default Contact;