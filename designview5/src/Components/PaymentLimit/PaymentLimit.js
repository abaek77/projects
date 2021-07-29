import React from 'react';
import './PaymentLimit.css'

function PaymentLimit () {
    return (
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
    )
}

export default PaymentLimit