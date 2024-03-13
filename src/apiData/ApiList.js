import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiData } from '../redux/Slice';
import { Link } from "react-router-dom";

const ApiList = () => {
    const dispatch = useDispatch();
    const finalData = useSelector((data) => data.userData.apiUserData);
    // console.log(finalData);
    useEffect(() => {
        dispatch(fetchApiData());
    }, [])
    return (
        <div className="display-user-main">
             <Link to={'/'} className="links" >Back to Home</Link><br></br><br></br>
            <h1>Data From Api</h1>
            {/* <button onClick={() => { dispatch(fetchApiData()) }}>Show Data</button> */}
            <div>
                {finalData.length > 0 ? finalData.map((item, k) => {
                    return (
                        <h3 key={k}>{item.name}</h3>
                    )
                }) : <h3>No Data Found</h3>}
            </div>
        </div>
    )
}

export default ApiList;