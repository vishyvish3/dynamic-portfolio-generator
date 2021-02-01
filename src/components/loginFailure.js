import React from 'react';
import './fail.css';
const loginFailure = ()=>{
    return(
        <div>
            <h1>You are not authorized !!! <a className="failure_info" href="/">Click here to login</a></h1>

        </div>
    )
}
export default loginFailure