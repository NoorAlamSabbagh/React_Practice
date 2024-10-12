import React, {useState} from 'react'
 import './Hook.css'
const DigitalClock = () => {
    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);

     const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time)
     }
     setInterval(UpdateTime, 1000)
  return (
    <div>
      <h1>{ctime}</h1>
      {/* <button onClick = {UpdateTime}></button> */}

    </div>
  )
}

export default DigitalClock
