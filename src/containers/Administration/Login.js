import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

import Card from '../../components/Card';
import Button from '../../components/Button';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      error: null,
      success: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetLogin = this.resetLogin.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { email, password } = this.state;

    if (email && password) {
      this.props.login(email, password);
    }
  }

  resetLogin(event) {
    event.preventDefault();

    this.props.reset();
  }

  render() {
    if (this.props.error) {
      return (
        <Card
          title="Error"
        >
          <p>{this.props.error}</p>
          <a href="/" onClick={this.resetLogin}>Back to login</a>
        </Card>
      );
    }

    if (this.props.loggedIn) {
      return (
        <Redirect to="/admin/" />
      )
    }

    return (
      <Card
        align="left"
        title="Login"
      >
        <Row>
          <Col
            sm={12}
            md={{ size: 8, offset: 2 }}
          >
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label
                  className="font-weight-bold"
                  for="email"
                >
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  onChange={this.handleInputChange}
                  placeholder="email@email.com"
                />
              </FormGroup>

              <FormGroup>
                <Label
                  className="font-weight-bold"
                  for="password"
                >
                  Password
                </Label>
                <Input
                  onChange={this.handleInputChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="your password"
                />
              </FormGroup>

              <FormGroup>
                <Button>Login</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Card>
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
    login: (email, password) => dispatch(userActions.login(email, password)),
    reset: () => dispatch(userActions.reset())
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (Login);