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

    this.API_URL= process.env.REACT_APP_API_URL;
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    const { match: { params } } = this.props;

    fetch(`${this.API_URL}tickets?id=${params.ticketId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error API');
        }

        return response.json();
      })
      .then(json => {

        if (!json.length) {
          throw new Error('Ticket Not found');
        } 

        this.setState({ 
          data: json[0], 
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