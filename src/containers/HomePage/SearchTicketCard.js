import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Card from '../../components/UI/Card';
import SearchForm from '../../components/SearchForm';
import Logo from '../../components/UI/Logo';
import logoSearchTicket from '../../assets/search_ticket.svg';


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
    
    if (!this.state.ticketId) return null;
    
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
          src={logoSearchTicket}
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