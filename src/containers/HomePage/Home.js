import React, { Component } from 'react';
import {
  Row,
  Col
} from 'reactstrap';

import CreateTicketCard from './CreateTicketCard';
import SearchTicketCard from './SearchTicketCard';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row>
        <Col sm={12} md={6}>
          <CreateTicketCard />
        </Col>
        <Col sm={12} md={6}>
          <SearchTicketCard />
        </Col>
      </Row>
    );
  }
}

export default Home;