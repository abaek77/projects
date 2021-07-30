import React from 'react';
import './ScheduledPayments.css';
import CompanyList from './CompanyList';

function ScheduledPayments () {
    return (
        <div className="scheduledpayment">
          <div className="schedulednav">
            <h4 className="sendmoneytitle2">Scheduled payments</h4>
            <button className="plus"><img src="https://static.thenounproject.com/png/1513337-200.png" className="arrowbot" alt="" /></button>
          </div>
          <div className="paymentcompanies">
           <CompanyList />
            </div>
          </div>

    )
}
export default ScheduledPayments;