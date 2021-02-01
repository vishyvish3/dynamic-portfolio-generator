import './changePass.css';
import React, { useState } from 'react';
const Change_pass = () => {
    const API = "https://react-auth-server.herokuapp.com"
    const [newPassword, setNewPassword] = useState("");
    const [reEnterPassword, setReEnterPassword] = useState("");

    const forgPass = (e)=>{
        e.preventDefault()
        /* let currentLocation = new URL(window.location.href);
        let id = currentLocation['search'].split("?id=")[1].split("&rs=")[0];
        let rs = currentLocation['search'].split("&rs=")[1]; */
        if(newPassword !==reEnterPassword) 
        {
            alert("Passwords do not match !!");
            return false;
        }
        console.log(newPassword,reEnterPassword)
       /*  try {
                let main_url = `${API}/change-password/?id=${id}&rs=${rs}`
            fetch(main_url, {
                method: "PUT",
                body: JSON.stringify({
                    password: newPassword
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then((resp) => resp.json())
                .then((data) => {
                    alert(data.message);
                })
        } catch (error) {
            
        } */
    }

    return (
        <div className="app container">
        <div className="row">
            <div className="col-md-12">
                
                <form onSubmit={forgPass}>
                    
                    <div className="form-group m-5 p-5">
                        <h2>Reset Password</h2>
                        <div>
                            <label  className="label">New Password</label>
                            <input id="newPassword" type="password" className="form-control" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} placeholder="Enter new Password" required/>
                        </div>
                        <div>
                            <label  className="label">Re-enter password</label>
                            <input id="reEnterPassword" type="password" className="form-control" value={reEnterPassword} onChange={(e)=>setReEnterPassword(e.target.value)} placeholder="Re-enter password" required/>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary m-3" value="Change Password">Update Password
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    </div>
      );
}
 
export default Change_pass;