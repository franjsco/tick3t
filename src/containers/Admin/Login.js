import React, { Component } from 'react';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

import Card from '../../components/Card';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      err: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  
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
  }

  render() {

    if (this.state.err) {
      return (
        <Card title="Error">
          <p>{this.state.err}</p>
        </Card>
      );
    }

    return (
      <Card
        align="left"
        title="Login"
      >
        <Row>
          <Col sm={12} md={{ size:8, offset: 2}}>
          <Form  onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label className="font-weight-bold" for="email">Email</Label>
            <Input onChange={this.handleInputChange} type="email" name="email" id="email" />
          </FormGroup>
          <FormGroup>
            <Label className="font-weight-bold" for="password">Password</Label>
            <Input  onChange={this.handleInputChange} type="password" name="password" id="password" />
          </FormGroup>
          <FormGroup>
            <Button type="submit" color="primary">Login</Button>
          </FormGroup>
        </Form>
          </Col>
       
        </Row>
      </Card>
    );
  }
}

export default Login;