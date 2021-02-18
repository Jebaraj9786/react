import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import AuthService from '../service/AuthService'

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      password: '',
      confirmpassword: '',
      email: '',
      mblnumber: '',
      hasAgreedTerms:''


    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.auth = new AuthService();
  }

  handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  componentWillMount(){
 
    if(this.auth.loggedIn())
    
        this.props.history.replace('/home');
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password !== this.state.confirmpassword) {
      alert("password and confirmpassword should match");
    } else {
      alert('A name was submitted: ' + this.state.password + ' ' + this.state.confirmpassword);

      axios.post('http://localhost:8090/userreg', {
        firstName: this.state.firstname,
        lastName: this.state.password,
        password: this.state.password,
        email: this.state.email,
        mobileNumber: this.state.mblnumber
      })
        .then((response) => {
          console.log(response)
          this.setState({ firstName: response.data.firstName });
        })
        .catch(function (error) {
          console.log(error);
        });



    }



  }

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label">
              First Name:
           </label>
            <input type="text" className="FormField__Input" name='firstname' value={this.state.firstname} onChange={this.handleChange} />
          </div>
          <div>
            <label className="FormField__Label">
              Last Name:
          </label>
            <input type="text" className="FormField__Input" name='lastname' value={this.state.lastname} onChange={this.handleChange} />
          </div>
          <div><label className="FormField__Label">Password:</label>
            <input type="password" className="FormField__Input" name='password' value={this.state.password} onChange={this.handleChange} />
          </div>
          <div><label className="FormField__Label">Confirm Password:</label>
            <input type="password" className="FormField__Input" name='confirmpassword' value={this.state.confirmpassword} onChange={this.handleChange} />
          </div>
          <div>
            <label className="FormField__Label">Email:</label>
            <input type="text" className="FormField__Input" name='email' value={this.state.email} onChange={this.handleChange} />
          </div>
          <div>
            <label className="FormField__Label">Mobile Number:</label>
            <input type="text" className="FormField__Input" name='mblnumber' value={this.state.mblnumber} onChange={this.handleChange} />
          </div>
          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input className="FormField__Checkbox" type="checkbox" name="hasAgreedTerms" value={this.state.hasAgreedTerms} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
            </label>
          </div>
          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
          </div>
        </form>
      </div>
    );
  }
}
export default Signup;