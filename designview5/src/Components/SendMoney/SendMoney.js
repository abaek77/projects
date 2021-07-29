import React from 'react';
import './SendMoney.css';

function SendMoney () {
    return (
        
        <div className="sendmoney">
         <div className="sendmoneynav">
           <h4 className="sendmoneytitle">Send money to</h4>
           <button className="plus"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/500px-Plus_symbol.svg.png" alt="" className="plussign"/></button>
         </div>
          <div className="people">
          <div className="person">
            <img src="https://external-preview.redd.it/MMflGblLudSD_tqCefYHx1ei2_BWiT3ZJkBKMVHtXHc.jpg?auto=webp&s=6bedfc7ae24c712ac475eb8b533b46109860b4f7" alt="" className="pfp2"/>
            <p className="firstname">Ted</p>
            <p className="lastname">Lasso</p>
          </div>
          <div className="person">
            <img src="https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9jcmVhdG9yLWltYWdlcy5wb2RjaGFzZXIuY29tL2U5MjlmMGE2YjcyMTJhMjA0YWViYWIyOWY5ZDEzZGU1LnBuZw%3D%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D" alt="" className="pfp2"/>
            <p className="firstname">Joe</p>
            <p className="lastname">Biden</p>
          </div>
          <div className="person">
            <img src="https://pbs.twimg.com/profile_images/610150821397987331/qZzryLFn_400x400.jpg" alt="" className="pfp2"/>
            <p className="firstname">Shiba</p>
            <p className="lastname">Inu</p>
          </div>
          <div className="person">
            <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg" alt="" className="pfp2"/>
            <p className="firstname">Elon</p>
            <p className="lastname">Musk</p>
          </div>
          </div>
          </div>

    )
}

export default SendMoney;