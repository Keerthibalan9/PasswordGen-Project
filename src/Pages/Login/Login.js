import React from "react";
import {Link } from "react-router-dom";
import './loginStyle.css';

const Login = () => {
    return (

        <div className="row d-flex">
            <div className="col-lg-7 bgBlue d-flex align-items-center">
                <div className="loginWrapper">
                    <div className="title">Password<span className="highlight">Gen***</span></div>
                    <p>Easily craft strong, customized passwords <br /> with a click in <b>PasswordGen</b>.</p>
                </div>
            </div>
            <div className="col-lg-5 bg-white d-flex flex-column align-items-center justify-content-center ">
                <form className=" d-flex flex-column align-items-start justify-content-start mb-3">
                    <div className="headTitle mb-3">Hello Again!</div>
                    <input type="text" className="input" placeholder="Email Address" />
                    <input type="password" className="input" placeholder="password" />
                    <button className="primary">Login</button>
                </form>
                <div className="d-flex align-items-center gap-2">
                    <div style={{ color: "#176B87",fontSize:"15px" }}> I dont have account</div>
    
                    <Link className="linkButton" to="/create">Create Account</Link>
                </div>
            </div>
        </div>

    )
}

export default Login;