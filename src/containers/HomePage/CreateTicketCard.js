import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';
import Logo from '../../components/Logo';
import Button from '../../components/Button';

import logoCreateTicket from '../../assets/create_ticket.svg';

const style = {
  height: '160px',
  margin: '30px'
};

const CreateTicketCard = (props) => {
  return (
    <Card
      headAlign="center"
      title="Create Ticket"
      subtitle="Create a new ticket"
      bodyAlign="center" >
      <Logo
        style={style}
        src={logoCreateTicket}
        alt="Create Ticket" />
      <Button
        tag={Link}
        to="/create" >
        Create Ticket
      </Button>
    </Card>
  );
}


export default CreateTicketCard;