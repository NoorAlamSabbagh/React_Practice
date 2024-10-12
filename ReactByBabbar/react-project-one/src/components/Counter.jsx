// import React, { useState } from 'react'
// import "./Counter.css"

// const Counter = ({children}) => {
//     // const [count, setCount] = useState(0);

//     return (
//         <div className='counter-container'>
//             {/* <p id='para'>You have clicked {count} times</p>
//             <button id="btn" onClick={()=>{setCount(count+1)}}>Click Me</button> */}
//             {children}
//         </div>

//     )
// }

// export default Counter


import React from 'react'
import "./Counter.css"

const Button = (props) => {

    return (
        <div>
            {props.children}
            <button onClick = {props.handleClick}>
                {props.text}
            </button>
        </div>

    )
}

export default Button