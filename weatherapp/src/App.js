import './App.css';
import React, { useState } from 'react'
import { useEffect } from 'react';

const api = {
  key: "4fe97ec35e46949cbed63649678a69c0",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({});

  var today = new Date(),

    time = today.getHours() + ':' + today.getMinutes();

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${input}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setInput("");
          console.log(result)
        })
    }
  }
  const [currentTime, setCurrentTime] = useState("")
  useEffect(() => {



    if (today.getHours() >= 12) {
      if (today.getMinutes() <= 10) {
        setCurrentTime(today.getHours() - 12 + ":" + 0 + today.getMinutes())
      }
      else {
        setCurrentTime(today.getHours() - 12 + ":" + today.getMinutes())
      }
    }
    else {
      if (today.getMinutes <= 10) {
        setCurrentTime(today.getHours() + ":" + 0 + today.getMinutes())
      }
      setCurrentTime(today.getHours() + ':' + today.getMinutes())
    }
  }, []);


  return (
    <div className={
      (typeof weather.main != "undefined")
        ? ((today.getHours() > 6 && today.getHours() < 18)
          ? "day"
          : "night")
        : "App"
    }>
      <div className="searchtab">
        <input type="text" placeholder="Search" value={input} onChange={({ target: { value } }) => setInput(value)} onKeyPress={search} />
        <div className="date">Time: {currentTime}</div>
      </div>
      {(typeof weather.main != "undefined") ? (
        <div className="bottom_app">
          <div className="locationtab">
            <div className="Location">{weather.name}, {weather.sys.country}</div>
          </div>
          <div className="weather_display">
            <div className="temp_box">
              <div className="temperature">{Math.round(weather.main.temp)}°C</div>
            </div>
            {(Math.round(weather.main.temp) > 16) ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/FireIcon.svg/1501px-FireIcon.svg.png" className="icon" />
              : <img className="icon" src="https://image.flaticon.com/icons/png/512/2996/2996063.png" />
            }
            <div className="weather">{weather.weather[0].main}</div>
            {(weather.weather[0].main === "Clear") ? <img className="icon" src="https://image.flaticon.com/icons/png/512/169/169367.png" /> : (weather.weather[0].main === "Rain") ? <img className="icon" src="https://icon-library.com/images/rain-icon-png/rain-icon-png-2.jpg" /> : <img className="icon" src="https://cdn.iconscout.com/icon/free/png-512/cloudy-cloud-snow-weather-38920.png" />}
            <div className="spacing"></div>
          </div>
        </div>
      ) : ("")}
    </div>



  );
}

export default App;
