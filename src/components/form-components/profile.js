import  React, { useState }from 'react';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {

    function getCook(cookiename) 
        {
        // Get name followed by anything except a semicolon
        var cookiestring=RegExp(cookiename+"=[^;]+").exec(document.cookie);
        // Return everything after the equal sign, or an empty string if the cookie name not found
        return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
        }
    window.addEventListener('load', (event) => {
        
      var cookieValue = getCook('user');
      
        
         if (cookieValue !== "true") {
            window.location.href = "/";
         }
         // else{
        //     //alert("success")
        // }
    });

    const history = useHistory();
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        location: '',
        education: [],
        workes: [],
        plocation: '',
        industry: '',
        range: ''
    });

    const addWork = (e) => {
        e.preventDefault();
        var p = { company: '', designation: '', from_date: '', to_date: '' };
        setProfile({
            ...profile,
            workes : [...profile.workes, p]
        });
    }

    const addEdu = (e) => {
        e.preventDefault();
        var p = { university: '', qualification: '', from_date_e: '', to_date_e: '' };
        setProfile({
            ...profile,
            education : [...profile.education, p]
        });
    }

    const handleCompanyChange = (e, index) => {
        let nameValue = e.target.name;
        //console.log("name value is: ",nameValue);
        //console.log("value is: ", e.target.value);
        //console.log("index is: ", index);
        profile.workes[index][nameValue] = e.target.value;

        //console.log("profiles are : ", profile);

        //now set profiles to state
        setProfile({
            ...profile,
            workes : profile.workes
        }); 
    }

    const handleEduChange = (e, index) => {
        let nameValue = e.target.name;
        //console.log("name value is: ",nameValue);
        //console.log("value is: ", e.target.value);
        //console.log("index is: ", index);
        profile.education[index][nameValue] = e.target.value;

        setProfile({
            ...profile,
            education : profile.education
        }); 
    }

    const onSubmitHandler =  (e) => {
        e.preventDefault();

        console.log("profile si: ", profile);
        localStorage.setItem('profile', JSON.stringify(profile));
        history.push( 'profile');
    }
    

    const onChangeNormalParameters = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
        console.log("profile si: ", profile);

    }

    const removeWork = (e, index) => {
        e.preventDefault();

        profile.workes.splice(index,1);

        setProfile({
            ...profile,
            workes: profile.workes
        }); 

    }
    const removeEdu = (e, index) => {
        e.preventDefault();

        profile.education.splice(index,1);

        setProfile({
            ...profile,
            education: profile.education
        }); 

    }

    const logout = (e)=>{
        e.preventDefault();
        document.cookie = "user=false"
        window.location.href = "/";
        
    }

    return (
        <div style={{background: "#eee", padding: "39px"}} className=" container my-5" >
            <div className="d-flex">
            <h2>Profile Form</h2>
            <button className="btn btn-danger" onClick={logout} style={{margin: "0 0 0 auto"}}>Logout</button>
            </div>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="email">Name</label>
                    <input type="name" value={profile.name} name="name" onChange={onChangeNormalParameters} className="form-control" placeholder="Enter name" id="name" required/>
                </div>
                <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" value={profile.email} onChange={onChangeNormalParameters} className="form-control" placeholder="Enter email" id="email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Mobile</label>
                    <input type="number" name="phone" value={profile.phone} onChange={onChangeNormalParameters} className="form-control" placeholder="Enter mobile" id="mobile" required />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">DOB</label>
                    <input type="date" name="dob" value={profile.dob} onChange={onChangeNormalParameters} className="form-control" placeholder="Enter DOB" id="dob" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">select gender</label>
                    <select name="gender" className="form-control" value={profile.gender} onChange={onChangeNormalParameters}>
                        <option >select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Location</label>
                    <input type="text" name="location" value={profile.location} onChange={onChangeNormalParameters} className="form-control" placeholder="Enter location" id="location" />
                </div>

                <div className="company-details">
                    <h3>Education Qualification <button onClick={(e) => addEdu(e)}  className="btn btn-info btn-sm">Add</button></h3>
                    
                    
                        {
                            profile.education.map( ( edu, index ) => {
                                return (
                                    <div className="each-company" key={index}>
                                        <h4>University {index + 1}
                                          <button onClick={(e) => removeEdu(e, index)} className="btn btn-danger btn-sm">Remove</button>
                                        </h4>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="university">university Name</label>
                                                <input type="text" name="university" value={edu.university} className="form-control" placeholder="Enter university name" id="university" onChange={e => handleEduChange(e, index)} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="qualification">Qualification</label>
                                                <input type="text" name="qualification" value={edu.qualification} className="form-control" placeholder="Enter qualification" id="qualification" onChange={e => handleEduChange(e, index)} />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="from_date_e">From</label>
                                                <input name="from_date_e" type="text" value={edu.from_date_e}   className="form-control" placeholder="Enter date" id="fdate_e" onChange={e => handleEduChange(e, index)} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="to_date_e">To </label>
                                                <input name="to_date_e" value={edu.to_date_e} type="text"   className="form-control" placeholder="Enter date" id="tdate_e" onChange = {e => handleEduChange(e, index)} />
                                            </div>
                                        </div>   
                                        
                                    </div>
                                    
                                )
                            })
                        }
                        
                        
                    
                    

                </div>

                <div className="company-details">
                    <h3>Work Experience <button onClick={(e) => addWork(e)}  className="btn btn-info btn-sm">Add</button></h3>
                    
                    
                        {
                            profile.workes.map( ( workk, index ) => {
                                return (
                                    <div className="each-company" key={index}>
                                        <h4>Company {index + 1}
                                          <button onClick={(e) => removeWork(e, index)} className="btn btn-danger btn-sm">Remove</button>
                                        </h4>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="email">Company</label>
                                                <input type="text" name="company" value={workk.company} className="form-control" placeholder="Enter company name" id="company" onChange={e => handleCompanyChange(e, index)} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Designation</label>
                                                <input type="text" name="designation" value={workk.designation} className="form-control" placeholder="Enter designation" id="designation" onChange={e => handleCompanyChange(e, index)} />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="email">Working from</label>
                                                <input name="from_date" type="text" value={workk.from_date}   className="form-control" placeholder="Enter date" id="fdate" onChange={e => handleCompanyChange(e, index)} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Till </label>
                                                <input name="to_date" value={workk.to_date} type="text"   className="form-control" placeholder="Enter date" id="tdate" onChange = {e => handleCompanyChange(e, index)} />
                                            </div>
                                        </div>   
                                        
                                    </div>
                                    
                                )
                            })
                        }
                        
                        
                    
                    

                </div>

                <div className="company-preferences">
                    <h3>Preferences</h3>
                        <div className="form-group">
                            <label htmlFor="email">Preferred Location</label>
                        <input type="text" name="plocation" value={profile.plocation} onChange={onChangeNormalParameters} className="form-control" placeholder="Enter preferred location" id="plocation" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Industry</label>
                        <input type="text" name="industry" value={profile.industry} onChange={onChangeNormalParameters} className="form-control" placeholder="Enter industry" id="industry" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Salary Range</label>
                        <input type="text" name="range" value={profile.range} onChange={onChangeNormalParameters} className="form-control" placeholder="Enter salary range" id="srange" />
                        </div>
                      
                        
                </div>
                
                        
                <button  type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default ProfileForm;
