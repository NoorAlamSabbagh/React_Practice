import { useEffect, useState } from "react";
import "./App.css";

function App() {
  console.log("App rendered", Math.random());
  const [value, setValue] = useState({
    value: 0,
  });


  // useEffect(()=>{},[value.value]);
  
  const clickMe = () => {
    // setValue(value+1)
    // setValue(1)
    // setValue(3)
    // console.log("Logged");
    setValue({
      value: 0,
    })
  };

  return (
    <>
      <h1>Main Value: {value.value}</h1>
      <button onClick={clickMe}> Click to Multiply By 5</button>
    </>
  );
}

export default App;


//
// import { useState } from "react";
// import "./App.css";

// function App() {
// const [value, setValue] = useState(1);
// // const [MultipliedValue, setMultipliedValue] = useState(1)
// let MultipliedValue = value*5;

// const multipliedByFive = () => {
//   //  setMultipliedValue(value*5)
//    setValue(value + 1)
// }

// //ye bugg deta ha bht so log ye method use karte ha tum mat karo
// // useEffect(()=>{
// //   MultipliedValue()
// // }, [value]);

//   return (
//   <>
// <h1>Main Value: {value} </h1>
// <button
// onClick = {multipliedByFive}
// >Click to multiply by 5</button>
// <h2>Multiplied Value: {MultipliedValue} </h2>
//   </>
//   );
// }

// export default App;
