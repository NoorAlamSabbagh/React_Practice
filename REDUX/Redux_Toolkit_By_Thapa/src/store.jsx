//<===========Redux===============>
// import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from '@redux-devtools/extension';
// import { thunk } from "redux-thunk";

// const ADD_TASK = "task/add";//best practice to understand what functions is working for
// const DELETE_TASK = "task/delete";
// const FETCH_TASK = "task/fetch";

// const initialState = {
//     task: [],
//     isLoading: false
// };

// //Step 1: Create a simple reducer function
// const taskReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_TASK:
//             return {
//                 ...state,//make copy of old state because it does not directly update the old state
//                 task: [...state.task, action.payload],
//             };
//         case DELETE_TASK:
//             const updatedTask = state.task.filter((curTask, index) => {
//                 return index !== action.payload;
//             })
//             return {
//                 ...state,
//                 task: updatedTask,
//             };
//         case FETCH_TASK:
//             return {
//                 ...state,
//                 task: [...state.task, ...action.payload],
//             };
//         default:
//             return state;
//     }
// }

// //Step 2: Create the Redux store using the reducer
// export const store = createStore(taskReducer, composeWithDevTools(applyMiddleware(thunk)));
// console.log("Store", store);

// //Step 3: Log the initial state
// //The getState method is a synchronous function that returns the current 
// // state of a Redux application. It indicates the entire state of the application, 
// // including  all the reducers and their respective states
// console.log("Initial Store:", store.getState());

// //Step 4: Dispatch an action to add a task
// // store.dispatch({type: ADD_TASK, payload: "Buy ThapaTechnical Code"});
// //Now I have use above code as optimized
// store.dispatch(addTask("Buy TT Code"));
// store.dispatch(addTask("Buy Apple"));
// store.dispatch(addTask("Buy Banana"));
// console.log("Updated State: ", store.getState());

// // store.dispatch({type: ADD_TASK, payload: "Buy Mango"});
// store.dispatch(addTask("Buy Mango"));
// console.log("Updated State: ", store.getState());

// // store.dispatch({type: DELETE_TASK, payload: 1});
// store.dispatch(deleteTask(1));
// console.log("Deleted State", store.getState());

// //Step5: Create action creators
// // const addTask = (data) => {
// export function addTask(data) {
//     return { type: ADD_TASK, payload: data }
// };

// // const deleteTask = (id) => {
// export function deleteTask(id) {
//     return { type: DELETE_TASK, payload: id }
// }

// export function fetchTask() {
//     return async (dispatch) => {
//         try {
//             const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3");
//             const task = await res.json();
//             dispatch({ type: FETCH_TASK, payload: task.map((currTask) => currTask.title),})
//         } catch (error) {
//             console.log("Error", error)
//         }
//     }
// };


//
//<============Redux Toolkit==============>
// import { configureStore, createSlice } from "@reduxjs/toolkit";//Redux_Toolkit

// const initialState = {
//     task: [],
//     isLoading: false
// };

// //Step 2_Redux_ToolKit: Create the Redux store using the reducer in Redux ToolKit
// //CreateSlice itne code me mera pura work ho gaya jabki redux me mujhe bahut kuch bananya padta tha
// const taskReducer = createSlice({
//     name: "task",
//     initialState: initialState,
//     reducers: {
//        addTask(state, action) {
//            // state.task = [...state.task, action.payload]
//         state.task.push(action.payload);
//         //above code line ko same below line ki tarah likh sakte ha lakin ek line me ho raha ha redux toolkit me
//         // return {
//             //                 ...state,//make copy of old state because it does not directly update the old state
//             //                 task: [...state.task, action.payload],
//             //             };
//        },
//        deleteTask(state, action) {
//         state.task = state.task.filter(
//             (currTask, index) => index !== action.payload
//         );
//        },
//     }
// });
// console.log(taskReducer);

// const { addTask, deleteTask} = taskReducer.actions;

// //Bas maine ye store banaya aur code likha 
// export const store = configureStore({
//     reducer: {
//         // taskReducer: taskReducer,
//          taskReducer: taskReducer.reducer,
//     },
// })
// // <========_Redux_ToolKit==============>

// //Step 3: Log the initial state


// //Step 4: Dispatch an action to add a task
// console.log(store.dispatch(addTask("Buy Mango")));
// console.log(store.dispatch(addTask("Buy Apple")));
// console.log(store.getState());



////////////////////////
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
    task: [],
    isLoading: false,
};

// Create a slice
const taskReducer = createSlice({
    name: "task",
    initialState: initialState,
    reducers: {
        addTask(state, action) {
            state.task.push(action.payload);
        },
        deleteTask(state, action) {
            state.task = state.task.filter(
                (currTask, index) => index !== action.payload
            );
        },
    },
});

// Export the action creators
export const { addTask, deleteTask, fetchTask } = taskReducer.actions;

// Create and export the store
export const store = configureStore({
    reducer: {
        taskReducer: taskReducer.reducer,
    },
});

// Log the initial state
console.log("Initial State:", store.getState());

// Dispatch some actions for testing
store.dispatch(addTask("Buy Mango"));
store.dispatch(addTask("Buy Apple"));

// Log the updated state
console.log("Updated State:", store.getState());