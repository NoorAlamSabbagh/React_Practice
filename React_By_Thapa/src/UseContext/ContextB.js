import React, { useContext } from 'react'
// import ContextC from './ContextC'
import { FirstName, LastName } from './UseContext'

const ContextB = () => {
const fname = useContext(FirstName)
const lname = useContext(LastName)

  return (

    <>
    <h1>My name is {fname} {lname}</h1>
      {/* <ContextC /> */}
    </>
  )
}

export default ContextB
