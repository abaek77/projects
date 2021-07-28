import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="leftcolumn">
       <div className="topleft">
        <h1 className="Fundbatch"><div className="Fund">Fund</div><div className="batch">batch</div></h1>
        <div className="profile">
          <img src="https://extranet.worldarchery.sport/ProfilePictures/?Id=30832" alt="" className="pfp"/>
          <p className="welcome">Welcome back</p>
          <h3 className="name">Kim Je Deok</h3>
        </div>
        <div className="budget">
          <h2 className="money1">$4,300</h2>
          <p className="monthly">Monthly budget</p>
        </div>
        </div>
        <div className="nav">
          <nav className="navigation">
            <div className="dashdiv">
              <img src="https://static.thenounproject.com/png/544-200.png" alt="" className="piecon"/>
              <h3 className="Dashboardselect">Dashboard</h3>
            </div>
            <div className="dashdiv">
              <img src="https://icons-for-free.com/iconfiles/png/512/graph+graph+growth+growth+graph+line+graph+icon+icon-1320086625366433865.png" alt="" className="piecon"/>
              <h3 className="Dashboard1">Investments</h3>
            </div>
            <div className="dashdiv">
              <img src="https://www.montanaoutdoor.com/wp-content/uploads/2019/09/shoot-l-or-R.png" alt="" className="piecon"/>
              <h3 className="Dashboard1">Transaction</h3>
            </div>
            <div className="dashdiv">
              <img src="https://img.icons8.com/ios/452/wallet--v1.png" alt="" className="piecon"/>
              <h3 className="Dashboard1">Wallet</h3>
            </div>
          </nav>
          <div className="signdiv">
            <img src="https://image.flaticon.com/icons/png/512/130/130925.png" alt="" className="piecon"/>
            <h3 className="Dashboard1">Sign-out</h3>
          </div>
        </div>
     </div>
     <div className="midcolumn">
       <div className="width">
        <div className="search">
          <input className="input1"type="text" placeholder="Search" />
          <button className="magnify"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" alt="" className="glass"/></button>
        </div>
        <div className="dashboard">
          <h1 className="dashy">Dashboard</h1>
          <div className="creditcard">
            <div className="navcard">
                <p className="cardtext">Account balance</p>

              <div className="rightnavcard">
                <p className="cardtext">Credit</p>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
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

                <img src="https://cdn.iconscout.com/icon/free/png-512/mastercard-1527460-1298290.png" alt="" className="mastercard"/>

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
                <div className="coolarrowtab">
                  <img className="arrow1"src="https://image.flaticon.com/icons/png/512/60/60611.png" alt="" />
                </div>
              </div>
              <div className="rightincome">
                <p className="incometext">Income</p>
                <h3 className="incomecost">$5,700</h3>
              </div>
            </div>
            <div className="incometab2">
              <div className="leftincome">
                <div className="coolarrow2">
                  <img className="arrow2"src="https://image.flaticon.com/icons/png/512/60/60611.png" alt="" />
                </div>
              </div>
              <div className="rightincome">
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
                <div className="xboxstorage"></div>
                  <h4 className="applestore">Apple Store</h4>
                </div>
                <div className="rightapplenav">
                  <h4 className="applecost">- $32.50</h4>
                  <button className="arrow"></button>
                </div>
              </div>
              <div className="applenav">
                <div className="leftapplenav">
                  <div className="xboxstorage2"></div>
                  <h4 className="applestore">Amazon</h4>
                </div>
                <div className="rightapplenav">
                  <h4 className="applecost">- $4.20</h4>
                  <button className="arrow"></button>
                </div>
              </div>
              <div className="applenav">
                <div className="leftapplenav">
                  <div className="xboxstorage3"></div>
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
     </div>

     <div className="rightcolumn">
       <div className="width2">
         <div className="tophalfright">
       <div className="rightnav">
         <button className="settings"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png" alt="" className="gear"/></button>
         <button className="notifications"><img src="https://img.icons8.com/ios/452/appointment-reminders--v1.png" alt="" className="noti" /><img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Basic_red_dot.png" className="reddot" alt="" /> </button>
       </div>
       <div className="righttop">
         <div className="rightnav2">
         <h2 className="expenses">Expenses statistics</h2>
         <select  name="" id="">
           <option hidden="true"value="">Month</option>
         </select>
         </div>
       <div className="chart">
         <img src="https://cdn.fastly.picmonkey.com/content4/previews/infographic_one/infographic_one_14_384.png" alt="" className="pichart"/>
         <div className="itemsofchart">
           <ul className="blackdot">
             <li className="oneone" ><span><div className="transport">Transport</div><div className="transportcost">$120.20</div></span></li>
            </ul> 
            <ul className="yellowdot">
             <li className="twotwo"><span><div className="transport">Onlineshopping</div><div className="transportcost">$1,200.00</div></span></li>
             </ul> 
             <ul className="bluedot">
             <li className="threethree"><span><div className="transport">Restaurant</div><div className="transportcost">$250.40</div></span></li>
           </ul>
         </div>
       </div>
       </div>
       </div>
       <div className="bothalfright">
       <div className="sendmoney">
         <div className="sendmoneynav">
           <h4 className="sendmoneytitle">Send money to</h4>
           <button className="plus"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/500px-Plus_symbol.svg.png" alt="" className="plussign"/></button>
         </div>
          <div className="people">
          <div className="person">
            <img src="https://external-preview.redd.it/MMflGblLudSD_tqCefYHx1ei2_BWiT3ZJkBKMVHtXHc.jpg?auto=webp&s=6bedfc7ae24c712ac475eb8b533b46109860b4f7" alt="" className="pfp2"/>
            <p className="firstname">Ted</p>
            <p className="lastname">Lasso</p>
          </div>
          <div className="person">
            <img src="https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9jcmVhdG9yLWltYWdlcy5wb2RjaGFzZXIuY29tL2U5MjlmMGE2YjcyMTJhMjA0YWViYWIyOWY5ZDEzZGU1LnBuZw%3D%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D" alt="" className="pfp2"/>
            <p className="firstname">Joe</p>
            <p className="lastname">Biden</p>
          </div>
          <div className="person">
            <img src="https://pbs.twimg.com/profile_images/610150821397987331/qZzryLFn_400x400.jpg" alt="" className="pfp2"/>
            <p className="firstname">Shiba</p>
            <p className="lastname">Inu</p>
          </div>
          <div className="person">
            <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg" alt="" className="pfp2"/>
            <p className="firstname">Elon</p>
            <p className="lastname">Musk</p>
          </div>
        </div>
        <div className="scheduledpayment">
          <div className="schedulednav">
            <h4 className="sendmoneytitle2">Scheduled payments</h4>
            <button className="plus"><img src="https://static.thenounproject.com/png/1513337-200.png" className="arrowbot" alt="" /></button>
          </div>
          <div className="paymentcompanies">
            <div id="youtube"className="company1">
              <h5 className="rate">$3.99/m</h5>
              <div className="bottomcompany">
                <img src="https://1000logos.net/wp-content/uploads/2017/05/youtube-symbol.jpg" alt="" className="companylogo"/>
                <p className="company">Youtube</p>
              </div>
            </div>
            <div id="netflix"className="company1">
              <h5 className="rate">$5.99/m</h5>
              <div className="bottomcompany">
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png" alt="" className="companylogo"/>
                <p className="company">Netflix</p>
              </div>
            </div>
            <div id="Vimeo" className="company1">
              <h5 className="rate">$2.99/m</h5>
              <div className="bottomcompany">
                <img src="https://www.4kshooters.net/wp-content/uploads/2017/02/Vimeo.png" alt="" className="companylogo"/>
                <p className="company">Vimeo Pro</p>
              </div>
            </div>
            <div id="Spotify"className="company1">
              <h5 className="rate">$15.00/m</h5>
              <div className="bottomcompany">
                <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png" alt="" className="companylogo"/>
                <p className="company">Spotify</p>
                </div>
              </div>
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
