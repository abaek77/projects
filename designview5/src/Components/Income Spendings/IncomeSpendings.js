import React from 'react';
import './IncomeSpendings.css';
import LatestSpendings from '../LatestSpendings/LatestSpendings';

function IncomeSpendings () {






    return (
        <div className="incomespendings">
            <div className="incometabs">
            <div  className="incometab">
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
            <LatestSpendings />
          </div>
          
    )
}

export default IncomeSpendings;