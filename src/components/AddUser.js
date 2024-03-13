import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/Slice";
import { Link } from "react-router-dom";

const AddUSer=()=>{
    const [name,setName]=useState("");
    const dispatch=useDispatch();
    
    return(
        <div className="add-user-main">
            <h1>Add User Page</h1>
            <input type="text" placeholder="enter user name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={()=>{dispatch(addUser(name))}}>Add</button><br></br><br></br>
            <Link to={'/newcomp'} className="links">Show data in another page</Link><br></br><br></br>
            <Link to={'/todolist'} className="links" >Go to Todo-list Page</Link><br></br><br></br>
            <Link to={'/apilist'} className="links" >Show Data through Api</Link>
        </div>
    )
}

export default AddUSer;