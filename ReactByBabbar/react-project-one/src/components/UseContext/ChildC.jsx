import React, { useContext } from 'react';
// import {UserContext} from "../../App";
import {UserContext} from "./UseContext";

const ChildC = () => {
    const user = useContext(UserContext);
    const user2 = useContext(UserContext);
  return (
    <div>
        {user2.name}
    </div>
  )
}

export default ChildC