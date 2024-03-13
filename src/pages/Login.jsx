import React from "react";
import '../App.css'
import Title from "../components/Title";
import TextBox from "../components/InputBox";

function Login(){
    return(
        <div>
            <Title/>
            <div>
                <TextBox label="Enter Username" type="text" required/>
                <TextBox label="Enter Password" type="text" required/>
            </div>
        </div>
    );
}
export default Login;