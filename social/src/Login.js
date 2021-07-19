import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {autoFocus} from 'react-dom';
import Signup from './Signup';

function Login () {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userName, setUserName] = useState("");

    const loginHandler = () => {

    }

    return (
        <form hidden = {isLoggedIn}>
            <label htmlFor="emailLogin">Email:</label>
                <input id= "emailLogin" type="email" autoFocus value={userEmail} onChange = {({target:{value}}) => setUserEmail(value)}/>
                <br />
                <label htmlFor="passwordLogin">Password:</label>
                <input id= "passwordLogin" type="text" value={userPassword} onChange = {({target:{value}}) => setUserPassword(value)}/>
                <p>Don't have an account? link <Link to ='/Signup'>Click here</Link></p>
                <button onClick={loginHandler}>Login</button>
        </form>
    )
}

export default Login;