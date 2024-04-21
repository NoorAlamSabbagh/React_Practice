import React, { useState } from 'react';

const Alam = () => {
    const [myName, setMyName] = useState("Noor Alam Technical");
    const changeName = () => {
        let value = myName;
        (value === "Noor Alam Technical") ? setMyName("Hello Alam, How are you?") : setMyName("Noor Alam Technical")
    }

    return (
        <div>
            <h1>{myName}</h1>
            <button className='btn' onClick={changeName}>Click me please</button>
        </div>
    )
}

export default Alam;
