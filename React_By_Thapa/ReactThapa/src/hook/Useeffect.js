import React, {useEffect, useState} from 'react'

const Useeffect = () => {
    const [countn, setCountn] = useState(0);

    useEffect(() => {
    if(countn>=1){
            // e.preventDefault();
            // console.log("Hello UseEffects ")
            document.title = `Chats(${countn})` 
        }else{
            document.title = `Chats`
        }
    }, [countn])

    useEffect(() => {
        console.log("Hello I am from Lucknow")
    })
    console.log("Hello UseEffects from outside function");


  return (
    <div>
    <h1>{countn}</h1>
     <button className='btn' onClick={() => setCountn(countn +1)}>Click</button>
    </div>
  )
}

export default Useeffect
