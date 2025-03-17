import { useSelector } from "react-redux";
import { Todo } from "./component/Todo";

const App = () => {
  console.log("UseSelector", useSelector((state) =>state?.taskReducer.task))
    return (
        <>
        <Todo/>
        </>
    )
};

export default App;