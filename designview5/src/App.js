import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css'
import Transaction from './pages/Transaction';
import Wallet from './pages/Wallet';
import Investments from './pages/Investments'
import Dashboard from './pages/Dashboard';
import Signout from './pages/Signout';


function App() {
    return (
        <div className="App">
            <Router>
                <Route exact path="/"><Redirect to="/Dashboard" /></Route>
                <Route path="/Dashboard" component={Dashboard}></Route>
                <Route path="/Investments" component={Investments}></Route>
                <Route path="/Transaction" component={Transaction}></Route>
                <Route path="/Wallet" component={Wallet}></Route>
                <Route path="/Signout" component={Signout}></Route>
            </Router>

        </div>
    )
}

export default App;