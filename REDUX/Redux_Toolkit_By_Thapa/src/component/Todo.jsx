import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux"
import { addTask, deleteTask, reset } from "../features/tasks/tasksSlice";
import { useState } from "react";


export const Todo = () => {
    const [userTask, setUserTasks] = useState("");
    // const tasks = useSelector((state) => state.task);
    //<===========Using Redux ToolKit =============>
    //bas taskReducer add kiya 
    const tasks = useSelector((state) => state.taskReducer.task);
     console.log("tasks", tasks);

    const dispatch = useDispatch();

    const handleformSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(userTask))
        return setUserTasks("")
    }

    const handleTaskDelete = (id) => {
       return dispatch(deleteTask(id))
    }
    const resetTask = () => {
        dispatch(reset())
    }

    const handleFetchTasks = () => {
      dispatch(fetchTask());
    }
    return (
        <div className="container">
            <div className="todo-app">
                <h1>
                    <i className="fa-regular fa-pen-to-square"></i>To-do List:
                </h1>
                <div className="row">
                    <form onSubmit={handleformSubmit}>
                        <input type="text"
                            id="input-box"
                            placeholder="Add a new task"
                            value={userTask}
                            onChange={(e) => setUserTasks(e.target.value)}
                            />
                        <button>Add Task</button>
                    </form>
                </div>
                <button onClick={handleFetchTasks}>Fetch Tasks</button>
                <ul id="List-container">
                    {
                        tasks.map((currTask, index) => {
                            return (
                                <li key={index}>
                                    <p>{index}: {currTask}</p>
                                    <MdDeleteForever
                                        className="icon-style"
                                        onClick={() => handleTaskDelete(index)}
                                    />
                                </li>
                            );
                        })
                    }
                </ul>
                <button onClick={()=>resetTask()}>Clear All</button>
            </div>
        </div>
    )
}