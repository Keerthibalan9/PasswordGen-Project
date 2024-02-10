import React from "react";
import { useLocation } from "react-router-dom";
import './HomeStyle.css';

const Home = () => {
    const data = useLocation();
    return (
        <div>
            <div className="Nav d-flex align-items-center justify-content-between px-5">
                <span style={{color: "#96E9C6",fontWeight:"600", fontSize:"20px"}}>PasswordGen***</span> 
                <button className="secondary">Logout</button>
            </div>
            <div>
                Welcome {data.state}
            </div>
        </div>
    )
}

export default Home;