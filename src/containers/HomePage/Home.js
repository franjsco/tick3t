import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';

import CreateTicketCard from './CreateTicketCard';
import SearchTicketCard from './SearchTicketCard';

const Home = (props) => {
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

export default Home;