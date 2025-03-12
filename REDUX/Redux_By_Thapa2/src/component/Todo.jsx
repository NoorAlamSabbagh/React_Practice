import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux"
import { addTask, deleteTask, fetchTask } from "../store";
import { useState } from "react";


export const Todo = () => {
    const [task, setTasks] = useState();
    const tasks = useSelector((state) => state.task);
    //  console.log("React_Redux", state.task)

    const dispatch = useDispatch();

    const handleformSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(task))
        return setTasks("")
    }

    const handleTaskDelete = (id) => {
       return dispatch(deleteTask(id))
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
                            value={task}
                            onChange={(e) => setTasks(e.target.value)}
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
            </div>
        </div>
    )
}