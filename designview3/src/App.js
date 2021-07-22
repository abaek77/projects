import React from 'react';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <div className="nav">
      <a className="title"href=""><h3 className="leftside" >FLO.</h3></a>
        <div className="navright">
            <nav>
              <a className="navlinks"href="">New Arrival</a>
              <a className="navlinks"href="">Best Seller</a>
              <a className="navlinks"href="">Reviews</a>
            </nav>
            <button className="signup">Sign Up</button>
        </div>
      </div>


      <div className="topmain">
        <h1>Gift and Flower for Your Beloved</h1>
        <p className="description">Priding ourselves on the quality, bold colours and sustainability of our products, will give you a boost of confidence.</p>
        <button className="startshopping">Start Shopping</button>
        <div className="buttons1">
        <button id="tulip1"className="package">
          <img src="https://flowersgifts-ua.com/wp-content/uploads/2018/03/11-tulips.png" alt="tulipbouquet" className="tulipbouquet"/>
          <div className="inside">
          <h3 className="flowerpackage">Tulip Package</h3>
          <h2 className="flowerprice">$70.99</h2>
          <p className="detail">Detail --)</p>
          </div>
        </button>
        <button id="rose1"className="package">
          <img src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Roses-PNG/Transparent_Red_Roses_Bouquet_PNG_Clipart_Picture.png?m=1434276736" alt="rosebouquet" className="rosebouquet" />
          <div className="inside">
          <h3 className="flowerpackage">Rose Package</h3>
          <h2 className="flowerprice">$70.99</h2>
          <p className="detail">Detail --)</p>
          </div>
        </button>
        </div>
      </div>


      <div className="midbar">
      <div className="midbar1">
        <h2 className="number">3000+</h2>
        <h2 className="number">5000+</h2>
        <h2 className="number">7000+</h2>
        <h2 className="number">25+</h2>
      </div>
      <div className="midbar2">
        <h4 className="packagessold">Packages Sold</h4>
        <h4 className="bouquetsold">Bouquet Sold</h4>
        <h4 className="happyclients">Happy Clients</h4>
        <h4 className="yearsof">Years of Experience</h4>
      </div>
      </div>
      
      
      <div className="bottommain">
        <div className="bottomnav">
          <p>Product</p>
          <div className="bottombutton">
          <button className="bottomleft">(</button>
          <button className="bottomright">)</button>
            </div>
        </div>
        <h3 className="title2">Our Best Sellers This Month</h3>
        <div className="bestsellers">
          <button id="one"className="seller">
            <div className="flag">
            <h3 className="new">New!</h3>
            <button className="heart"></button>
            </div>
            
            <div className="sellerbottom">
              <p className="specialnew">for special person</p>
              <h3 className="aster">Aster Bouquet</h3>
              <h2 className="astercost">$ 27.23</h2>
              <div className="cartspacing">
              <button className="cart"></button>
              </div>
            </div>
          </button>
          <button id="two"className="seller">
            <div className="flag">
            <h3>New!</h3>
            <button className="heart"></button>
            </div>
            
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
