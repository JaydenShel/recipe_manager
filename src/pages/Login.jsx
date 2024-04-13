import React, { useState, useEffect, useContext } from "react";
import '../App.css'
import Title from "../components/Title";
import TextBox from "../components/InputBox";
import { Context } from "../components/LoginState";
import HomeButton from '../components/HomeButton';

function Login(){
    const [isLoggedIn, setIsLoggedIn] = useContext(Context);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async () => {
        setIsSuccess(false);
        sessionStorage.setItem('username', username);
        try {
            const response = await fetch("http://localhost:3000/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.status >= 400) {
                setError("Registration Failed");
            } 
            else {
                const data = await response.json(); 
                sessionStorage.setItem('token', data.token);

                setError("Login Sucessful!");
                setIsSuccess(true);
                setIsLoggedIn(true);

                setTimeout( () => {
                    window.location.href = "/";
                }, 1000);
            }
        } catch (error) {
            setError(error.message);
        }
    }


    return(
        <div>
            <HomeButton />
            <Title/>
            <div>
            <TextBox
                    label="Enter Username"
                    type="text"
                    required
                    value={username}
                    onChange={setUsername}
                />
                <TextBox
                    label="Enter Password"
                    type="password"
                    required
                    value={password}
                    onChange={setPassword}
                    />
                <h3>*Passwords must be atleast 8-16 characters in length</h3>
                <button onClick={handleSubmit}>Sign In</button>
                <h3 className={isSuccess ? "success" : "warning"}>{error}</h3>
            </div>
        </div>
    );
}
export default Login;
