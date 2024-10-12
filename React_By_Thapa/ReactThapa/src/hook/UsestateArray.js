import React, { useState } from "react";
import "./Hook.css"
const UsestateArray = () => {
    let bioData = [
        {
            id:0,
            myName: "Alam",
            age: 26
        },
        {
            id:1,
            myName: "Noor",
            age: 27
        },
        {
            id:2,
            myName: "Nehal",
            age: 25
        },
        {
            id:3,
            myName: "Hello",
            age: 26
        }
    ]
    const [myArray, setMyArray] = useState(bioData)
    // const clearArray = () => {
    //     let value = myArray;
    //     if(value === myArray)? setMyArray(value): setMyArray([])
    // //  setMyArray([])
    // }
    const clearArray = () => {
     setMyArray([])
    }
    const resetArray = () => {
     setMyArray(bioData)
    }

    const removeElem = (id) => {
    // alert(id)
    // const myNewArray = myArray.filter(currentElement, index, array)
    const myNewArray = myArray.filter((currElem) => {
        return currElem.id !== id;
    })
    setMyArray(myNewArray)
    }

    return(
     <div>
        {
                myArray.map((currElem) => {
                    return <h1 key={currElem.id}>Name: {currElem.myName} & Alam : {currElem.age}
                        <button className="button" onClick={()=>removeElem(currElem.id)}>Remove</button>
                    </h1>
                })
        }
        <button onClick={clearArray}>Clear</button>
        <button onClick={resetArray}>Reset</button>
     </div>
    )
}

export default UsestateArray