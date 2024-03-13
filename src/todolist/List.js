import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTodo } from "../redux/TodoSlice";

const List = () => {
    const [todo,setTodo]=useState("");
    const dispatch=useDispatch();
    const todoData=useSelector((data)=>data.todoData.todos)
    // console.log(todoData);
    return (
        <div className="add-user-main">
            <Link to={'/'} className="links" >Back to Home</Link><br></br><br></br>
            <h1>Todo List</h1>
            <input type="text" placeholder="Enter Todo.." value={todo} onChange={(e)=>{setTodo(e.target.value)}} />
            <button onClick={()=>{dispatch(addTodo(todo))}}>Add Todo</button>
            <div className="display-todo-user"> 
                <h1>Show Todo-List</h1>
                {
                    todoData.length>0 ? todoData.map((item,k)=>{
                        return(
                            <h3 key={k}>{item.todo}</h3>
                        )
                    }) : <h4>No Data Found</h4>
                }

            </div>
        </div>
    )
}

export default List;