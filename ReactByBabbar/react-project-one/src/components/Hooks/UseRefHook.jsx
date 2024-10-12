// import React, { useEffect, useRef, useState } from 'react'

// const UseRefHook = () => {
//   const [count, setCount] = useState(0);
//   // let val = 1;
//   let val = useRef(0);

//   //Aisa variable jo apne value ko presist rakhta ho accross rerender
//   //State varaible change hone me rerendewr hota ha jabki useref me nhi
//   //UseRef ko Dom element se directly access kar sakte ha
//   function handleIncrement() {
//     // val = val + 1;
//     val.current = val.current + 1;
//     // console.log("Value of val: ", val);
//     console.log("Value of val: ", val.current);
//     setCount(count + 1);
//   }

//   useEffect(() => {
//     console.log("Main firse render ho gaya ho")
//   })

//   //Second UseCase
//   //UseRef ko Dom element se directly access kar sakte ha
//   let btnRef = useRef();
//   function changeColor(){
//     btnRef.current.style.backgroundColor = "red"
//   }


//   return (
//     <div>
//       <button 
//       ref = {btnRef}
//       onClick={handleIncrement}>
//         Increment
//       </button>
//       <br />
//       <br />
//       <button onClick={changeColor}>
//         Change color of 1st Button
//       </button>
//       <br />
//       <div>
//         Count: {count}
//       </div>
//     </div>
//   )
// }

// export default UseRefHook




//UseRef
import React, { useRef, useState } from 'react'

const UseRefHook = () => {
  const [time, setTime] = useState(0);
  let timeRef = useRef(null);

  function startTimer() {
    timeRef.current = setInterval(() => {
      setTime(time =>time + 1);
    }, 1000)
  }
  function stopTimer() {
    clearInterval(timeRef.current);
    timeRef.current = null
  }
  function resetTimer() {
    stopTimer();
    setTime(0);
  }
  return (
    <div>
      <h1>StopWatch: {time} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <br /><br />
      <button onClick={stopTimer}>Stop</button>
      <br /><br />
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default UseRefHook