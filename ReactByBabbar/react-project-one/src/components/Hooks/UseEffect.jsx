import React, { useEffect, useState } from 'react';


const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(1);

    //First => Side Effect function
    //Second => CleanUp Function
    //Third => Comma Seperated dependency list

    //Varition : 1
    //Runs on every render
    // useEffect(() => {
    //     first
    //     return () => {
    //         second
    //     }
    // }, [third]);

    //Varition: 1
    // useEffect(() => {
    //    alert("I will run on each render");
    // });

    //Varition: 2
    // useEffect(() => {
    //     alert("I will run on only 1st render");
    //  }, []);

    //Varition: 3
    // useEffect(() => {
    //     alert("I will run on only 1st render");
    //  }, [count]);

    //
    //Varition: 4
    //Multiple Dependencies
    // useEffect(() => {
    //     alert("I will run on only 1st render");
    //  }, [count, total]);

    //
    // //Varition: 5
    // //Add CleanUp Functions
    // useEffect(() => {
    //     alert("Count is Updated");
    //     return() => {
    //         alert("Count is unmounted from UI");
    //     }
    // }, [count]);

    //
    //Varition: 5
    //Add CleanUp Functions
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interValId = setInterVal(() => {
            console.log(("SetInterval Executed"));
            setSeconds(prevSeconds => prevSeconds +1);
        }, 1000)
        return() => {
           console.log("Time to Stop");
           clearInterval(interValId)
        }
    }, []);

    function handleClick() {
        setCount(count + 1);
    }
    function handleClickTotal() {
        setTotal(total + 1);
    }

    return (
        <>
            {/* <button onClick={handleClick}>
                Update Count
            </button>
            <br />
            Count Is : {count}
            <br />
            <button onClick={handleClickTotal}>
                Update Total
            </button>
            <br />
            Total Is : {total} */}
            {/* // */}
        <h1>Seconds: {seconds}</h1>

        </>
    )
}

export default UseEffect