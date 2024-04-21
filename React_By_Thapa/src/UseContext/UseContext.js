import React, { createContext } from "react";
import ContextA from "./ContextA";

const FirstName = createContext();
const LastName = createContext();

const UseContext = () => {
  return (
    <div>
      <FirstName.Provider value={"Noor"}>
        <LastName.Provider value={"Alam"}>
          <ContextA />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
};

export default UseContext;
export { FirstName, LastName };
