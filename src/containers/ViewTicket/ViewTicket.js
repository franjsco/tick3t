import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { viewTicket } from '../../api/tickets';

import Card from '../../components/Card';
import Table from '../../components/Table';

class ViewTicket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
      error: '',
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    const { match: { params } } = this.props;

    viewTicket(params.ticketId)
      .then((json) => this.setState({ data: json.data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { data, isLoading, error } = this.state;

    if (error) {
      return (
        <Card
          title="Error"
          footerLink={{ path: "/", name: "Back to home" }}
        >
          <p>{error.message}</p>
        </Card>
      )
    }

    if (isLoading) {
      return '' // add spinner
    }

    return (
      <Card
        title="View Ticket"
        headAlign="left"
        bodyAlign="center"
      >
        <Table data={data} />
        <Link to="/">
          Back to home
        </Link>
      </Card>
    );
  }
}

export default ViewTicket;