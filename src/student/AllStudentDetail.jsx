import React from 'react';
import './App.css';
import { HashRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from './component/CustomNavbar';
import Home from './component/Home';
import HomePage from './component/HomePage';
import NewStudent from './student/AddStudent';
import withAuth from './service/WithAuth';
import ViewStudent from './student/ViewStudent';
import CreateUser from './user/CreateUser';

class AllStudentDetail extends React.Component {
    render() {
        return (
          
         
          <Router>
         <Navbar />
         
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/sign-in" component={HomePage} />  
              <Route  path="/home" component={withAuth(Home)}/>
              <Route path="/newStudent" component={withAuth(NewStudent)} />
              <Route path="/viewStudent" component={withAuth(ViewStudent)} />
              <Route path="/createUser" component={withAuth(CreateUser)}/>
              <Route path="/AllStudentDetail" component={withAuth(AllStudentDetail)} />
              </Switch>
       
          </Router>
          
        );
      }
}
export default AllStudentDetail;