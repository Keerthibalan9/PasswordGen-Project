import React from "react";
import { useLocation, Link} from "react-router-dom";
import './HomeStyle.css';

const Home = () => {
    const data = useLocation();
    return (
        <div>
            <div className="Nav d-flex align-items-center justify-content-between px-5">
                <span style={{color: "#96E9C6",fontWeight:"600", fontSize:"20px"}}>PasswordGen***</span> 
                <Link className="secondary" to="/">Logout</Link>
            </div>
            <div>
                Welcome {data.state}
            </div>
        </div>
    )
}

export default Home;