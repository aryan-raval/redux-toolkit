import { createAsyncThunk, createSlice, current, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    users:JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[],
    apiUserData:[],
    isLoading:true
}
export const fetchApiData=createAsyncThunk("fetchApiData", async()=>{
    const result=await fetch("https://jsonplaceholder.typicode.com/users");
    return result.json();                              
})
const Slice=createSlice({
    name:"addUserSlice",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            const data={
                id:nanoid(),
                name:action.payload
            }
            state.users.push(data);
            // console.log("data added",data);

            const addUserData=JSON.stringify(current(state.users));
            localStorage.setItem('users',addUserData)

        },
        removeUser:(state,action)=>{
           
            const data=state.users.filter((item)=>{
                return item.id!==action.payload
                
            })
            state.users=data
           

            const addUserData=JSON.stringify(state.users);
            localStorage.setItem('users',addUserData)
            

        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchApiData.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.apiUserData=action.payload
            // console.log("api",action.payload);
        })
    }
})

export const {addUser,removeUser} =Slice.actions;
export default Slice.reducer;