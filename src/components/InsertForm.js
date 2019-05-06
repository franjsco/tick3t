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

class InsertForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.props.handleSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label className="font-weight-bold" for="firstName">First Name</Label>
                <Input
                  name="firstName"
                  type="text"
                  value={this.props.firstName}
                  onChange={this.props.handleInputChange}
                  placeholder="Jon"
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label className="font-weight-bold" for="lastName">Last Name</Label>
                <Input
                  name="lastName"
                  type="text"
                  value={this.props.lastName}
                  onChange={this.props.handleInputChange}
                  placeholder="Snow"
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
                  value={this.props.email}
                  onChange={this.props.handleInputChange}
                  placeholder="example@mail.com"
                  />
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
                  value={this.props.type}
                  onChange={this.props.handleInputChange} >
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
                  value={this.props.subject}
                  onChange={this.props.handleInputChange} 
                  placeholder="Subject"
                  />
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
                  value={this.props.message}
                  onChange={this.props.handleInputChange}
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
      </div>
    );
  }
}

export default InsertForm;