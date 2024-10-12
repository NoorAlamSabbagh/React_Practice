import React from 'react'

const Event = () => {

    function handleClick() {
        alert("I am Clicked")
    }
    function handleMouseOver() {
        alert("Para ke upar mouse")
    }

    function handleInputChange(e) {
        console.log("Value till now", e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert("Form Submit kar du kya")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={(e) => handleInputChange(e)}></input>
                <button type='submit'>Submit</button>
            </form>

            {/* <p onMouseOver={handleMouseOver} style={{border: "1px solid black"}}>I am Para</p>
        <button onClick={handleClick}>
            Click Me
        </button> */}
        </div>
    )
}

export default Event