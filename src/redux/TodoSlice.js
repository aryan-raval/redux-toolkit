import { createSlice, current, nanoid } from "@reduxjs/toolkit";


const initialState={
    todos:JSON.parse(localStorage.getItem('todos'))?JSON.parse(localStorage.getItem('todos')):[]
}
const TodoSlice=createSlice({
    name:'addtodoslice',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            // console.log("action called",action.payload);
            const data={
                id:nanoid(),
                todo:action.payload
            }
            state.todos.push(data);
            // console.log(JSON.stringify(current(state.todos)));
            const localTodo=JSON.stringify(current(state.todos));
            localStorage.setItem('todos',localTodo)

        
        }
    }

})

export const {addTodo} = TodoSlice.actions;
export default TodoSlice.reducer;