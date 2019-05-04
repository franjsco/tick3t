import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Card from '../../components/Card';
import SearchForm from '../../components/SearchForm';

import logoSVG from '../../assets/ticket.svg';
import Logo from '../../components/Logo';

const style={
  height: '150px',
  margin: '30px'
};

const LogoViewTicket = () => {
  return (
    <Logo
      style={style}
      src={logoSVG}
      alt="open ticket" />
  );
}

class ViewTicketCard extends Component {
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
    
    let Search = (
      <SearchForm
        name="search"
        id="search"
        placeholder="ticket ID"
        onChange={this.handleChangeInput}
        onSubmit={this.handleSubmit}
        value={this.state.ticketId}
        buttonName="View"
      />);

    return (
      <div>
        <Card
          align="center"
          title="View Ticket"
          message="View the ticket status"
          body={<LogoViewTicket />}
          footer={Search} />
      </div>
    );
  }
}

export default ViewTicketCard;