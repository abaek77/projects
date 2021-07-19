import React, { useState, useEffect, useRef} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Search from './Search';
import Upload from './Upload';
import Profile from './Profile';
import Nav from './Nav';
import Login from './Login'
import Signup from './Signup';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");


  return (
    <Router>
      <Login/>
      <div className="App">
      <Nav />
      <Route path="/Signup" component = {Signup}><Signup isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} userName={userName} setUserName={setUserName} setUserEmail={setUserEmail}userEmail={userEmail}userPassword={userPassword}setUserPassword={setUserPassword}/></Route>
      <Route path="/Home" component = {Home}><Home isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} userName={userName} setUserName={setUserName} setUserEmail={setUserEmail}userEmail={userEmail}userPassword={userPassword}setUserPassword={setUserPassword}/> </Route>
      <Route path="/Search" component = {Search}><Search isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} userName={userName} setUserName={setUserName} setUserEmail={setUserEmail}userEmail={userEmail}userPassword={userPassword}setUserPassword={setUserPassword}/> </Route>
      <Route path="/Upload" component = {Upload}><Upload isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} userName={userName} setUserName={setUserName} setUserEmail={setUserEmail}userEmail={userEmail}userPassword={userPassword}setUserPassword={setUserPassword}/> </Route>
      <Route path="/Profile" component = {Profile}><Profile isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} userName={userName} setUserName={setUserName} setUserEmail={setUserEmail}userEmail={userEmail}userPassword={userPassword}setUserPassword={setUserPassword}/> </Route>
      </div>
    </Router>
    
  );
}

export default App;
