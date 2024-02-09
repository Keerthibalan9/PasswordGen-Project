import React from "react";
import './loginStyle.css';
import Button from '../../components/Button/Button'

const Login = () => {
    return (

        <div className="row d-flex">
            <div className="col-lg-7 bgBlue d-flex align-items-center">
                <div className="loginWrapper">
                    <div className="title">Password<span className="highlight">Gen***</span></div>
                    <p>Easily craft strong, customized passwords <br/> with a click in <b>PasswordGen</b>.</p>
                </div>
            </div>
            <div className="col-lg-5 bg-white d-flex align-items-center justify-content-center">
                <Button/>
            </div> 
        </div>

    )
}

export default Login;