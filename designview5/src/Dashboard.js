import React from 'react'
import './Dashboard.css';
import LeftBar from './Components/LeftBar/LeftBar';
import CreditCard from './Components/CreditCard/CreditCard';
import PaymentLimit from './Components/PaymentLimit/PaymentLimit';
import IncomeSpendings from './Components/Income Spendings/IncomeSpendings';
import LatestSpendings from './Components/LatestSpendings/LatestSpendings';
import ExpensesChart from './Components/ExpensesChart/ExpensesChart';
import SendMoney from './Components/SendMoney/SendMoney';
import ScheduledPayments from './Components/ScheduledPayments/ScheduledPayments';
import SettingsButton from './Components/SettingsButton/SettingsButton';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="Dashboard">
     <LeftBar />
     <div className="midcolumn">
       <div className="width">
        <div className="search">
          <input className="input1"type="text" placeholder="Search" />
          <button className="magnify"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" alt="" className="glass"/></button>
        </div>
        <div className="dashboard">
          <h1 className="dashy">Dashboard</h1>
          <CreditCard />
          <PaymentLimit />
          <IncomeSpendings />
        </div>
        </div>
     </div>

     <div className="rightcolumn">
       <div className="width2">
         <div className="tophalfright">
          <SettingsButton />
          <ExpensesChart />
          </div>
          </div>  
          <div className="bottomright">
          <SendMoney />
          <ScheduledPayments />
          </div>
      </div>
      </div>

  );
}

export default Dashboard;
