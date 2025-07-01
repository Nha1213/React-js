import React, { useState } from "react";
// import "../style/loginForm.css";
import { NavLink } from "react-router-dom";
// import Register from "./Register";
import piclogo from "../../assets/picLogin.jpg";
import "./style/LoginSub.css";
import { Mail, LockKeyhole, Eye, } from "lucide-react";
import "./style/Register.css";
const Register = () => {
    const [first, setfirst] = useState("");
    const [last, setlast] = useState("");
    const [fullname, setfullname] = useState("");
    const [getemail, getsetemail] = useState("");
    const [getpassword, getsetpassword] = useState("");

    
    const headerCheck = (e) => {
        e.preventDefault();
        if (first.trim() === "") {
            alert("First Name is required.");
            return;
        }
        else if (last.trim() === "") {
            alert("Last Name is required.");
            return;
        }
        else if (fullname.trim() === "") {
            alert("Full Name is required.");
            return;
        }
        else if (getemail.trim() === "") {
            alert("Email is required.");
            return;
        }
        else if (getpassword.trim() === "") {
            alert("Password is required.");
            return;
        }


        alert("Register successful!");
        getsetemail("");
        getsetpassword("");
        setfirst("");
        setlast("");
        setfullname("");
    }
    return (

        <>
            <main className="loginForm">
                <div className="controll_img">
                    <img src={piclogo} alt="" />
                </div>
                <div className="controll_form">
                    <p className="login">
                        Register
                    </p>
                    <p className="login_text">Welcome back! Register with your data entered during registration</p>

                    <div className="form">
                        <form action="submit" onSubmit={headerCheck}>
                            <div className="fandl_name">
                                <input type="text" placeholder="First Name" onChange={(e) => setfirst(e.target.value)} value={first} />
                                <input type="text" placeholder="Last Name" onChange={(e) => setlast(e.target.value)} value={last} />
                            </div>
                            <div className="full_name">
                                <input type="text" placeholder="Full Name" onChange={(e) => setfullname(e.target.value)} value={fullname} />
                            </div>
                            <div className="con_input">
                                <div className="controll_icon">
                                    <Mail />
                                </div>
                                {/* <label htmlFor="email">Email</label> */}
                                <input type="email" name="email" id="email" placeholder="Enter your email" value={getemail} onChange={(e) => getsetemail(e.target.value)} />
                            </div>
                            <div className="con_input">
                                <div className="controll_icon">
                                    <LockKeyhole />
                                </div>
                                {/* <label htmlFor="password">Password</label> */}
                                <input type="password" name="password" id="password" placeholder="Enter your password" value={getpassword} onChange={(e) => getsetpassword(e.target.value)} />
                                {/* <i class="bi bi-eye-slash"></i> */}

                            </div>

                            <div className="message">
                                <textarea placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
                            </div>

                            <div className="login_btn">
                                <button type="submit">Register</button>
                            </div>
                            <div className="register_forget">
                                <p>Do you have an account? <NavLink to={"/login"}>login</NavLink></p>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Register
