import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";

function History() {
    const navigate = useNavigate();
    return (
        <div className="clear">
            <div className="container-fluid Nav">
                <div className=" d-flex align-items-center justify-content-between container ">
                    <span style={{ color: "#96E9C6", fontWeight: "600", fontSize: "20px" }}>PasswordGen***</span>
                    <Link className="secondary" to="/">Logout</Link>
                </div>
            </div>
            <div className='container'>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="welcomeNote">Password History</div>
                    <Link className="linkButton" onClick={() => navigate(-1)}>Go back</Link>
                </div>


            </div>

        </div>

    )
}

export default History