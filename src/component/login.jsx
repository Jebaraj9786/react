import React from 'react';
import { Link } from 'react-router-dom';

import AuthService from '../service/AuthService'

class login extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        userName: '',
        password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.auth = new AuthService();
}


handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
}

componentWillMount(){
 
  if(this.auth.loggedIn())
  
      this.props.history.replace('/home');
}

handleSubmit(e) {
    e.preventDefault();
    if(this.state.userName != null && this.state.password != null)
    {
      this.auth.login(this.state.userName,this.state.password).then((response) => {
          this.props.history.push('/home');
        })
        .catch(function (error) {
          console.log(error);
        });
    }
}
    render(){
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
                <label className="FormField__Label" >User Name</label>
                <input type="text" id="userName" className="FormField__Input" placeholder="Enter your userName" name="userName" value={this.state.userName} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
        );
    }

}
export default login;