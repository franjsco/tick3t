import React, { Component } from 'react';
import {
  Card as CardBootstrap,
  CardTitle,
  CardText,
  CardBody
} from 'reactstrap';


class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let textAlign = "";

    if (this.props.align) {
      textAlign = `text-${this.props.align}`;
    } 

    return (
      <div>
        <CardBootstrap className={`${textAlign} shadow-sm p-3 mb-5 bg-white rounded`} >
          <CardBody>
            <CardTitle>
              <h4>{this.props.title}</h4>
            </CardTitle>
            <CardText>
              {this.props.subtitle}
            </CardText>
            <div>
              {this.props.children}
            </div>
          </CardBody>
        </CardBootstrap>
      </div>
    );
  }
}

export default Card;