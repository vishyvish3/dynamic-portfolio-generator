import './nav.css';
import React, { useState } from 'react';
const Navbar = () => {
    const URL = "https://react-auth-server.herokuapp.com"

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [regEmail, setRegEmail] = useState("");
    const [regPassword, setRegPassword] = useState("");
    const [regRepPassword, setRegRepPassword] = useState("");

    const loginForm = (e) => {
        e.preventDefault()
        try {
            fetch(`${URL}/login`, {
                method: "POST",
                body: JSON.stringify({
                    email, password
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then((result) => result.json())
                .then((data) => {

                    if (data.message === "login") {

                        document.cookie = "user=true";

                        window.location.href = "/resumeform";
                    }
                    else if (data.message === "loginerror") {
                        alert("Incorrect Password!");
                    }
                    else {
                        alert("User account not found !!");
                    }

                })
                .catch(err => {
                    console.log(err)
                })
        }
        catch (err) {
            console.log(err)
        }


    }

    const regForm = (e) => {
        e.preventDefault()

        if (regEmail.length < 1) {
            alert("Enter EmailId !!");
            return
        }
        if (regPassword !== regRepPassword) {
            alert("Passwords do not match !!");
            return;
        }
        try {
            fetch(`${URL}/register`, {
                method: "POST",
                body: JSON.stringify({
                    email: regEmail,
                    password: regPassword
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then((result) => result.json())
                .then((data) => {
                    if (data.message) {
                        alert("User successfully registered !!");
                    } else if (!data.message) {
                        alert("User already exists !!");
                    } else {
                        alert("Server Error. Please try later !!");
                    }
                })

        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="app container">
            <div className="row box1">
                <div className="col-md-12 pl-0">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#register">Register</a>
                        </li>

                    </ul>
                </div>
                <div className="col-md-12">
                    <div className="tab-content">
                        <div id="login" className="tab-pane active">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2>Login</h2>
                                    <div className="login" id="login-form">
                                        <form onSubmit={loginForm}>
                                            <div className="group">
                                                <label className="label">Email</label> <br />
                                                <input id="logInEmailId" type="text" value={email} className="input" placeholder="Enter your Email" onChange={e => setEmail(e.target.value)} required />
                                            </div>
                                            <div className="group">
                                                <label className="label">Password</label> <br />
                                                <input id="loginPassword" type="password" value={password} className="input" data-type="password" onChange={e => setPassword(e.target.value)} placeholder="Enter your password" required />

                                            </div>
                                            <div className="group">
                                                <input type="submit" id="loginbtn" className=" btn btn-success" value="Login" />
                                            </div>
                                        </form>
                                        <div className="hr">
                                        </div>
                                        <div className="foot">
                                            <a href="/reset">Forgot Password?</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 center">
                                    <img className="img-fluid pad" src="images/login_img.png" />
                                </div>
                            </div>

                        </div>

                        <div id="register" className="tab-pane">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2>Register</h2>
                                    <div className="sign-up-form" id="sign-up-form">
                                        <form onSubmit={regForm}>
                                            <div className="group">
                                                <label className="label">Email Id</label> <br />
                                                <input id="signupEmailId" type="text" value={regEmail} className="input" onChange={e => setRegEmail(e.target.value)} placeholder="Enter your Email" required />
                                            </div>
                                            <div className="group">
                                                <label className="label">Password</label> <br />
                                                <input id="signUpPassword" type="password" value={regPassword} className="input" onChange={e => setRegPassword(e.target.value)} data-type="password" placeholder="Create your password" required />
                                            </div>
                                            <div className="group">
                                                <label className="label">Repeat Password</label> <br />
                                                <input id="confirmPassword" type="password" value={regRepPassword} className="input" onChange={e => setRegRepPassword(e.target.value)} data-type="password" placeholder="Re-Enter your password" required />
                                            </div>
                                            <div className="group">
                                                <input id="registerbtn" type="submit" className="button btn btn-success" value="Sign Up" />
                                            </div>

                                            <div>
                                                <a className="altr" href="/">Already registered ? <br />Click here to Login</a>
                                            </div>
                                        </form>

                                    </div>

                                </div>
                                <div className="col-md-6 center"><img className="img-fluid" src="/images/register_img.png" /> </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Navbar;