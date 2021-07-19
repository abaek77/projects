
import React, {useEffect, useRef, useState} from 'react';
import Login from './Login';

function Signup ({userEmail, userPassword, userName, setUserName, setUserPassword, setUserEmail, isLoggedIn, setIsLoggedIn}) {
    const [accounts, setAccounts] = useState([]);
    const inputRef = useRef ();
    const [account, setAccount] = useState("");
    const saveUserData = (event) => {
        event.preventDefault();
        setAccount({userName, userEmail, userPassword});
        console.log(account);
    }



    return (
        <form>
        <label htmlFor="emailSignup">Email:</label>
        <input  ref={inputRef} type="email" id="emailSignup" value={userEmail} onChange = {({target:{value}}) => setUserEmail(value)}/>
        <br />
        <label htmlFor="passwordSignup">Password:</label>
        <input type="text" id="passwordSignup" value={userPassword} onChange = {({target:{value}}) => setUserPassword(value)}/>
        <br />
        <label htmlFor="usernameSignup">Username:</label>
        <input type="text" id="usernameSignup" value={userName} onChange = {({target:{value}}) => setUserName(value)}/>
        <button onClick = {saveUserData}>Signup</button>
        </form>
    )
}

export default Signup;