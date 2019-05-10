import React, { Component } from 'react';
import {
  Row,
  Col,
  Table
} from 'reactstrap';

import { Link } from 'react-router-dom';

import Card from '../../components/Card';
import SearchForm from '../../components/SearchForm';
import DropDown from '../../components/DropDown';


class TicketList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      categories: [],
      error: ''
    };

  }

  componentDidMount() {
    fetch(`http://localhost:3001/tickets?_limit=10`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error API');
        }
        return response.json();
      })
      .then(json => this.setState({ data: json, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));


    fetch("http://localhost:3001/categories?type=ticketStatus")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error API');
        }

        return response.json();
      })
      .then((json) => {
        this.setState({
          categories: json
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message
        });
      });
  }


  render() {
    let tickets = this.state.data;

    if (tickets.length > 0) {
      tickets = tickets.map((ticket) => {
        return (
          <tr>
            <th scope="row">
              <Link to={`/admin/ticket/${ticket.id}`}>
                {ticket.id}
              </Link>
            </th>
            <td>
              {ticket.status}
            </td>
            <td>
              {ticket.type}
            </td>
            <td>
              {ticket.subject}
            </td>
          </tr>);
      });
    }

    return (
      <Card title="Ticket List">
        <Row>
          <Col md={{ size: 4 }}>
            <SearchForm
              name="search"
              id="search"
              placeholder="ticket ID"
              onChange={this.handleChangeInput}
              onSubmit={this.handleSubmit}
              value={this.state.ticketId}
              buttonName="Search"
            />

          </Col>
          <Col md={5}></Col>
          <Col md={3} className="float-right">
            <DropDown
              options={this.state.categories}

            />


          </Col>
        </Row>
        <Row>
          <Col>
            <Table bordered responsive>
              <thead>
                <tr>
                  <th>id</th>
                  <th>status</th>
                  <th>type</th>
                  <th>subject</th>
                </tr>
              </thead>
              <tbody>
                {tickets.length > 0 ? tickets : (
                  <tr>
                    <td
                      className="text-center font-weight-bold"
                      colspan="4"
                    >
                      no ticket
                    </td>
                  </tr>)}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default TicketList;