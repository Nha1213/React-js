import React, { useState } from "react";
// import "../style/loginForm.css";
import { NavLink } from "react-router-dom";
import Register from "./Register";
import piclogo from "../../assets/picLogin.jpg";
import "./style/LoginSub.css";
import { Mail, LockKeyhole, Eye } from "lucide-react";
const LoginSub = () => {
    //  const [email, setEmail] = useState("");
    //   const [password, setPassword] = useState("");

    //   const YourSubmit = (e) => {
    //     e.preventDefault();

    //     // Check if both fields are empty

    //     // Check if email is empty
    //     if (email.trim() === "") {
    //       alert("Email is required.");
    //       return;
    //     }

    //     // Check if password is empty
    //     if (password.trim() === "") {
    //       alert("Password is required.");
    //       return;
    //     }

    //     // Add your login logic here
    //     alert("Login successful!");

    //     // Reset form fields
    //     setEmail("");
    //     setPassword("");
    //   };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const YourSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        if(email.trim() === ""){
            alert("Email is required.");
            return;
        }
        if(password.trim() === ""){
            alert("Password is required.");
            return;
        }

        alert("Login successful!");
        // Reset form fields
        setEmail("");
        setPassword("");
    }

    const ErrorProccess = (e) => {
        alert("Error Proccess");
    }
    return (
        <>
            <main className="loginForm">
                <div className="controll_img">
                    <img src={piclogo} alt="" />
                </div>
                <div className="controll_form">
                    <p className="login">
                        Login
                    </p>
                    <p className="login_text">Welcome back! Login with your data entered during registration</p>

                    <div className="btn-google">
                        <button onClick={ErrorProccess}>
                               <i class="bi bi-google"></i>
                            Login with Google
                        </button>
                    </div>
                    <div className="btn-google">
                        <button onClick={ErrorProccess}>
                              <i class="bi bi-facebook"></i>
                            Login with Facebook
                        </button>
                    </div>

                    <div className="or">
                        <div>
                            <hr />
                        </div>
                        <label htmlFor="">or</label>
                        <div>
                            <hr />
                        </div>
                    </div>
                    <div className="form">
                        <form action="submit">
                            <div className="con_input">
                                <div className="controll_icon">
                                    <Mail />
                                </div>
                                {/* <label htmlFor="email">Email</label> */}
                                <input value={email} onChange={(e) => setEmail(e.target.value)}     type="email" name="email" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="con_input">
                                <div className="controll_icon">
                                    <LockKeyhole />
                                </div>
                                {/* <label htmlFor="password">Password</label> */}
                                <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="remember">
                                <div>
                                    <input type="checkbox" name="" id="" onChange={(e) => setShowPassword(e.target.checked)} />
                                    <label htmlFor="">Remember me</label>
                                </div>
                                <NavLink >Forget Password?</NavLink>
                            </div>
                            <div className="login_btn">
                                <button type="submit" onClick={YourSubmit}>
                                    Login
                                </button>
                            </div>
                            <div className="register_forget">
                                <p>Don't have an account? <NavLink to={"Register"}>Register</NavLink></p>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>


        // <main className="loginForm">
        //   <p className="YourLogin">Login</p>
        //   <form onSubmit={YourSubmit}>
        //     <label htmlFor="email" className="email">Email</label>
        //     <input
        //       type="email"
        //       name="email"
        //       id="email"
        //       placeholder="Enter your email"
        //       value={email}
        //       onChange={(e) => setEmail(e.target.value)}
        //     />

        //     <label htmlFor="password">Password</label>
        //     <input
        //       type="password"
        //       name="password"
        //       id="password"
        //       placeholder="Enter your password"
        //       value={password}
        //       onChange={(e) => setPassword(e.target.value)}
        //     />

        //     <NavLink to={"Register"}><button type="submit">Login</button></NavLink>
        //   </form>
        // </main>
    );
}

export default LoginSub
