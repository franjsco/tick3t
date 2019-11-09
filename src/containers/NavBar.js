import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import {
  Container,
  Row,
  NavLink,
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';

import Button from '../components/UI/Button';
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
            className="title"
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

              {
                this.props.loggedIn ? (
                  <Row>

                    <NavItem>
                      <NavLink tag={Link} to='/admin/'>Tickets</NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink tag={Link} to='/admin/settings'>Settings</NavLink>
                    </NavItem>

                    <NavItem>
                      <Button
                        onClick={this.closeNavbar}
                        tag={Link}
                        to="/logout"
                      >
                        Logout
                      </Button>
                    </NavItem>
                  </Row>) : (
                    <NavItem>
                      <Button
                        onClick={this.closeNavbar}
                        tag={Link}
                        to="/login"
                      >
                        Login <img src={logo} alt="admin login"></img>
                      </Button>
                    </NavItem>

                  )
              }


            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn,
    error: state.user.error
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(userActions.logout())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);