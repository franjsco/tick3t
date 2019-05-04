import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

import Card from '../../components/Card';

class OpenTicket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      type: '',
      subject: '',
      message: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    const { id, ...rest } = this.state;

    fetch("http://localhost:3001/tickets", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rest)
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({
          id: json.id
        });
      });
  }

  render() {

    if (this.state.id) {
      return (
        <div>
          <Card 
            title="Ticket Created"
            message="The ticket has been created"
            body={`Ticket ID: ${this.state.id}`}
            footer={<Link to="/">Go to home</Link>} />
        </div>
      );

    }

    let FormOpenTicket = (
      <Form onSubmit={this.handleSubmit}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label className="font-weight-bold" for="firstName">First Name</Label>
              <Input
                name="firstName"
                type="text"
                value={this.state.firstName}
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label className="font-weight-bold" for="lastName">Last Name</Label>
              <Input
                name="lastName"
                type="text"
                value={this.state.lastName}
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label className="font-weight-bold" for="email">Email</Label>
              <Input name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleInputChange} />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label className="font-weight-bold" for="type">Type</Label>
              <Input
                name="type"
                type="select"
                value={this.state.type}
                onChange={this.handleInputChange} >
                <option value="">---</option>
                <option value="requestInformation">Request Information</option>
                <option value="technicalAssistant">Technical Assistant</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col sm={12}>
            <FormGroup>
              <Label className="font-weight-bold" for="subject">Subject</Label>
              <Input
                name="subject"
                type="text"
                value={this.state.subject}
                onChange={this.handleInputChange} />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col sm={12}>
            <FormGroup>
              <Label className="font-weight-bold" for="message">Message</Label>
              <Input
                name="message"
                type="textarea"
                value={this.state.message}
                onChange={this.handleInputChange} />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col align="center" md={{ size: 8, offset: 2 }}>
            <FormGroup>
              <Button type="submit" color="primary">Open Ticket</Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>);

    return (
      <div>
        <Card
          align="left"
          title="Open Ticket"
          body={FormOpenTicket}
        />

      </div>
    );
  }
}

export default OpenTicket;