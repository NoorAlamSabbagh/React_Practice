import React, { useState } from "react";

const UseStateObject = () => {

    const initialState = { myName: "Noor Alam", myAge: 26, degree: "BTech", rollNo: 16   }
    const [myObject, setMyObject] = useState(initialState);

    const changeObject = () => {
        setMyObject({...myObject, myName: "thapa Technical"})
    }

    const resetObject = () => {
        setMyObject(initialState)
    }

    return (
        <div>
         <h1 className="">Name: {myObject.myName} & Age: {myObject.myAge}  RollNo: {myObject.rollNo} And Degree: {myObject.degree} </h1>
        <button onClick={changeObject}>Update</button>
        <button onClick={resetObject}>Reset</button>
        </div>
    )
}

export default UseStateObject;
