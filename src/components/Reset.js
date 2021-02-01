import './reset.css';
import React, { useState } from 'react';
const ResetPass = () => {
    const URL = "https://react-auth-server.herokuapp.com"
    const [emailToResetPassword, setEmailToResetPassword] = useState("");
    
    const restPass = (e)=>{
        e.preventDefault()
        console.log(emailToResetPassword)
        try{
            fetch(`${URL}/reset-password`, {
                method: "PUT",
                body: JSON.stringify({
                    email: emailToResetPassword
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then((resp) => resp.json())
                .then((data) => {
                   alert(data.message);
                })
        }
        catch(err)
        {
            console.log(err)
        }
    }
    return ( 
        <div className="app container">
        <div className="row">
            <div className="col-md-12">
                <form onSubmit={restPass}>
                    <div  className="form-group text-center" >
                     
                        <div>
                            <input id="emailToResetPassword" type="text" value={emailToResetPassword} onChange={(e)=>setEmailToResetPassword(e.target.value)} className="form-control mx-auto" placeholder="Enter your email" required />
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary m-3" value="Confirm Email">Confirm Email</button>
                        </div>
                        <div>Enter your regsitered email, a password reset link will be sent</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
     );
}
 
export default ResetPass;