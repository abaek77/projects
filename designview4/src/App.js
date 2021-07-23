import React from 'react';
import './App.css';

function App() {
  return (
    <div className="border">
    <div className="App">
      <div className="bigbox">
        <div className="navbarbig">
          <div className="leftnavbarbig">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="" className="hamburger"/>
            <h3 className="fintimes">FINTIMES</h3>
          </div>
          <div className="rightnavbarbig">
            <img src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png" alt="" className="magnify"/>
          </div>
        </div>
        <div className="main">
          <h1 className="toptitle">Everything</h1>
          <h1 className="midtitle">about investing plus way more.</h1>
          <div className="mainbot">
          <p className="description">Introducing the first all-in-one tool to help you put your financial assets in the best possible opportunities.</p>
          <button className="signup"></button>
          </div>
        </div>
      </div>

      <div className="smallboxes">
    <div className="topbox">
      <div className="navbartop">
        <div className="leftnavbar">
          <h2 className="team">Team</h2>
        </div>
        <div className="rightnavbar">
          <img src="data:image/jpeg;base64,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" alt="" className="person1"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Clinton_Circle.png" alt="" className="person2"/>
        </div>
      </div>
      <div className="maintop">
        <p className="description2">
          CHECK OUR EXPERTS
        </p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Black_Right_Arrow.png" alt="" className="arrow"/>
      </div>
    </div>

    <div className="middlebox">
      <div className="navbarmid">
        <div className="leftnavbar">
          <h2 className="strategy">Strategy</h2>
        </div>
        <div className="rightnavbar">
          <button className="play"></button>
        </div>
      </div>
      <div className="mainmid">
        <p className="description2">
          INVESTMENT PROCESS
        </p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Black_Right_Arrow.png" alt="" className="arrow"/>
      </div>
    </div>

    <div className="bottombox">
      <div className="navbarbot">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Wired_logo.svg/1280px-Wired_logo.svg.png" alt="" className="wired"/>
      </div>
      <div className="mainbot">
        <p className="description2">OUR PARTNERS</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Black_Right_Arrow.png" alt="" className="arrow"/>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
