import React from 'react'
import child from './child.jsx'

const parent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (newInput) => {
    setInputValue(newInput)
  }
  return (
    <div>
      <child value={inputValue} onInputChange= {handleInputChange}/>
    </div>
  )
}

export default parent