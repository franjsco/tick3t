import React, { Component } from 'react';
import {
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input,
  Button
} from 'reactstrap';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.props.onSubmit}>
          <Row form>
            <Col md={12}>
              <FormGroup>
                <InputGroup>
                  <Input
                    type="input"
                    name={this.props.name}
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange}
                    value={this.props.ticketId}
                  />
                  <InputGroupAddon addonType="append">
                    <Button type="submit" color="primary">{this.props.buttonName}</Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default SearchForm;