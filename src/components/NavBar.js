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

import { isLogin } from '../utils/auth';

import Button from '../components/Button';
import './NavBar.css';
import logo from '../assets/admin.svg';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
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
        expand="sm"
        className="shadow-sm bg-white"
      >
        <Container>
          <NavbarBrand
            onClick={this.closeNavbar}
            className="title"
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
                {
                  isLogin() ? (
                    <Button
                      onClick={this.closeNavbar}
                      tag={Link}
                      to="/logout"
                    >
                      Logout
                  </Button>
                  ) : (
                      <Button
                        onClick={this.closeNavbar}
                        tag={Link}
                        to="/login"
                      >
                        Login <img src={logo} alt="admin login"></img>
                      </Button>
                    )
                }
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;