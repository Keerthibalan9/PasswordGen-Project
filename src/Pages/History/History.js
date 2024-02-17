import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";
import './HistoryStyle.css';

function History() {
    const navigate = useNavigate();
    const [keys, setKeys] = useState([]);
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchDataFromLocalStorage = () => {
            const newData = {};

            keys.forEach(key => {
                // Retrieve data from local storage based on the key
                const storedData = localStorage.getItem(key);

                // Parse JSON if the stored data is in JSON format
                newData[key] = storedData ? JSON.parse(storedData) : null;
            });

            // Update the state with the retrieved data
            setData(newData);
        };

        fetchDataFromLocalStorage();
    }, [keys]);

    useEffect(() => {
        // Step 2: Get all keys from local storage
        const keys = Object.keys(localStorage);

        // Step 3: Set state to trigger rendering
        setKeys(keys);
    }, []);

    console.log("Hoi", keys);
    return (
        <div className="clear">
            <div className="d-flex align-items-center container-fluid Nav">
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
                <div>
                    {/* {Object.entries(data).map(([email, user]) => (
                        <table key={email}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                
                                    <th>History</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='name'>{user[0].name}</td>
                                    <td>
                                        {user[0].history.map((item, index) => (
                                            <div key={index} className='name'>{item}</div>
                                        ))}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    ))} */}
                     <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Password history</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(data).map(([email, user]) => (
                                <tr key={email}>
                                    <td className='name'>{user[0].name}</td>
                                    <td>{user[0].history}</td>
                                    {/* <td>
                                        {user[0].history.map((item, index) => (
                                            <div key={index}>{item}</div>
                                        ))}
                                    </td> */}

                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    )
}

export default History