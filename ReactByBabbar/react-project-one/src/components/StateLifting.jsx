import React from 'react'

const StateLifting = (props) => {
  return (
    <div>
        <input type='text' onChange={(e) => props.setName(e.target.value)}/>
        <p>Name State varible ki value inside {props.title}: {props.name}</p>
    </div>
  )
}

export default StateLifting;