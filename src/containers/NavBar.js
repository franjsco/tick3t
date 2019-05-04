import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

import {
  Container,
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

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
      <div>
        <Navbar fixed="top" color="white" expand="sm" className="shadow-sm p-3 mb-5 bg-white rounded">

          <Container>
            <NavbarBrand onClick={this.closeNavbar} tag={Link} to="/">tick3t</NavbarBrand>
            <NavbarToggler className="custom-toggler" onClick={this.toggle} />
            
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>

                <NavItem>
                  <NavLink onClick={this.closeNavbar} tag={Link} to="/stats">Stats</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink onClick={this.closeNavbar} tag={Link} to="/stats">Credits</NavLink>
                </NavItem>

              </Nav>

              <Nav className="ml-auto">
                <NavItem>
                  <Button color="primary" onClick={this.closeNavbar} tag={Link} to="/login">Admin</Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>



      </div>
    )
  }
}

export default NavBar;