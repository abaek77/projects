import React from 'react';
import './ExpensesChart.css'

function ExpensesChart () {
    return (

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
    )
}

export default ExpensesChart