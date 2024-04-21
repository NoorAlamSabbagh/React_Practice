import React, { useCallback } from 'react'
import { useState } from 'react'
import ChildAUseCall from './ChildAUseCall';

const UseCallbackHook = () => {
    const [add, setAdd] = useState(0);
    const [count, setCount] = useState(0);
    const Learning = useCallback(() => {
        //Some Operation
    }, [count])
  return (
    <div>
      <h1>Learning UseCallBack</h1>
      <ChildAUseCall Learning = {Learning} count={count}/>
      <h1>{add}</h1>
      <button onClick={()=>setAdd(add+1)}>Addition</button>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+5)}>Addition</button>
    </div>
  )
}

export default UseCallbackHook
