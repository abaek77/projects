import React from 'react';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <div className="nav">
        <h3>FLO.</h3>
        <div className="navright">
            <nav>
              <a href="">New Arrival</a>
              <a href="">Best Seller</a>
              <a href="">Reviews</a>
            </nav>
            <button className="signup">Sign Up</button>
        </div>
      </div>
      <div className="topmain">
        <h1>Gift and Flower for Your Beloved</h1>
        <p>Priding ourselves on the quality, bold colours and sustainability of our products, will give you a boost of confidence.</p>
        <button className="startshopping">Start Shopping</button>
        <button className="package">
          <img src="" alt="" />
          <h3>Tulip Package</h3>
          <h2>$70.99</h2>
          <p>Detail --)</p>
        </button>
        <button className="package">
          <img src="" alt="" />
          <h3>Rose Package</h3>
          <h2>$70.99</h2>
          <p>Detail --)</p>
        </button>
        <button className="package"></button>
      </div>
      <div className="midbar">
      <div className="midbar1">
        <h2>3000+</h2>
        <h2>5000+</h2>
        <h2>7000+</h2>
        <h2>25+</h2>
      </div>
      <div className="midbar2">
        <h4>Packages Sold</h4>
        <h4>Bouquet Sold</h4>
        <h4>Happy Clients</h4>
        <h4>Years of Experience</h4>
      </div>
      </div>
      <div className="bottommain">
        <div className="bottomnav">
          <p>Product</p>
          <button>)</button>
          <h3>Our Best Sellers This Month</h3>
        </div>
        <div className="bestsellers">
          <button id="one"className="seller">
            <div className="flag">
            <h3>New!</h3>
            </div>
            <button className="heart"></button>
            <div>
              <p>for special person</p>
              <h3>Aster Bouquet</h3>
              <h2>$ 27.23</h2>
              <button className="cart"></button>
            </div>
          </button>
          <button id="two"className="seller">
            <div className="flag">
            <h3>New!</h3>
            </div>
            <button className="heart"></button>
            <div>
              <p>for special person</p>
              <h3>Rose Bouquet</h3>
              <h2>$ 27.00</h2>
              <button className="cart"></button>
            </div>
          </button>
          <button id="three"className="seller">
            <button className="heart"></button>
            <div>
              <p>for special person</p>
              <h3>Tulip Bouquet</h3>
              <h2>$ 20.99</h2>
              <button className="cart"></button>
            </div>
          </button>
          <button id="four"className="seller">
          <button className="heart"></button>
            <div>
              <p>for special person</p>
              <h3>Special Bouquet</h3>
              <h2>$ 50.99</h2>
              <button className="cart"></button>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
