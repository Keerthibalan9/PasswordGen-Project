import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignInStyle.css';

const SignIn = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [email, setEmail] = useState("");
    const [isChecked, setChecked] = useState(false);
        useEffect(() => {
        setData(JSON.parse(localStorage.getItem('user')))
    }, [])

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.name.value && e.target.email.value && e.target.password.value) {
                        if (!localStorage.getItem(e.target.email.value)) {
                console.log("User not found");

                if (isChecked === true) {
                    localStorage.setItem(e.target.email.value, JSON.stringify([{ name: e.target.name.value, email: e.target.email.value, password: e.target.password.value, role: 'admin' }]))
                    navigate('/home', { state: e.target.name.value })
                  
                    return;
                } else {
                    localStorage.setItem(e.target.email.value, JSON.stringify([{ name: e.target.name.value, email: e.target.email.value, password: e.target.password.value, role: 'member' }]))
                    navigate('/home', { state: e.target.name.value })
                    console.log("User not found. so creating a member user");
                   
                }

            } else {
                toast.error("User already exists!");
                return;
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
                    <div className="d-flex gap-2 mb-3 pointer">

                        <input type="checkbox" id="adminCheckbox" className="pointer" onChange={handleCheckboxChange}></input>
                        <label for="adminCheckbox" className="pointer">Im an Admin</label>
                    </div>
                                            <button className="primary">Create</button>
                                    </form>
                <div className="d-flex align-items-center gap-2">
                    <div style={{ color: "#176B87", fontSize: "15px" }}> Already have account?</div>
                    <Link className="linkButton" to="/">Login</Link>
                    <ToastContainer />
                </div>
            </div>
        </div>

    )
}

export default SignIn;