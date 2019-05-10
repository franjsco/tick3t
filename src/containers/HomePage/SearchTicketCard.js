import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Card from '../../components/Card';
import SearchForm from '../../components/SearchForm';
import Logo from '../../components/Logo';

import logoSVG from '../../assets/ticket.svg';


const style = {
  height: '150px',
  margin: '30px'
};

class SearchTicketCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ticketId: '',
      submitted: false
    };

    // binding
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      submitted: true
    });
  }

  handleChangeInput(e) {
    this.setState({
      ticketId: e.target.value
    });
  }

  render() {
    if (this.state.submitted) {
      return (<Redirect to={`/ticket/${this.state.ticketId}`} />);
    }

    return (
      <Card
        headAlign="center"
        title="Search Ticket"
        subtitle="Search the ticket to view your status"
        bodyAlign="center"
      >
        <Logo
          style={style}
          src={logoSVG}
          alt="Search Ticket" 
        />

        <SearchForm
          name="search"
          id="search"
          placeholder="Insert ticket ID"
          onChange={this.handleChangeInput}
          onSubmit={this.handleSubmit}
          value={this.state.ticketId}
          buttonName="Search"
        />
      </Card>
    );
  }
}

export default SearchTicketCard;