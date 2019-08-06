import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';

const mainCredits = {
  fontSize: '14px',
  color: 'grey'
}

const othersCredits = {
  fontSize: '10px',
  color: 'grey'
}
const Footer = (props) => {
  return (
    <Row className="row-centred">
      <Col>
        <p style={mainCredits} className="text-center">
          <a href="https://github.com/frsposito/tick3t">tick3t</a>{` `}
          by <a href="https://github.com/frsposito">@frsposito</a> (Francesco Esposito)
        </p>
        
        <p style={othersCredits} className="text-center">
        Icon made by <a href="https://www.flaticon.com/authors/eucalyp">eucalyp</a> {` `}
         from <a href="https://www.flaticon.com/">flaticon.com</a>
        </p>
      </Col>
    </Row>
  );
}

export default Footer;