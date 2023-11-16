import { useState } from "react"
import "./Form.css"
const Form = () => {

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Contact, setContact] = useState('')
    const [Select, setSelect] = useState('')
    const [TextArea, setTextArea] = useState('')


    const SubmitForm = () => {
        if (Name == "" || Email == "" || Contact == "" || Select == "" || TextArea == "") {
            alert("please fill values!!!")
        } else {
            alert("")
        }

    }
    return (

        <div className="form_page">
            <div className="formt_top_title">
                <h2>Reach US Out</h2>
                <h3>Unstoppable Innovation Starts Here</h3>
            </div>

            <div className="formt_input_field">
                < i class="fa fa -solid fa-user" /><input type="text" placeholder="Name" value={Name} onChange={(e) => setName(e.target.value)} />
                <i class="fa fa-solid fa-envelope"></i><input type="email" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                <input type="number" value={Contact} onChange={(e) => setContact(e.target.value)} />

                <select id="options" value={Select} onChange={(e) => setSelect(e.target.value)} >
                    <option value="select">Select Services </option>
                    <option value="Major service">Major service</option>
                    <option value="Web Development">Web Development </option>
                    <option value="Mobile App  Development">Mobile App  Development</option>
                    <option value="Designing Services">Designing Services</option>
                    <option value="igital Marketing">Digital Marketing</option>
                </select><br></br>
                <i class="fa fa-file-text-o" i /><textarea name="" id="text" cols="100" rows="1" placeholder="Note" value={TextArea} onChange={(e) => setTextArea(e.target.value)}></textarea><br></br>
                <button className="submitButton" onClick={SubmitForm}>SUBMIT</button>
            </div>

        </div>



    )
}

export default Form;