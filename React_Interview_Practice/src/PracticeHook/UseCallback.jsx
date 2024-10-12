import React, { useCallback, useState } from 'react'

export const UseCallback = () => {
    const [count, setCount] = useState(0);

    // const memoizedCallback = useCallback(() => {
    //     //your callback logic here
    // <p>The useCallback hook takes twoArguments...</p>
    // <p>The function argument is the function that we want to memoize.
    //  The second argument is an array of dependencies thet the function depends on.</p>
    // }[dependency1, dependency2, ...]);

    const handleClick = useCallback(()=>{
        console.log('Button Clicked!');
        setCount((prevCount) => prevCount +1);
    },[])
    //the handleClick function does not depend on any variable, so we have passed empty
    // dependecies array[] as a second argument,
    //By memoizing handle click fnction with useCallback, we ensure that the function
    //refrence remains the same across renderes as long as its dpendencies do not change.
    //thus preventing unneccessary re-renders of the components.
    return (
        <>
            <h1>UseCallback</h1>
            <p>It is used when the function is send as a prop in a child component
                and we want to avoid unnecessaary rerenders of the child component
            </p>
            <h2>Difference</h2>
            <p>The useMemo hook is used to memoize the result of an expensive computation and cache it.
                Reducing the number of times the computation needs to be repeated

                On the other hand, the useCallback hook is used to memoize a function and cached it.
                Reducing the number of times the function needs to be recreated.
            </p>
            <h1>Count: {count}</h1>
            <button onClick={handleClick}>Increment</button>
        </>
    )
}


