import React, { useState, useEffect, useContext } from "react";
import '../App.css'
import Title from "../components/Title";
import TextBox from "../components/InputBox";
import { Context } from "../components/LoginState";
import HomeButton from '../components/HomeButton';

function Account(){
    const [isLoggedIn, setIsLoggedIn] = useContext(Context);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        console.log("isLoggedIn state:", isLoggedIn);
    }, [isLoggedIn]);

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
                setError("Registration Failed");
            } 
            else {
                const data = await response.json(); 
                sessionStorage.setItem('token', data.token);

                setError("Registration Sucessful");
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