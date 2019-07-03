import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { config } from '../../config';

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

    fetch(`${config.baseURL}tickets/${params.ticketId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error API');
        }

        return response.json();
      })
      .then(json => {
        console.log()
        if (!json.success) {
          throw new Error('Ticket Not found');
        } 

        this.setState({ 
          data: json.data, 
          isLoading: false 
        })
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
        title="View Ticket"
        headAlign="left"
        bodyAlign="center"
      >
        <Table data={data} />
        <Link to="/">
          Go to home
        </Link>
      </Card>
    );
  }
}

export default ViewTicket;