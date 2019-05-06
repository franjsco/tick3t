import React, { Component } from 'react';

import Card from '../../components/Card';
import InsertForm from '../../components/InsertForm';
import MessageCard from '../MessageCard';


class OpenTicket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ticketId: '',
      ticketErr: '',
      firstName: '',
      lastName: '',
      email: '',
      type: '',
      subject: '',
      message: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { ticketId, ticketErr, ...rest } = this.state;

    if(!rest.firstName || !rest.lastName || !rest.email || !rest.message 
      || rest.type === '---' || !rest.subject ) {
        alert('Form is invalid');
        return;

      }

    fetch("http://localhost:3001/tickets", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rest)
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({
          ticketId:  json.id
        });
      })
      .catch((err) => {
        this.setState({
          ticketErr: err.message
      });
    });
  }

  render() {

    if (this.state.ticketId) {
      return (
        <MessageCard 
          title="Ticket Created"
          message={`Ticket ID: ${this.state.ticketId}`} />
      );
    } else if(this.state.ticketErr) {
      return (
        <MessageCard 
        title="Error"
        message={this.state.ticketErr} />
      );
    }


    return (
      <div>
        <Card
          align="left"
          title="Open Ticket"
          body={
            <InsertForm 
              handleInputChange={this.handleInputChange} 
              handleSubmit={this.handleSubmit}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              email={this.state.email}
              type={this.state.type}
              subject={this.state.subject}
              message={this.state.message}
            />
          }
        />

      </div>
    );
  }
}

export default OpenTicket;