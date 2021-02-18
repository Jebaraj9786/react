import { HashRouter as Router,Route,Switch } from 'react-router-dom';
import React, { Component } from 'react';
import AuthService from './AuthService';
import SideNav from '../component/sideNavigation';

export default function WithAuth(AuthComponent) {
    const Auth = new AuthService('http://localhost:8090');
    return class AuthWrapped extends Component {
        constructor() {
            super();
            this.state = {
                user: {}
            }
           
        }
        componentWillMount() {
            
            if (!Auth.loggedIn()) {
                this.props.history.replace('/sign-in')
            }
            else {
                try {
                    const profile = Auth.getProfile()
                    this.setState({
                        user: profile
                    })
                    console.log("test sakitha"+this.state.user)
                    console.log(JSON.stringify(profile));
                }
                catch(err){
                    Auth.logout()
                    this.props.history.replace('/sign-in')
                }
            }
        }
        render() {
            if (this.state.user) {
                return (
                    <div className="Form_App">
                    <SideNav />
                    <div className="Form__Aside">
                    <AuthComponent history={this.props.history} user={this.state.user} />
                    </div>
                    </div>
                )
            }
            else {
                return null
            }
        }
         }

         
}