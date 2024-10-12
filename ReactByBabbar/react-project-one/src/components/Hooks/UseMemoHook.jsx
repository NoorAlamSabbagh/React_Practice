import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    //Unnnecesary kaam ya event ko prevwent karnwe ka tariqa use memoHook ka hota ha
    const [count, setCount] = useState(0);
    const [input, setInput] = useState(0);

    function expensiveTask(num){
        console.log("Inside Expensive Task");
        for(let i=0; i<=100000000; i++)
            return num*2;
    }

    // let doubleValue = expensiveTask(input);
    let doubleValue = useMemo(() => expensiveTask(input), [input]);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <div>
                Count: {count}
            </div>
            <input
            type='number'
            placeholder='Enter Number'
            value={input}
            onChange={(e) =>setInput(e.target.value)}
            
            />
            <div>
            DoubleValue: {doubleValue}
            </div>
        </div>
    )
}

export default UseMemoHook;