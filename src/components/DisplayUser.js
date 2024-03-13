import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/Slice";

const DisplayUser = () => {
    const UserData = useSelector((data) => data.userData.users);
    // console.log(UserData.userData.users);
    const dispatch = useDispatch();
    return (
        <div className="display-user-main">
            <h1>Display User</h1>
            {
                UserData.length > 0 ? UserData.map((item, k) => {
                    return (
                        <div className="user-item" key={k}>
                            <h3>{item.name}</h3>
                            <button className="btn" onClick={() => { dispatch(removeUser(item.id)) }}>remove</button>
                        </div>
                    )
                }):<h1>no data</h1>
            }
        </div>
    )
}

export default DisplayUser;