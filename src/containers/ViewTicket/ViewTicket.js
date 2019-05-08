import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';
import Table from '../../components/Table';

class ViewTicket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      error: '',
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    const { match: { params } } = this.props;

    fetch(`http://localhost:3001/tickets?id=${params.ticketId}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error API');
        }
      })
      .then(json => {
        if (json.length) {
          this.setState({ data: json[0], isLoading: false })
        } else {
          throw new Error('Ticket Not found');
        }
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { data, isLoading, error } = this.state;

    if (error) {
      return (
        <Card title="Error">
          <p>{error.message}</p>
        </Card>
      )
    }

    if (isLoading) {
      return '' // add spinner
    }

    return (
      <Card
        align="center"
        title="View Ticket"
      >
        <Table data={data} />
        <Link to="/">Go to home</Link>
      </Card>
    );
  }
}

export default ViewTicket;