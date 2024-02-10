import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import './SignInStyle.css';

const SignIn = () => {
    const navigate= useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.name.value && e.target.email.value && e.target.password.value) {
            if (!localStorage.getItem('user')) {
                localStorage.setItem('user', JSON.stringify([{ name: e.target.name.value, email: e.target.email.value, password: e.target.password.value, }]))
                navigate('/home',{state:e.target.name.value})
            }
        }
    }
    return (
        <div className="row d-flex">
            <div className="col-lg-7 bgBlue d-flex align-items-center">
                <div className="loginWrapper">
                    <div className="title">Password<span className="highlight">Gen***</span></div>
                    <p>Easily craft strong, customized passwords <br /> with a click in <b>PasswordGen</b>.</p>
                </div>
            </div>
            <div className="col-lg-5 bg-white d-flex flex-column align-items-center justify-content-center ">
                <form className=" d-flex flex-column align-items-start justify-content-start mb-3" onSubmit={(e) => handleSubmit(e)}>
                    <div className="headTitle mb-3">Create Account</div>
                    <input type="text" className="input" placeholder="Name" name="name" />
                    <input type="email" className="input" placeholder="Email Address" name="email" />
                    <input type="password" className="input" placeholder="password" name="password" />
                    <button className="primary">Signin</button>
                </form>
                <div className="d-flex align-items-center gap-2">
                    <div style={{ color: "#176B87", fontSize: "15px" }}> Already have account?</div>
                    <Link className="linkButton" to="/">Login</Link>
                </div>
            </div>
        </div>

    )
}

export default SignIn;