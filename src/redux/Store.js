import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './Slice';
import todosReducer from './TodoSlice'


export const store=configureStore({
   reducer:{
        userData:usersReducer,
        todoData:todosReducer
   }
})