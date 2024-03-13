import React from "react";
import '../App.css'
import Title from "../components/Title";
import TextBox from "../components/InputBox";

function Account(){
    return(
        <div>
            <Title/>
            <div>
                <TextBox label="Choose Username" type="text" required/>
                <TextBox label="Choose Password" type="text" required/>
                <h3>*Passwords must be atleast 8 characters in length</h3>
            </div>
        </div>
    );
}
export default Account;