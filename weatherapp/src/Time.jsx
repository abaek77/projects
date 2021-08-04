import React, { useState, useEffect } from 'react'
import './App.css'


function Time({ minutes, hours }) {
    const [currentTime, setCurrentTime] = useState("")
    useEffect(() => {

        if (hours === 0) {
            if (minutes < 10) {
                setCurrentTime(hours + 12 + ":" + minutes.padStart(2, 0))
            }
            else {
                setCurrentTime(hours + 12 + ":" + minutes)
            }
        }
        else if (hours > 13) {
            if (minutes < 10) {
                setCurrentTime(hours - 12 + ":" + minutes.padStart(2, 0))
            }
            else {
                setCurrentTime(hours - 12 + ":" + minutes)
            }
        }
        else {
            if (minutes < 10) {
                setCurrentTime(hours + ":" + minutes.padStart(2, 0))
            }
            setCurrentTime(hours + ':' + minutes)
        }
    });

    return (
        <div data-testid="time" className="date">Time: {currentTime}</div>
    )
}

export default Time;