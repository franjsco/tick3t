import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { userAPI } from '../../api/user';

import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPassword: '',
      confirmPassword: '',
      error: '',
      updated: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
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

    const { newPassword, confirmPassword } = this.state;

    if (newPassword && newPassword === confirmPassword) {
      const user = {
        newPassword,
      }

      userAPI.changePassword(user)
        .then((json) => {
          this.setState({ updated: true });
        })
        .catch((error) => {
          this.setState({ error: error.message });
        })
    } else {
      this.setState( {error: 'Check passwords'})
    }
  }

  resetForm(event) {
    event.preventDefault();

    this.setState({ error: '' });
  }

  render() {
    if (this.state.error) {
      return (
        <Card
          title="Error"
        >
          <p>{this.state.error}</p>
          <a href="/" onClick={this.resetForm}>Back to login</a>
        </Card>
      );
    }


    if (this.state.updated) {
      alert('Password updated');

      return (
        <Redirect to="/admin/" />
      )
    }

    return (
      <Card
        align="right"
        title="Settings"
        footerLink={{ path: "/", name: "Back to home" }} 
      >
        <Row>
          <Col
            sm={12}
            md={{ size: 8, offset: 2 }}
          >
            <h5>Change password</h5>
          </Col>
        </Row>
        <Row>
          <Col
            sm={12}
            md={{ size: 8, offset: 2 }}
          >
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label
                  className="font-weight-bold"
                  for="newPassword"
                >
                  New password
                </Label>
                <Input
                  onChange={this.handleInputChange}
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  placeholder="Insert new password"
                />
              </FormGroup>

              <FormGroup>
                <Label
                  className="font-weight-bold"
                  for="newPassword"
                >
                  Confirm password
                </Label>
                <Input
                  onChange={this.handleInputChange}
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm password"
                />
              </FormGroup>

              

              <FormGroup>
                <Button>Change Password</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Card>
    );
  }
}


export default Settings;