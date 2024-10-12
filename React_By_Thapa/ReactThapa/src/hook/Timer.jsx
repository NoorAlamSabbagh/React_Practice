import React, { useState } from 'react'
import './Hook.css';

const Timer = () => {
    let newTime = new Date().toLocaleTimeString();

    //Array Destructuring
    const [ctime, setCtime] = useState(newTime);

    const updateTime = () => {
        let newCtime = new Date().toLocaleTimeString();
        setCtime(newCtime)
    }
  return (
    <div>
    <h1>{ctime}</h1>
      <button onClick ={updateTime} >Get Time</button>
    </div>
  )
}

export default Timer
