import { addTask, deleteTask, store } from "../../../store";

// Log the initial state
console.log("Initial State:", store.getState());

// Dispatch some actions for testing
store.dispatch(addTask("Buy Mango"));
console.log(store.getState());
console.log(store.dispatch(addTask("Buy Grapes")));
console.log(store.dispatch(deleteTask(1)));
console.log(store.getState());
console.log(store.dispatch(addTask("Buy Apple")));

// Log the updated state
console.log("Updated State:", store.getState());