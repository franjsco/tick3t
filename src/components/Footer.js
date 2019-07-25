import React, { Component } from 'react';
import {
  Row,
  Col
} from 'reactstrap';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Row className="row-centred">
        <Col>
          <p className="text-center">
            <a href="https://github.com/frab1t/tick3t">tick3t</a>{` `}
            by <a href="https://github.com/frsposito">@frsposito</a> (Francesco Esposito)
          </p>
        </Col>
      </Row>
    );
  }
}

export default Footer;