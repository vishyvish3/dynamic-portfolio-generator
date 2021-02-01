import React, { Component } from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

class ProfilePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            profile : ''
        }

        
    }
    
    componentDidMount(){
        let profile = JSON.parse(localStorage.getItem('profile'), true );
        console.log("profile is: ", profile);
        this.setState({ profile : profile });
        setTimeout(() =>{
            console.log("workes is: ", this.state.profile.workes);
        }, 5000);
        
    }

    render(){
        return (
            <div>
                <Pdf targetRef={ref} filename="portfolio.pdf">
                    {({ toPdf }) => <button className="btn btn-info" onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
                <div style={{background: "#eee", padding: "39px"}}  className="container" ref={ref}>

                    
                    <div className="rowww colordiv" >
                    <hr/>
                    <h2>Resume</h2>
                    <hr/>
                    <h3>Bio</h3>
                        <div>
                            Name : {this.state.profile.name}
                        </div>

                        <div>
                            Email : {this.state.profile.email}
                        </div>

                        <div>
                            Phone : {this.state.profile.phone}
                        </div>

                        <div>
                            Date of birth : {this.state.profile.dob}
                        </div>

                        <div>
                            Gender : {this.state.profile.gender}
                        </div>

                        <div>
                            Location : {this.state.profile.location}
                        </div>
                        <hr />
                        <div className="work-experience">
                            
                            {
                               this.state.profile.workes ?  this.state.profile.workes.map(( work, index) => {
                                    return (
                                        <div key={index}>
                                            <h3>Work Experience</h3>
                                            <div>
                                                Location : {work.company}
                                            </div>
                                            <div>
                                                Designation : {work.designation}
                                            </div>
                                            <div>
                                                From Date : {work.from_date}
                                            </div>
                                            <div>
                                                To date : {work.to_date}
                                            </div>

                                        </div>

                                    )
                                }) : ''
                            }

                        </div>
                        <hr />
                        <div className="work-experience">
                        <h3>Education Qualification</h3>
                            {
                               this.state.profile.education ?  this.state.profile.education.map(( work, index) => {
                                    return (
                                        <div>
                                        <div key={index}>
                                           
                                            <div>
                                                University : {work.university}
                                            </div>
                                            <div>
                                                Degree : {work.qualification}
                                            </div>
                                            <div>
                                                From Date : {work.from_date_e}
                                            </div>
                                            <div>
                                                To date : {work.to_date_e}
                                            </div>
                                        
                                        </div>
                                        
                                    </div>
                                    )
                                }) : ''
                            }

                        </div>
                        <hr />
                        <h3>Preferences</h3>
                        <div>
                            Preferred Location : {this.state.profile.plocation}
                        </div>
                        <div>
                            Industry : {this.state.profile.industry}
                        </div>
                        <div>
                            Salary range : {this.state.profile.range}
                        </div>
                    </div>
                </div>


            </div>
             )
    }
    
}

export default ProfilePage;
