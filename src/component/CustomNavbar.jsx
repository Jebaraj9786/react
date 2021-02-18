import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem ,Navbar} from 'reactstrap';
import AuthService from '../service/AuthService';
import styled from 'styled-components';
import logo from "../assets/logo.svg";
import sygnet from "../assets/sygnet.svg";
import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';

class Navbars extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.logout =this.logout.bind(this)
    this.auth = new AuthService();
    this.state = {
      isOpen: false,
      collapsed: true,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  logout=()=>{
    this.auth.logout()
  }
  render() {
    return (

       <React.Fragment className="test">
         <Navbar expand="lg">
          <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
       
       <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/home" className="nav-link" >Home</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/about" className="nav-link">about</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="#" className="nav-link">Settings</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto">
        {this.auth.loggedIn()?(
           <React.Fragment> 
           <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-list"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-location-pin"></i></NavLink>
          </NavItem>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={'../assets/img-1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
              <DropdownItem divider />
              <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>
              <DropdownItem onClick={this.logout} href="#/sign-in"><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
           </React.Fragment>
        ):(
          <NavItem>
            <NavLink to="/sign-in">Sign In/sign up</NavLink>       
           </NavItem>
        )}     
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        </Navbar>
       
        </React.Fragment>
     
    );
  }
}

export default Navbars;