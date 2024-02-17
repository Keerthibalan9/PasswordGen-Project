import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import './HomeStyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const data = useLocation();

    const [passwordLength, setPasswordLength] = useState(6);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [generatedPassword, setGeneratedPassword] = useState('');
    const [passwordsHistory, setPasswordsHistory] = useState([]);
    const [currentUser, setCurrentUser] = useState(data.state);
    const [currentUserData, setCurrentUserData] = useState(JSON.parse(localStorage.getItem(currentUser)));
    const userName = currentUserData[0].name;
    const userRole =  currentUserData[0].role;

    const isAdmin = userRole === "admin";

    console.log("currentUserEmail:", currentUserData);
    console.log("Name", userName);
    console.log("Role", userRole);


    // Use map to update each object with the new array
    const updatedArray = currentUserData.map(obj => ({
        ...obj,
        history: passwordsHistory,
    }));

   


    function generatePassword(length, options) {
        const chars = {
            lowercase: 'abcdefghijklmnopqrstuvwxyz',
            uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            numbers: '0123456789',
            symbols: '!@#$%^&*()-_=+'
        };

        let allChars = '';
        for (let key in options) {
            if (options[key]) {
                allChars += chars[key];
            }
        }

        let password = '';
        for (let i = 0; i < length; i++) {
            password += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }

        return password;
    }

    const handleGeneratePassword = () => {
        const options = {
            lowercase: includeLowercase,
            uppercase: includeUppercase,
            numbers: includeNumbers,
            symbols: includeSymbols
        };

        const password = generatePassword(passwordLength, options);
        setGeneratedPassword(password);
        setPasswordsHistory([...passwordsHistory, password]);
        localStorage.setItem(currentUser, JSON.stringify(updatedArray))
    };
    

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(generatedPassword);
        toast('🤟Yay! Strong Password copied!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
        });
        return;
    };

    return (
        <div className="clear">
            <div className="container-fluid Nav">
                <div className="Nav d-flex align-items-center justify-content-between container ">
                    <span style={{ color: "#96E9C6", fontWeight: "600", fontSize: "20px" }}>PasswordGen***</span>
                    <Link className="secondary" to="/">Logout</Link>
                </div>
            </div>

            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="welcomeNote">Welcome, {userName}!</div>
                    {isAdmin ? (
                        <Link className="linkButton" to={{ pathname: '/history' }}>Password History</Link>
                    ) : (
                        <button className="disButton" disabled>Password History</button>
                    )}
                </div>

                <div className="d-flex align-items-center justify-content-center">

                    <div className="passWrapper bgm d-flex align-items-center justify-content-center">
                        <h4>Generator Module</h4>
                        <div>
                            {generatedPassword && (
                                <div className="d-flex align-items-center justify-content-center gap-4 ">
                                    <input type="text" value={generatedPassword} readOnly className="inputCopy" />

                                    <div onClick={handleCopyToClipboard} className="copyBtn">Copy Password!</div>
                                    <ToastContainer />
                                </div>
                            )}
                        </div>
                        <div className="d-flex align-items-center justify-content-center gap-4">
                            <div className="d-flex flex-column align-items-start justify-content-start pe-5 border-end">
                                <h6>What is the required password length?</h6>
                                <input
                                    type="number"
                                    value={passwordLength}
                                    onChange={(e) => setPasswordLength(parseInt(e.target.value))}
                                    min={4}
                                    max={20}
                                    readonly
                                />
                                <span style={{ color: "#000", fontSize: "12px", padding: "8px 0px 0px" }}>Min.4 | Max.20</span>
                            </div>
                            <div className="d-flex flex-column align-items-start p-4">
                                <h6>Your password contains</h6>
                                <div className="d-flex align-items-center justify-content-start gap-4">
                                    <div className="d-flex flex-column gap-2">
                                        <div className="d-flex gap-4">
                                            <div className="checkWidth d-flex gap-2">
                                                <input
                                                    type="checkbox"
                                                    checked={includeLowercase}
                                                    onChange={() => setIncludeLowercase(!includeLowercase)}
                                                />
                                                Lowercase
                                            </div>

                                            <div className="checkWidth d-flex gap-2">
                                                <input
                                                    type="checkbox"
                                                    checked={includeUppercase}
                                                    onChange={() => setIncludeUppercase(!includeUppercase)}
                                                />
                                                Uppercase
                                            </div>
                                        </div>
                                        <div className="d-flex gap-4">
                                            <div className="checkWidth d-flex gap-2">
                                                <input
                                                    type="checkbox"
                                                    checked={includeNumbers}
                                                    onChange={() => setIncludeNumbers(!includeNumbers)}
                                                />
                                                Numbers
                                            </div>

                                            <div className="checkWidth d-flex gap-2">
                                                <input
                                                    type="checkbox"
                                                    checked={includeSymbols}
                                                    onChange={() => setIncludeSymbols(!includeSymbols)}
                                                />
                                                Symbols
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <button onClick={handleGeneratePassword} className="primary">Generate Password</button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Home;