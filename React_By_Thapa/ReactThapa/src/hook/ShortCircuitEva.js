import React, { useState } from "react";

//Short circuit evaluation means if you have rernder multilple data ko rerendering karana ho 
const ShortCircuit = () => {
    const [demo, setDemo] = useState("");
    return (
        <div>
         <h1>{demo || "Technical"}</h1>
         <h1>{demo &&  "Technical"}</h1>
        </div>
    )
}

export default ShortCircuit;