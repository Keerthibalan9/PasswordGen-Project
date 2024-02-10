import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import './HomeStyle.css';

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
    };

    return (
        <div>
            <div className="Nav d-flex align-items-center justify-content-between px-5">
                <span style={{ color: "#96E9C6", fontWeight: "600", fontSize: "20px" }}>PasswordGen***</span>
                <Link className="secondary" to="/">Logout</Link>
            </div>
            <div>
                Welcome {data.state}
                <div>
                    <label>
                        Password Length:
                        <input
                            type="number"
                            value={passwordLength}
                            onChange={(e) => setPasswordLength(parseInt(e.target.value))}
                            min={4}
                            max={30}
                        />
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
                    <button onClick={handleGeneratePassword}>Generate Password</button>
                    <br />
                    {generatedPassword && (
                        <div>
                            <input type="text" value={generatedPassword} readOnly />
                            <button onClick={handleCopyToClipboard}>Copy to Clipboard</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home;