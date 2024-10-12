import  { useState, useCallback } from 'react';

const UseCallback = () => {
  const [count, setCount] = useState(0);

  // Define a callback function using useCallback
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className='text-white bg-gray-500'>
      <p>Count: {count}</p>
      <button  onClick={handleClick}>Increment Count</button>
    </div>
  );
};

export default UseCallback;
