import './App.css';
import React, { useState } from 'react'

import Time from './Time'

const api = {
  key: "4fe97ec35e46949cbed63649678a69c0",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({});

  const currentDate = new Date()
  const hours = currentDate.getHours();

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${input}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setInput("");
        })
    }
  }


  return (
    <div data-testid="App" className={
      (typeof weather.main != "undefined")
        ? ((hours > 6 && hours < 18)
          ? "day"
          : "night")
        : "App"
    }>
      <div className="searchtab">
        <input data-testid="search_input" className="searchtab__input" type="text" placeholder="Search..." value={input} onChange={({ target: { value } }) => setInput(value)} onKeyPress={search} />
        <Time />
      </div>
      {(typeof weather.main != "undefined") && (
        <div className="bottom-app">
          <div className="bottom-app__shadow">
            <div className="bottom-app__location">{weather.name}, {weather.sys.country}</div>
          </div>
          <div className="bottom-app__weather-display">
            <div className="bottom-app__tempbox">
              <div className="bottom-app__temperature">{Math.round(weather.main.temp)}°C</div>
            </div>
            {(Math.round(weather.main.temp) > 16) ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/FireIcon.svg/1501px-FireIcon.svg.png" className="bottom-app__icon" />
              : <img className="bottom-app__icon" src="https://image.flaticon.com/icons/png/512/2996/2996063.png" />
            }
            <div className="bottom-app__weather">{weather.weather[0].main}</div>
            {(weather.weather[0].main === "Clear") ? <img className="bottom-app__icon" src="https://image.flaticon.com/icons/png/512/169/169367.png" /> : (weather.weather[0].main === "Rain") ? <img className="bottom-app__icon" src="https://icon-library.com/images/rain-icon-png/rain-icon-png-2.jpg" /> : <img className="bottom-app__icon" src="https://cdn.iconscout.com/icon/free/png-512/cloudy-cloud-snow-weather-38920.png" />}
            <div className="bottom-app__spacing"></div>
          </div>
        </div>
      )}
    </div>



  );
}

export default App;
