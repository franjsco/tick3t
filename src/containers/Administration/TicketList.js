import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Table
} from 'reactstrap';


import PaginationComponent from "react-reactstrap-pagination";

import { formatDate, formatStatus } from '../../utils/helper';
import { getTickets, viewTicket, findTicket} from '../../api/tickets';
import { getAllTicketStatus } from '../../api/categories';

import Card from '../../components/Card';
import SearchForm from '../../components/SearchForm';
import DropDown from '../../components/DropDown';


const paginationStyle = {
  backgroundColor: '#8346f6',
  borderColor: '#8346f6'
};
class TicketList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalPages: 1,
      selectedPage: 1,
      selectedStatus: '',
      data: [],
      status: [],
      type: [],
      error: ''
    };

    this.filterId = this.filterId.bind(this);
    this.filterStatus = this.filterStatus.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.resetError = this.resetError.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    getTickets()
      .then((json) => {
        this.setState({ data: json.data, isLoading: false, totalPages: json.totalPages });
      })
      .catch((error) => {
        this.setState({ error, isLoading: false })
      });

    getAllTicketStatus()
      .then((json) => this.setState({ status: json.data }))
      .catch(error => this.setState({ error, isLoading: false }));

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;

    this.setState({
      ticketId: value
    });
  }


  filterId(event) {
    event.preventDefault();
    this.setState({ isLoading: true });

    const ticketId = this.state.ticketId || '';

    findTicket(ticketId)
      .then(json => this.setState({ data: json.data, isLoading: false, totalPages: json.totalPages }))
      .catch(error => this.setState({ error, isLoading: false }));
  }


  filterStatus(event) {
    const target = event.target;
    const value = target.value;

    this.setState({ selectedStatus: value })

    getTickets(1, value)
      .then(json => this.setState({ 
        data: json.data, 
        isLoading: false, 
        totalPages: json.totalPages, 
        selectedPage: 1 }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  handleSelected(selectedPage) {
    this.setState({ isLoading: true })
    const selectedStatus = this.state.selectedStatus;
    getTickets(selectedPage, selectedStatus)
      .then((json) => {
        this.setState({ data: json.data, isLoading: false });
      })
      .catch((error) => {
        this.setState({ error, isLoading: false })
      });
  }

  resetError() {
    this.setState({error: ''});
  }

  render() {

    if (this.state.error) {
      return (
        <Card
          title="Error"
        >
          <p>{this.state.error.message}</p>
        </Card>
      )
    }

    let tickets = this.state.data;
    if (tickets) {
      tickets = tickets.map((ticket) => {
        return (
          <tr key={ticket.ticketId}>
            <th scope="row">
              <Link to={`/admin/ticket/${ticket.ticketId}`}>
                {ticket.ticketId}
              </Link>
            </th>
            <td>
              {formatStatus(ticket.status)}
            </td>
            <td>
              {formatStatus(ticket.type)}
            </td>
            <td>
              {ticket.subject}
            </td>
            <td>
              {formatDate(ticket.updatedAt)}
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
              onSubmit={this.filterId}
              onChange={this.handleInputChange}
              buttonName="Search"
            />

          </Col>
          <Col md={5}></Col>
          <Col md={3} className="float-right">
            <DropDown
              options={this.state.status}
              onChange={this.filterStatus}
            />


          </Col>
        </Row>
        <Row>
          <Col>
            <Table responsive>
              <thead>
                <tr>
                  <th>id</th>
                  <th>status</th>
                  <th>type</th>
                  <th>subject</th>
                  <th>updated</th>
                </tr>
              </thead>
              <tbody>
                {tickets || (
                  <tr>
                    <td
                      className="text-center font-weight-bold"
                      colspan="5"
                    >
                      no ticket
                    </td>
                  </tr>)}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <PaginationComponent
              style={paginationStyle}
              totalItems={this.state.totalPages}
              pageSize={1}
              onSelect={this.handleSelected}
            />
          </Col>
        </Row>
      </Card>
    );
  }
}

export default TicketList;