import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

import { getAllTicketStatus } from '../../api/categories';
import { viewTicket, updateTicket } from '../../api/tickets';

import Card from '../../components/Card';
import Table from '../../components/Table';
import DropDown from '../../components/DropDown';
import Button from '../../components/Button';


class TicketManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      categories: [],
      status: '',
      note: '',
      error: '',
      updated: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  componentDidMount() {
    const { match: { params } } = this.props;

    viewTicket(params.ticketId)
      .then((json) => this.setState({ data: json.data}))
      .catch(error => this.setState({ error }));

    getAllTicketStatus()
      .then((json) => this.setState({ categories: json.data }))
      .catch(error => this.setState({ error }));
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
    const data = this.state;
    const { match: { params } } = this.props;

    if (!data.type === '---' || !data.note) {
      alert('Form is invalid');
      return;
    }

    const ticket = {
      ticketId: params.ticketId,
      status: data.status,
      note: data.note
    };

    updateTicket(ticket)
      .then(json => {
        alert('Ticket Update');
        this.setState({
          updated: true
        });
      })
      .catch(err => this.setState({ ticketErr: err.message }));
  }


  render() {
    const { data, updated, error } = this.state;

    if (error) {
      return (
        <Card title="Error">
          <p>{error.message}</p>
        </Card>
      )
    }


    if (updated) {
      return (
        <Redirect to="/admin/" />
      )
    }

    return (
      <div>
        <Card
          headAlign="left"
          bodyAlign="center"
          title="Ticket Details"
        >
          <Row>
            <Col>
              <Table data={data} />
              <Link to="/admin/">Back to Ticket List</Link>
            </Col>
          </Row>
        </Card>

        <Card
          align="left"
          title="Manage Ticket"
        >
          <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Label sm={2} className="font-weight-bold" for="email">Status</Label>
              <Col sm={10}>
                <DropDown
                  name="status"
                  value={this.state.status}
                  onChange={this.handleInputChange}
                  options={this.state.categories}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} className="font-weight-bold" for="note">Note</Label>
              <Col sm={10}>
                <Input
                  name="note"
                  type="textarea"
                  value={this.state.note}
                  onChange={this.handleInputChange}
                  placeholder="Note"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col align="right">
                <Button type="submit">Update Ticket</Button>
              </Col>
            </FormGroup>
          </Form>
        </Card>

      </div>
    );
  }
}

export default TicketManager;