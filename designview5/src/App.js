import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="leftcolumn">
        <h1 className="Fundbatch"><div className="Fund">Fund</div><div className="batch">batch</div></h1>
        <div className="profile">
          <img src="" alt="" className="pfp"/>
          <p className="welcome">Welcome back</p>
          <h3 className="name">Ronan Poolman</h3>
        </div>
        <div className="budget">
          <h2>$4,300</h2>
          <p className="monthly">Monthly budget</p>
        </div>
        <div className="nav">
          <nav className="navigation">
            <div className="dashdiv">
              <img src="https://static.thenounproject.com/png/544-200.png" alt="piecon" className="piecon"/>
              <h3 className="Dashboard1">Dashboard</h3>
            </div>
            <div className="investdiv">
              <img src="" alt="graphcon" className="graphcon"/>
              <h3 className="investments">Investments</h3>
            </div>
            <div className="trandsdiv">
              <img src="" alt="transcon" className="transcon"/>
              <h3 className="transactions">Transaction</h3>
            </div>
            <div className="walldiv">
              <img src="" alt="wallcon" className="wallcon"/>
              <h3 className="wallet">Wallet</h3>
            </div>
          </nav>
          <div className="signdiv">
            <img src="" alt="signcon" className="signcon"/>
            <h3 className="signout">Sign-out</h3>
          </div>
        </div>
     </div>
     <div className="midcolumn">
        <div className="search">
          <input type="text" placeholder="Search" />
          <button className="magnify"></button>
        </div>
        <div className="dashboard">
          <h1 className="dashy">Dashboard</h1>
          <div className="creditcard">
            <div className="navcard">
              <div className="leftnavcard">
                <p className="cardtext">Account balance</p>
              </div>
              <div className="rightnavcard">
                <p className="cardtext">Credit</p>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="onround"></span>
                </label>
              </div>
            </div>
            <div className="maincard">
              <h1 className="creditbalance">$2,200</h1>
            </div>
            <div className="botcard">
              <div className="botcardleft">
                <h4 className="asterisk">****</h4>
                <h4 className="creditnumber">4532</h4>
              </div>
              <div className="botcardright">
                <img src="" alt="mastercon" className="mastercard"/>
              </div>
            </div>
          </div>
          <div className="paymentlimit">
            <div className="limitdesc">
                <p className="limittext">Internet payment limit</p>
                <p className="limittext2"><div className="blue">$ 1,200</div><div className="grey"> / 3,000</div></p>
            </div>
            <div className="bar">
              <div className="greybar">
                <div className="bluebar"></div>
              </div>
            </div>
          </div>
          <div className="incomespendings">
            <div className="incometab">
              <div className="leftincome">

              </div>
              <div className="rightincome">

              </div>
            </div>
            <div className="spendingstab">
      
            </div>
          </div>
        </div>
     </div>
     <div className="rightcolumn"></div>
    </div>
  );
}

export default App;
