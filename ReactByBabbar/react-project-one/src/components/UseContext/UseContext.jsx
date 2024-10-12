import React, { createContext, useState } from 'react'
import ChildC from './ChildC';
import ChildA from './ChildA';
import './useContext.css'

//Step1: create Context
const UserContext = createContext();
const ThemeContext = createContext();
//Step2: Wrap all the children inside a provider

const UseContext = () => {
  const [user, setUser] = useState({ name: "Alam" })
  const [theme, setTheme] = useState("ALamammms");
  return (
    <UserContext.Provider value={user}>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light'?'beige':'black'}}>
        <ChildA />
      </div>
    </ThemeContext.Provider>
    </UserContext.Provider>
    // <UserContext.Provider value={user}>
    //   <ChildC />
    // </UserContext.Provider>
  )
}

export default UseContext;
export { UserContext };
export { ThemeContext };