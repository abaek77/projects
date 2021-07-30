import React from 'react';
import './CreditCard.css';

function CreditCard() {
  return (
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

        <img src="https://cdn.iconscout.com/icon/free/png-512/mastercard-1527460-1298290.png" alt="" className="mastercard" />

      </div>
    </div>
  )
}

export default CreditCard;