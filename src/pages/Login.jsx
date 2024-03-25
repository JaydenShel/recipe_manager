import React from "react";
import '../App.css'
import Title from "../components/Title";
import TextBox from "../components/InputBox";
import HomeButton from '../components/HomeButton';

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
                <button>Sign In</button>
            </div>
        </div>
    );
}
export default Login;