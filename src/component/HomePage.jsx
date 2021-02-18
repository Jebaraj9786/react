import React, {Component} from 'react';
import { HashRouter as Router, Switch ,Route,NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import SignupForm from './Signup';
import SignInForm from './login';
import "./HomePage.css"


class HomePage extends Component  {
  render(){
    return (
        <Router> 
      <div className="App">
     <div className="App__Aside"></div>
          <div className="App__Form">
          <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div>
              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>
              <Switch>
              <Route exact path="/" component={SignupForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
              </Switch>
      </div>
      </div>
      
      </Router>
    );
  }

}
export default HomePage;