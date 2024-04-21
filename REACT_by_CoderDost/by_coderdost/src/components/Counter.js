//Lec5
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = (e) => {
    e.stopPropagation();
    setCount(count + 1);
  };
  
  const handleDecrement = (e) => {
    e.stopPropagation();
   if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2 style={{color:'green'}}>Current Count: {count}</h2>
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
    </div>
  );
};

export default Counter;
