import React from 'react';
import './LatestSpendings.css'

function LatestSpendings() {
  return (
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
  )
}

export default LatestSpendings;