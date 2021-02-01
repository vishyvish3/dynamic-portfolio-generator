import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import ProfileForm from './components/form-components/profile';
import ProfilePage from './components/Profile/profile-page';
import Navbar from './components/Navbar'
import ResetPass from './components/Reset'
import Change_pass from './components/Change_pass'
import loginFail from './components/loginFailure'

function App() {
  return (
    <Router>
      
        <Switch>
        <Route path="/" exact component={Navbar}/>
        <Route path="/reset"  component={ResetPass}/>
        <Route path="/changePassword"  component={Change_pass}/>
        <Route path="/unauthorized"  component={loginFail}/>
        <Route exact path="/resumeform" component={ProfileForm} />
        <Route exact path="/profile" component={ProfilePage} />
        </Switch>
      
    </Router>
    
  );
}

export default App;
