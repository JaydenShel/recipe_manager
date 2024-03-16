import React, { useState, useEffect } from "react";
import '../App.css'
import Title from "../components/Title";
import TextBox from "../components/InputBox";

function Account(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        console.log("Username:", username);
        console.log("Password:", password);
        
        if(username.length === 0 || password.length === 0){
            setError("Please enter both a username and password!")
        }

        else if(password.length < 8 || password.length > 16){
            setError("Please keep password within required length!")
        }

        else{
            setError("");
        }
    }

    return(
        <div>
            <Title/>
            <div>
            <TextBox
                    label="Choose Username"
                    type="text"
                    required
                    value={username}
                    onChange={setUsername}
                />
                <TextBox
                    label="Choose Password"
                    type="password"
                    required
                    value={password}
                    onChange={setPassword}
                />
                <h3>*Passwords must be atleast 8-16 characters in length</h3>
                <button onClick={handleSubmit}>Create Account</button>
                <h3 className="warning">{error}</h3>
            </div>
        </div>
    );
}
export default Account;