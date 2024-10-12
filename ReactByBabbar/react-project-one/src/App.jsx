import UserCard from "./components/UserCard"
import lovepic from "./assets/lovepic.jpeg"
import Maharana from "./assets/maharana.jpg"
import PrithviRaj from "./assets/prithviraj.jpg"
// import Counter from "./components/Counter"
import Button from "./components/Counter"
import { createContext, useState } from "react"
import Card1 from "./components/StateLifting"
import Event from "./components/Event"
import Parent from "./components/props/parent"
import UseEffect from "./components/Hooks/UseEffect"
import DataFetcher from "./components/Hooks/DataFetcher"
import UseContext from "./components/UseContext/UseContext"
import ChildA from "./components/UseContext/ChildA"
import HookForm from "./components/Hooks/HookForm"
import UseRefHook from "./components/Hooks/UseRefHook"
import UseMemoHook from "./components/Hooks/UseMemoHook"

//Step1: create Context
const UserContext = createContext();
//Step2: Wrap all the children inside a provider
//Step3: Pass Value
//Step4: Consumer k andar jaake consume kar lo

function App() {
  const [count, setCount] = useState(0);
  //Pass Value for context
  function handleClick() {
    setCount(count + 1);
  }

  {/* Lec5 propsLifting*/}
  //Create State
  //Manage State
  //Change State
  //sabhi child me state ko sync karwadunga
  const [user, setUser] = useState({name:"Love"});
  
  return (
    <div className="container">
      {/* <UserCard name="Love Rana" desc="desc1" image={lovepic} style={{"border-radius":"10px"}}/>
      <UserCard name="Maharana Pratap" desc="desc2" image={Maharana} style={{"border-radius":"10px"}}/>
      <UserCard name="PrithviRaj Chauhan" desc="desc3" image={PrithviRaj} style={{"border-radius":"10px"}}/> */}
      {/* <Button handleClick={handleClick} text="Click Me">
        <h1>{count}</h1>
      </Button> */}
      {/* Lec5 propsLifting*/}
      {/* <Card1 title="Card1" name={name} setName={setName}/>
      <Card1 title="Card2" name={name} setName={setName}/>
      <p>I am inside Parent Component and value of name is {name}</p> */}
      {/* Lecture 7 */}
      {/* <Event /> */}
      {/* <Parent/> */}
       {/* Lecture 8 Hooks: UseEffect */}
       {/* <UseEffect/> */}
       {/* <DataFetcher /> */}
       {/* <UseContext/> */}
      {/* <UserContext.Provider value={user}>
        <ChildA/>
      </UserContext.Provider> */}
      {/* <HookForm/> */}
      {/* <UseRefHook /> */}
      <UseMemoHook/>
    </div>
  )
}

export default App;
export {UserContext};








// const[isLoggedIn, setLoggedIn] = useState(false);
  
//   if(!isLoggedIn) {
//     return (
//       <LoginBtn />
//     )
//   }
  
//   return (
//     <div>
//       <h1> Welcome Everyone to Codehelp Web dev course</h1>
//       <div>
//         {isLoggedIn && <LogoutBtn />}
//       </div> 
//     </div>
//   )



  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn />}
  //   </div>
  // )



  // if(isLoggedIn) {
  //   return (
  //     <LogoutBtn/>
  //   )
  // }
  // else {
  //   return (
  //     <LoginBtn />
  //   )
  // }