import React from 'react';
import './LeftBar.css'
import {Link} from 'react-router-dom';

function LeftBar () {
    return (
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
              <Link to='./Dashboard' style={{textDecoration: 'none'}}>
              <h3 className="Dashboardselect">Dashboard</h3>
              </Link>
            </div>
            <div className="dashdiv">
              
              <img src="https://icons-for-free.com/iconfiles/png/512/graph+graph+growth+growth+graph+line+graph+icon+icon-1320086625366433865.png" alt="" className="piecon"/>
              <Link to='./Investments' style={{textDecoration: 'none'}}>
              <h3 className="Dashboard1">Investments</h3>
              </Link>
            </div>
            <div className="dashdiv">
              
              <img src="https://www.montanaoutdoor.com/wp-content/uploads/2019/09/shoot-l-or-R.png" alt="" className="piecon"/>
              <Link to='./Transaction'style={{textDecoration: 'none'}} >
              <h3 className="Dashboard1">Transaction</h3>
              </Link>
            </div>
            <div className="dashdiv">
              
              <img src="https://img.icons8.com/ios/452/wallet--v1.png" alt="" className="piecon"/>
              <Link to='./Wallet' style={{textDecoration: 'none'}}>
              <h3 className="Dashboard1">Wallet</h3>
              </Link>
            </div>
          </nav>
          <div className="signdiv">
            
            <img src="https://image.flaticon.com/icons/png/512/130/130925.png" alt="" className="piecon"/>
            <Link to='./Signout' style={{textDecoration: 'none'}}>
            <h3 className="Dashboard1">Sign-out</h3>
            </Link>
          </div>
        </div>
     </div>
    )
}

export default LeftBar;