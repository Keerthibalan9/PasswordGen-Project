import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import './HomeStyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const data = useLocation();

    const [passwordLength, setPasswordLength] = useState(12);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [generatedPassword, setGeneratedPassword] = useState('');

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
                <div className="welcomeNote">Welcome, {data.state}!</div>
                <div className="row">
                    <div className="passWrapper col-lg-7">
                        <div>
                            {generatedPassword && (
                                <div className="d-flex align-items-center">
                                    <input type="text" value={generatedPassword} readOnly className="inputCopy" />
                                 
                                    <div onClick={handleCopyToClipboard} className="copyBtn">Copy Password!</div>
                                    <ToastContainer />
                                </div>
                            )}
                        </div>
                        <div>
                            <label>
                                Password Length:
                                <input
                                    type="number"
                                    value={passwordLength}
                                    onChange={(e) => setPasswordLength(parseInt(e.target.value))}
                                    min={4}
                                    max={20}
                                    readonly
                                />
                                <label>Min. 4 and Max. 20</label>
                            </label>
                            <br />
                            <label>
                                <input
                                    type="checkbox"
                                    checked={includeLowercase}
                                    onChange={() => setIncludeLowercase(!includeLowercase)}
                                />
                                Include Lowercase
                            </label>
                            <br />
                            <label>
                                <input
                                    type="checkbox"
                                    checked={includeUppercase}
                                    onChange={() => setIncludeUppercase(!includeUppercase)}
                                />
                                Include Uppercase
                            </label>
                            <br />
                            <label>
                                <input
                                    type="checkbox"
                                    checked={includeNumbers}
                                    onChange={() => setIncludeNumbers(!includeNumbers)}
                                />
                                Include Numbers
                            </label>
                            <br />
                            <label>
                                <input
                                    type="checkbox"
                                    checked={includeSymbols}
                                    onChange={() => setIncludeSymbols(!includeSymbols)}
                                />
                                Include Symbols
                            </label>
                            <br />
                            <button onClick={handleGeneratePassword} className="primary">Generate Password</button>
                            <br />
                        </div>

                    </div>
                    <div className="col-lg-5">
                        Table
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;