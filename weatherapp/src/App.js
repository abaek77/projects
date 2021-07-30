import './App.css';
import React, { useState } from 'react'
import { useEffect } from 'react';

const api = {
  key: "4fe97ec35e46949cbed63649678a69c0",
  base: "api.openweathermap.org/data/2.5/"
}

function App() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({});

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
    var today = new Date(),

      time = today.getHours() + ':' + today.getMinutes();


    setCurrentTime(time);
  }, []);


  return (
    <div className="colors">
      <div className="searchtab">
        <input type="text" placeholder="Search" value={input} onChange={({ target: { value } }) => setInput(value)} onKeyPress={search} />
      </div>
      {(typeof weather.main != "undefined") ? (
        <div>
          <div className="locationtab">
            <div className="Location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{currentTime}</div>
          </div>
          <div className="weather_display">
            <div className="temperature">{Math.round(weather.main.temp)}°C</div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
      ) : ("")}
    </div>



  );
}

export default App;
