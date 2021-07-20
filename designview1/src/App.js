
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <img src="https://i.gyazo.com/8de773e9310bed783a62e86fe3dde0cc.png" alt="logo" className="logo"/>
        <nav className="links">
          <a href="#" className="navlink">Features</a>
          <a href="#" className="navlink">Company</a>
          <a href="#" className="navlink">Pricing</a>
        </nav>
      </div>
      <br />
      
      <div className="main">
      <img src="https://i.gyazo.com/8de773e9310bed783a62e86fe3dde0cc.png" alt="logo" className="logo"/>
        <h1>Every purchase will be made with pleasure</h1>
        <p className="description">We work with global brands and have created an application for you to do your shopping.</p>
        <form className="signup">
        <input type="text" placeholder="Enter your email"/>
        <button>Get started</button>
      </form>
      </div>
      
      <div className="carosel">
        <img src="https://lh3.googleusercontent.com/proxy/JiPq5hlD1xRkWTYfAc1jIvimjSr2whESR1iDEMzWS5ej_tSPDLJu8nICirYZpSCj1hCyHfp5cdUZ4X3LXtVaExaw-JSKWr9vndFtdG9fNpaVmM6KGBInndID7zNBzYD2aTMHMybGhYG8ZrCGk8edIiM40w" alt="iPhone" className="iPhone" />
        <button className="overlay">Get started</button>
      </div>
    </div>
  );
}

export default App;
