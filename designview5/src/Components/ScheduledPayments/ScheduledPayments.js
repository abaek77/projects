import React from 'react'
import './ScheduledPayments.css'

function ScheduledPayments () {
    return (
        <div className="scheduledpayment">
          <div className="schedulednav">
            <h4 className="sendmoneytitle2">Scheduled payments</h4>
            <button className="plus"><img src="https://static.thenounproject.com/png/1513337-200.png" className="arrowbot" alt="" /></button>
          </div>
          <div className="paymentcompanies">
            <div id="youtube"className="company1">
              <h5 className="rate">$3.99/m</h5>
              <div className="bottomcompany">
                <img src="https://1000logos.net/wp-content/uploads/2017/05/youtube-symbol.jpg" alt="" className="companylogo"/>
                <p className="company">Youtube</p>
              </div>
            </div>
            <div id="netflix"className="company1">
              <h5 className="rate">$5.99/m</h5>
              <div className="bottomcompany">
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png" alt="" className="companylogo"/>
                <p className="company">Netflix</p>
              </div>
            </div>
            <div id="Vimeo" className="company1">
              <h5 className="rate">$2.99/m</h5>
              <div className="bottomcompany">
                <img src="https://www.4kshooters.net/wp-content/uploads/2017/02/Vimeo.png" alt="" className="companylogo"/>
                <p className="company">Vimeo Pro</p>
              </div>
            </div>
            <div id="Spotify"className="company1">
              <h5 className="rate">$15.00/m</h5>
              <div className="bottomcompany">
                <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png" alt="" className="companylogo"/>
                <p className="company">Spotify</p>
            </div>
              </div>
            </div>
          </div>

    )
}
export default ScheduledPayments;