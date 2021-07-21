
import React from 'react';
import './App3.css'

function App3 () {
return(

    <div className="App3">
        <div className="header">
            <h1>Buy Ticket</h1>
        </div>
        <div className="main">
            <p className="description">You must purchase a ticket to watch the stream in your room. You can purchase the ticket now while creating a room or later inside the room</p>
            <h4 className="description">Ticket on:</h4>
            <h2>Jimmy O Yang Stand-up Special - Good Deal | Amazon Prime Stream</h2>
            <h4 className="description">Cost:</h4>
            <h2>12.50 $</h2>
        </div>
        <form>
            <label htmlFor="holder">Card holder</label>
            <input id="holder"type="text" />
            <label htmlFor="number">Card number</label>
            <input id="number"type="text" />

            <label htmlFor="expiry">Expiry</label>
            <input id="expiry"type="text" />
            <div className="lastform">
            <label className="cvc2" htmlFor="cvc">CVC</label>
            <input id="cvc"type="text" />
            </div>
            <div className="buttons">
            <button className="later">BUY LATER</button>
            <button className="now">BUY NOW</button>
            </div>
        </form>
    
    </div>

)
}

export default App3;