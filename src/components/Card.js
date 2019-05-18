import React, { Component } from 'react';
import {
  Card as CardBootstrap,
  CardTitle,
  CardText,
  CardBody
} from 'reactstrap';

const style = {
  borderRadius: 10
};

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let bodyAlign;
    let headAlign;

    if (this.props.bodyAlign) {
      bodyAlign = `text-${this.props.bodyAlign}`;
    } 

    if (this.props.headAlign) {
      headAlign = `text-${this.props.headAlign}`;
    }

    return (
        <CardBootstrap 
          className={`${bodyAlign} shadow-sm p-3 mb-5 bg-white`} 
          style={style}
        >
          <CardBody>
            <CardTitle>
              <h4 className={headAlign}>
                {this.props.title}
              </h4>
            </CardTitle>
            <CardText>
              {this.props.subtitle}
            </CardText>
            <div>
              {this.props.children}
            </div>
          </CardBody>
        </CardBootstrap>
    );
  }
}

export default Card;