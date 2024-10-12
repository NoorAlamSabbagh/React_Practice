import React, { useContext } from 'react'
import ChildB from './ChildB'
import { UserContext, ThemeContext } from './UseContext'

const ChildA = () => {
    const user = useContext(UserContext)
    const {theme, setTheme} = useContext(ThemeContext);
 function handleClick(){
    if(theme === "light")
        setTheme('dark')
    else
    setTheme('light')
 }
    return (
        <div>
        <button onClick={handleClick}>
            ChangeTheme
        </button>
        Data: {user.name}
        </div>
    )
}

export default ChildA