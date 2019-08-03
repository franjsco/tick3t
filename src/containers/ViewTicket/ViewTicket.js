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
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;

    viewTicket(params.ticketId)
      .then(json => this.setState({ data: json.data}))
      .catch(error => this.setState({ error}));
  }

  render() {
    const { data, error } = this.state;

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