import React, { useState, useEffect } from 'react'

const Useeffect2 = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width);

    const actualWidth = () => {
        console.log(window.innerWidth)
        setWidthCount(window.innerWidth)
    }
    useEffect(() => {
        console.log("add Event");
     window.addEventListener("resize", actualWidth);

     return() => {
        console.log("Remove Event");
        window.removeEventListener("resize", actualWidth)
     }
    }, []);

  return (
    <div>
     <p>The actual size of the window is: </p>
     <h1>{widthCount}</h1>
    </div>
  )
}

export default Useeffect2
