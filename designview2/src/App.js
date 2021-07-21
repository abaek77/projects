
import './App.css';

function App() {
  return (

    <div className="App">
      <div className="nav">
      
          <h2><a href="" className="bento">bento</a></h2>
          <select>
          <option>Discover</option>
        </select>
          <a href="" className="navlinks">Premade template</a>
          <a href="" className="navlinks">Generator</a>
      <div className="navright">
          <button className="createbutton">Create +</button>
          <button className="signinbutton">Sign In</button>
      </div>
      </div>
        
      <div className="main">
      <h1>illustration builder</h1>
      <p className="description">Easily create and publish 3D web experiences. Build and iterate fast with production-ready results.</p>
      <form>
        <input placeholder="Your email" />
        <button className="getstarted">Get started</button>
      </form>
      </div>
      <div className="bottom">
        <p className="scrolldown">Scroll down to learn more</p>
      </div>

    </div>

  );
}

export default App;
