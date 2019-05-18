import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';
import Logo from '../../components/Logo';
import Button from '../../components/Button';

import logoSVG from '../../assets/assistance.svg';

const style = {
  height: '160px',
  margin: '30px'
};

class CreateTicketCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card
        headAlign="center"
        title="Create Ticket"
        subtitle="Create a new ticket"
        bodyAlign="center"
      >
        <Logo
          style={style}
          src={logoSVG}
          alt="Create Ticket" 
        />

        <Button
          tag={Link}
          to="/create"
        >
          Create Ticket
        </Button>
      </Card>
    );
  }
}

export default CreateTicketCard;