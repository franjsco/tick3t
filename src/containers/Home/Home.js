import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

import OpenTicketCard from './OpenTicketCard';
import ViewTicketCard from './ViewTicketCard';

import './Home.css';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="col" xs="12" sm="6">
              <OpenTicketCard />
            </Col>
            <Col className="col" xs="12" sm="6">
              <ViewTicketCard />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;