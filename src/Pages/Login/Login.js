import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './loginStyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);



    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const storedUsers = JSON.parse(localStorage.getItem(email));
        if(!storedUsers){
            toast.error("Account Not Found!");
            return;
        }
        const user = storedUsers.find(user => user.email === e.target.email.value);
        if (user) {
            if (user.password === e.target.password.value) {
                const email = user.email;
                navigate('/home', { state: email })
            } else {
                toast.error("Incorrect Password! Try Again!");
                return;
            }
        } else {
            toast.error("Account Not Found!");
            return;
        }
    };


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
                    <div className="headTitle mb-3">Hello Again!</div>
                    <input type="email" className="input" placeholder="Email Address" name="email" />
                    <input type="password" className="input" placeholder="password" name="password" />
                    <button className="primary">Login</button>
                </form>
                <div className="d-flex align-items-center gap-2">
                    <div style={{ color: "#176B87", fontSize: "15px" }}> I dont have account</div>
                    <Link className="linkButton" to="/create">Create Account</Link>
                    <ToastContainer />
                </div>
            </div>
        </div>

    )
}

export default Login;