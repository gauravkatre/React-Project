import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {

    todos:[{id:'1',text:'Learn React'}]}

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push({id:nanoid(),text:action.payload})
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter(todo=>todo.id!==action.payload)
        }
    }
})

export const {addTodo,deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;