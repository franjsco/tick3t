import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';

const Footer = (props) => {
  return (
    <Row className="row-centred">
      <Col>
        <p className="text-center">
          <a href="https://github.com/frsposito/tick3t">tick3t</a>{` `}
          by <a href="https://github.com/frsposito">@frsposito</a> (Francesco Esposito)
        </p>
      </Col>
    </Row>
  );
}

export default Footer;