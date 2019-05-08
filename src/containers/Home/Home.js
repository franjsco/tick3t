import React, { Component } from 'react';
import {
  Row,
  Col
} from 'reactstrap';

import OpenTicketCard from './OpenTicketCard';
import ViewTicketCard from './ViewTicketCard';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
          <Row>
            <Col  sm="12" md="6">
              <OpenTicketCard />
            </Col>
            <Col  sm="12" md="6">
              <ViewTicketCard />
            </Col>
          </Row>
    );
  }
}

export default Home;