import React, { useState, useEffect } from "react";
import '../App.css'
import Title from "../components/Title";
import TextBox from "../components/InputBox";

function Account(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async () => {
        setIsSuccess(false);
        try {
            const response = await fetch("http://localhost:3000/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
        
            if (response.status >= 400) {
                const errorData = await response.json();
                setError({errorData});
            } 
            else {
                setError("Registration Sucessful");
                setIsSuccess(true);
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return(
        <div>
            <Title/>
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
            <h3 className={isSuccess ? "success" : "warning"}>{error}</h3>
        </div>
    );
}
export default Account;