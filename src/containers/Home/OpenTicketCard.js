import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import Card from '../../components/Card';
import Logo from '../../components/Logo';

import logoSVG from '../../assets/assistance.svg';

const style={
  height: '160px',
  margin: '30px'
};

const LogoOpenTicket = () => {
  return (
    <Logo
      style={style}
      src={logoSVG}
      alt="open ticket" />
  );
}
const ButtonPrimary = () => {
  return (
    <Button 
      tag={Link}
      to="/open"
      color="primary"
    >Open Ticket</Button>
  )
}

class OpenTicketCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    return (
      <div>
        <Card
          align="center"
          title="Open Ticket"
          message="Open new ticket"
          body={<LogoOpenTicket />} 
          footer={<ButtonPrimary />} />
      </div>
    );
  }
}

export default OpenTicketCard;