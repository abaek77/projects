import React, { useState, useEffect } from 'react'
import './App.css'


const options = {
    hour: 'numeric',
    minute: '2-digit'
};

function Time() {
    const [currentTime, setCurrentTime] = useState("")
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(Intl.DateTimeFormat('en-US', options).format(new Date()))
        }, 1000)
        return () => clearInterval(interval);
    })



    return (<div data-testid="time" className="date">Time: {currentTime}</div>)

}

export default Time;