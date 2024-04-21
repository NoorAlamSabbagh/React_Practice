import React, { useEffect, useState } from "react";

const UseEffect2 = () => {
  const [num, setNum] = useState(0);
  useEffect(()=>{
    // alert("Hello")
    document.title=`You Clicked me ${num}`
  })
  return (
    <>
      <button onClick={()=>{
        setNum(num+1)
      }}>Click ME {num}</button>
    </>
  );
};

export default UseEffect2;
