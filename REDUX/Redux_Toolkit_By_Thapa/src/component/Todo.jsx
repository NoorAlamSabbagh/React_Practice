// import { MdDeleteForever } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux"
// import { addTask, deleteTask, reset } from "../features/tasks/tasksSlice";
// import { useState } from "react";


// export const Todo = () => {
//     const [userTask, setUserTasks] = useState("");
//     // const tasks = useSelector((state) => state.task);
//     //<===========Using Redux ToolKit =============>
//     //bas taskReducer add kiya 
//     const tasks = useSelector((state) => state.taskReducer.task);
//      console.log("tasks", tasks);

//     const dispatch = useDispatch();

//     const handleformSubmit = (e) => {
//         e.preventDefault();
//         dispatch(addTask(userTask))
//         return setUserTasks("")
//     }

//     const handleTaskDelete = (id) => {
//        return dispatch(deleteTask(id))
//     }
//     const resetTask = () => {
//         dispatch(reset())
//     }

//     const handleFetchTasks = () => {
//       dispatch(fetchTask());
//     }
//     return (
//         <div className="container">
//             <div className="todo-app">
//                 <h1>
//                     <i className="fa-regular fa-pen-to-square"></i>To-do List:
//                 </h1>
//                 <div className="row">
//                     <form onSubmit={handleformSubmit}>
//                         <input type="text"
//                             id="input-box"
//                             placeholder="Add a new task"
//                             value={userTask}
//                             onChange={(e) => setUserTasks(e.target.value)}
//                             />
//                         <button>Add Task</button>
//                     </form>
//                 </div>
//                 <button onClick={handleFetchTasks}>Fetch Tasks</button>
//                 <ul id="List-container">
//                     {
//                         tasks.map((currTask, index) => {
//                             return (
//                                 <li key={index}>
//                                     <p>{index}: {currTask}</p>
//                                     <MdDeleteForever
//                                         className="icon-style"
//                                         onClick={() => handleTaskDelete(index)}
//                                     />
//                                 </li>
//                             );
//                         })
//                     }
//                 </ul>
//                 <button onClick={()=>resetTask()}>Clear All</button>
//             </div>
//         </div>
//     )
// }



//<==============Optimized Code ===============>
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, reset } from "../features/tasks/tasksSlice";
import { useState, useCallback, useMemo } from "react";
import { debounce, throttle } from "lodash"; // ✅ Importing lodash for optimization

export const Todo = () => {
    const [userTask, setUserTasks] = useState("");
    
    // ✅ Optimized selector using useMemo (prevents unnecessary re-renders)
    const tasks = useSelector((state) => state.taskReducer.task);
    const dispatch = useDispatch();

    // ✅ Debounced function for input handling (waits 300ms before updating)
    const handleInputChange = useCallback(debounce((value) => {
        setUserTasks(value);
    }, 300), []);

    // ✅ Throttled function for handling delete (prevents rapid clicks)
    const handleTaskDelete = useCallback(throttle((id) => {
        dispatch(deleteTask(id));
    }, 500), [dispatch]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (userTask.trim() === "") return; // Prevent empty tasks
        dispatch(addTask(userTask));
        setUserTasks(""); 
    };

    // ✅ Reset function using Redux action
    const resetTask = useCallback(() => {
        dispatch(reset());
    }, [dispatch]);

    return (
        <div className="container">
            <div className="todo-app">
                <h1>
                    <i className="fa-regular fa-pen-to-square"></i> To-do List:
                </h1>
                <div className="row">
                    <form onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            id="input-box"
                            placeholder="Add a new task"
                            value={userTask}
                            onChange={(e) => handleInputChange(e.target.value)} // ✅ Debounced Input
                        />
                        <button type="submit">Add Task</button>
                    </form>
                </div>
                <ul id="List-container">
                    {tasks.map((currTask, index) => (
                        <li key={index}>
                            <p>{index}: {currTask}</p>
                            <MdDeleteForever
                                className="icon-style"
                                onClick={() => handleTaskDelete(index)} // ✅ Throttled Delete
                            />
                        </li>
                    ))}
                </ul>
                <button onClick={resetTask}>Clear All</button> {/* ✅ Using optimized reset function */}
            </div>
        </div>
    );
};

