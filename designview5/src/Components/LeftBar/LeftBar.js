import React from 'react';
import './LeftBar.css'
import { Link } from 'react-router-dom';
import Nav from './Nav'

function LeftBar() {
  return (
    <div className="leftcolumn">
      <div className="topleft">
        <h1 className="Fundbatch"><div className="Fund">Fund</div><div className="batch">batch</div></h1>
        <div className="profile">
          <img src="https://extranet.worldarchery.sport/ProfilePictures/?Id=30832" alt="" className="pfp" />
          <p className="welcome">Welcome back</p>
          <h3 className="name">Kim Je Deok</h3>
        </div>
        <div className="budget">
          <h2 className="money1">$4,300</h2>
          <p className="monthly">Monthly budget</p>
        </div>
      </div>
      <div className="nav">

        <Nav />

        <div className="signdiv">

          <img src="https://image.flaticon.com/icons/png/512/130/130925.png" alt="" className="piecon" />
          <Link to='./Signout' style={{ textDecoration: 'none' }}>
            <h3 className="Dashboard1">Sign-out</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LeftBar;