import React from 'react';
import './App2.css';

function App2() {
return(
    <div className="App2">
        <div>
            <img src="https://hodinkee.imgix.net/uploads/images/1589226158230-5z7gfsb6m6-86aa17cd3138cb25898ee91bc2601d4a/JimmyOYang_Martini_Unit_25811.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12" alt="Jimmy Yang" className="Jimmy"/>
        </div>
        <div className="main">
            <h3>Jimmy O Yang Stand-up Special - Good Deal | Amazon Prime Stream Jimmy O Yang Stand-up Special - Good Deal</h3>
            <p className="category">Category</p>
            <div className="categories">
            <h4>Comedy</h4><h4>Stand-up</h4>
            </div>
            <p className="category">Description</p>
            <h6>Count how many times Jimmy O Yang makes you laugh during this video. We'll wait...</h6>
            <h6>Performed live at the Neptune Theater in Seattle, Jimmy O. Yang: Good Deal covers Jimmy's hilarious interactions with fans, his thoughts on Matt Damon, and whether ghosts will haunt one-bedroom apartments.</h6>
        </div>
        <div className="buttons">
            <button className="star"></button>
            <button className="thirdbutton">FIND RELATED</button>
            <button className="thirdbutton">GET TICKET [<div className="free">FREE</div>]</button>
        </div>
    </div>
)

}
export default App2;