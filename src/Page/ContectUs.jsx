import contact from "../assets/content-2.png"
import "./style/contect.css"
import { useState } from "react"
const ContectUs = () => {

  const [getEmail, setGetEmail] = useState("")
  const [getPassword, setGetPassword] = useState("")
  const [getMassage, setGetMassage] = useState("")
  const [ getname, setGetname] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( getEmail.trim() === "" || getPassword.trim() === "" || getMassage.trim() === "" || getname.trim() === "") {
      alert("Please fill some of the fields");
    } else {

      alert("Form submitted successfully!");
    }

    setGetEmail("");
    setGetPassword("");
    setGetMassage("");
    setGetname("");
  }
  return (
    <>
      <div className="fatherContant">
        <div className="contant">
          <div className="contantText">
            <form action="" onSubmit={handleSubmit}>
              <h1>Contact Us</h1>
              <input type="text" placeholder="Name" onChange={(e) => setGetname(e.target.value)} value={getname}/>
              <div>
                <input type="email" placeholder="Email" onChange={(e) => setGetEmail(e.target.value)} value={getEmail}/>
                <input type="password" name="" id="" placeholder="Password" onChange={(e) => setGetPassword(e.target.value)} value={getPassword} />
              </div>
              <textarea name="" id="" cols="30" rows="10" placeholder="Message" onChange={(e) => setGetMassage(e.target.value)} value={getMassage}></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="contantImg">
            <img src={contact} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContectUs