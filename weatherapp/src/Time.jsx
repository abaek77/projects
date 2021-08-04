import React, { useState, useEffect } from 'react'
import './App.css'


function Time({ minutes, hours }) {
    const [currentTime, setCurrentTime] = useState("")
    useEffect(() => {
        const interval = setInterval(() => {
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
            return (currentTime);
        }, 1000)
        return () => clearInterval(interval);
    })



    return (<div data-testid="time" className="date">Time: {currentTime}</div>)

}

export default Time;