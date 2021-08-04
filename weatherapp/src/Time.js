import React, { useState, useEffect } from 'react'
import './App.css'


function Time() {
    const [currentTime, setCurrentTime] = useState("")
    useEffect(() => {

        if (today.getHours() === 0) {
            if (today.getMinutes() <= 10) {
                setCurrentTime(today.getHours() + 12 + ":" + 0 + today.getMinutes())
            }
            else {
                setCurrentTime(today.getHours() + 12 + ":" + today.getMinutes())
            }
        }

        else if (today.getHours() > 13) {
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
    });
    var today = new Date(),

        time = today.getHours() + ':' + today.getMinutes();
    return (
        <div data-testid="time" className="date">Time: {currentTime}</div>
    )
}

export default Time;