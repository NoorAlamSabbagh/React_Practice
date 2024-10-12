import React from 'react'

const child = ({ value, onInputChange }) => {
  return (
    <div>
         <input type="text" value={value} onChange={(e) => onInputChange(e.target.value)} />
    </div>
  )
}

export default child