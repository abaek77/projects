import People from './People'
import React from 'react';
import './SendMoney.css';
import PeopleList from './PeopleList'

function SendMoney() {

  return (
    <div className="sendmoney">
      <div className="sendmoneynav">
        <h4 className="sendmoneytitle">Send money to</h4>
        <button className="plus"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/500px-Plus_symbol.svg.png" alt="" className="plussign" /></button>
      </div>
      <div className="people">
        <PeopleList />
      </div>
    </div>

  )
}

export default SendMoney;