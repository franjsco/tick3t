import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';

import Button from '../components/Button';
import './NavBar.css';
import logo from '../assets/admin.svg';


class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    // binding
    this.toggle = this.toggle.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
  }


  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  closeNavbar() {
    this.setState({
      isOpen: false
    });
  }


  render() {
    return (
      <Navbar
        fixed="top"
        color="light"
        light
        expand="sm"
        className="shadow-sm p-3 mb-5 bg-white"
      >
        <Container>
          <NavbarBrand
            onClick={this.closeNavbar}
            tag={Link}
            to="/"
          >
            tick3t
          </NavbarBrand>

          <NavbarToggler
            className="custom-toggler"
            onClick={this.toggle}
          />

          <Collapse
            isOpen={this.state.isOpen}
            navbar
          >

            <Nav className="ml-auto" navbar>
            
              <NavItem>
                <Button
                  onClick={this.closeNavbar}
                  tag={Link}
                  to="/login"
                >
                  <img src={logo} alt="admin login"></img>
                  Admin
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;