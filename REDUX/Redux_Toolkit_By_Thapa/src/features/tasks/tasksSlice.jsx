import { createSlice } from "@reduxjs/toolkit";

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
        reset(state){
            state.task = []
        }
    },
});

export const {addTask, deleteTask, reset} = taskReducer.actions;
export default taskReducer.reducer;