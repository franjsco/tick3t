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
import DropDown from '../../components/DropDown';

class OpenTicket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ticketId: '',
      ticketErr: '',
      firstName: '',
      lastName: '',
      email: '',
      type: '',
      subject: '',
      message: '',
      categories: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3001/categories", {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({
          categories: json
        });
      })
      .catch((err) => {
        this.setState({
          ticketErr: err.message
        });
      });
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

    const { ticketId, ticketErr, ...rest } = this.state;

    if (!rest.firstName || !rest.lastName || !rest.email || !rest.message
      || rest.type === '---' || !rest.subject) {
      alert('Form is invalid');
      return;

    }

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
          ticketId: json.id
        });
      })
      .catch((err) => {
        this.setState({
          ticketErr: err.message
        });
      });
  }

  render() {



    if (this.state.ticketId) {
      return (
        <Card title="Ticket Created">
          <p>{`Ticket ID: ${this.state.ticketId}`}</p>
        </Card>
      );
    } else if (this.state.ticketErr) {
      return (
        <Card title="Error">
          <p>{this.state.ticketErr}</p>
        </Card>
      );
    }


    return (
      <Card
        align="left"
        title="Open Ticket"
      >
        <Form onSubmit={this.handleSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label
                  className="font-weight-bold"
                  for="firstName"
                >
                  First Name
                      </Label>

                <Input
                  name="firstName"
                  type="text"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  placeholder="Jon"
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label
                  className="font-weight-bold"
                  for="lastName"
                >
                  Last Name
                      </Label>

                <Input
                  name="lastName"
                  type="text"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  placeholder="Snow"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={12}>
              <FormGroup>
                <Label
                  className="font-weight-bold"
                  for="email"
                >
                  Email
                      </Label>

                <Input name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  placeholder="example@mail.com"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={12}>
              <FormGroup>
                <Label
                  className="font-weight-bold"
                  for="type"
                >
                  Type
                      </Label>

                <DropDown 
                  options={this.state.categories}
                  value={this.state.type}
                  onChange={this.handleInputChange}
                  />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col sm={12}>
              <FormGroup>
                <Label
                  className="font-weight-bold"
                  for="subject"
                >
                  Subject
                      </Label>

                <Input
                  name="subject"
                  type="text"
                  value={this.state.subject}
                  onChange={this.handleInputChange}
                  placeholder="Subject"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col sm={12}>
              <FormGroup>
                <Label
                  className="font-weight-bold"
                  for="message"
                >
                  Message
                      </Label>

                <Input
                  name="message"
                  type="textarea"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                  placeholder="Message"
                />
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
        </Form>
      </Card>
    );
  }
}

export default OpenTicket;