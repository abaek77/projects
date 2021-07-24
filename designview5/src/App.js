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
                <div className="coolarrowtab"></div>
              </div>
              <div className="rightincome">
                <p className="incometext">Income</p>
                <h3 className="incomecost">$5,700</h3>
              </div>
            </div>
            <div className="spendingstab">
              <div className="leftspendings">
                <div className="coolarrow2"></div>
              </div>
              <div className="rightspendings">
                <p className="incometext">Spendings</p>
                <h3 className="incomecost">$2,254</h3>
              </div>
            </div>
          </div>
          <div className="bottommain">
            <h2 className="botmidtitle">Latest spendings</h2>
            <div className="midnav">
              <div className="applenav">
                <div className="leftapplenav">
                <img src="" alt="" className="applecon"/>
                <h4 className="applestore">Apple Store</h4>
                </div>
                <div className="rightapplenav">
                  <h4 className="applecost">- $32.50</h4>
                  <button className="arrow"></button>
                </div>
              </div>
              <div className="applenav">
                <div className="leftapplenav">
                <img src="" alt="" className="xboxcon"/>
                <h4 className="applestore">Amazon</h4>
                </div>
                <div className="rightapplenav">
                  <h4 className="applecost">- $4.20</h4>
                  <button className="arrow"></button>
                </div>
              </div>
              <div className="applnav">
                <div className="leftapplenav">
                <img src="" alt="" className="xboxcon"/>
                <h4 className="applestore">Xbox</h4>
                </div>
                <div className="rightapplenav">
                  <h4 className="applecost">- $100.29</h4>
                  <button className="arrow"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
     <div className="rightcolumn">
       <div className="rightnav">
         <button className="settings"></button>
         <button className="notifications"><img src="" alt="" className="reddot" /></button>
       </div>
       <div className="chart">
         <img src="" alt="" className="pichart"/>
         <div className="itemsofchart">
           <ul>
             <li className="blackdot"><div className="transport">Transport</div><div className="transportcost">$120.20</div></li>
             <li className="yellowdot"><div className="transport">Onlineshopping</div><div className="transportcost">$1200.00</div></li>
             <li className="bluedot"><div className="transport">Restaurant</div><div className="transportcost">$250.40</div></li>
           </ul>
         </div>
       </div>
       <div className="sendmoney">
         <div className="sendmoneynav">
           <h4 className="sendmoneytitle">Send money to</h4>
           <button className="plus"></button>
         </div>
          <div className="people">
          <div className="person">
            <img src="" alt="" className="pfp2"/>
            <p className="firstname">Ted</p>
            <p className="lastname">Lasso</p>
          </div>
          <div className="person">
            <img src="" alt="" className="pfp2"/>
            <p className="firstname">Joe</p>
            <p className="lastname">Biden</p>
          </div>
          <div className="person">
            <img src="" alt="" className="pfp2"/>
            <p className="firstname">Shiba</p>
            <p className="lastname">Inu</p>
          </div>
          <div className="person">
            <img src="" alt="" className="pfp2"/>
            <p className="firstname">Elon</p>
            <p className="lastname">Musk</p>
          </div>
        </div>
        <div className="scheduledpayment">
          <div className="schedulednav">
            <h4 className="sendmoneytitle">Scheduled payments</h4>
            <button className="plus">)</button>
          </div>
          <div className="paymentcompanies">
            <div id="youtube"className="company1">
              <h5 className="rate">$3.99/m</h5>
              <div className="bottomcompany">
                <img src="" alt="" className="companylogo"/>
                <p className="company">Youtube</p>
              </div>
            </div>
            <div id="Ended Sound"className="company1">
              <h5 className="rate">$1.99/m</h5>
              <div className="bottomcompany">
                <img src="" alt="" className="companylogo"/>
                <p className="company">Youtube</p>
              </div>
            </div>
            <div id="Vimeo Pro" className="company1">
              <h5 className="rate">$2.99/m</h5>
              <div className="bottomcompany">
                <img src="" alt="" className="companylogo"/>
                <p className="company">Vimeo Pro</p>
              </div>
            </div>
            <div id="Spotify"className="company1">
              <h5 className="rate">$15.00/m</h5>
              <div className="bottomcompany">
                <img src="" alt="" className="companylogo"/>
                <p className="company">Spotify</p>
              </div>
            </div>
          </div>
        </div>
       </div>
     </div>
    </div>
  );
}

export default App;
