import React, { Component } from 'react';
import {
  Card as CardBootstrap,
  CardTitle,
  CardText,
  CardBody
} from 'reactstrap';

import { Link } from 'react-router-dom';

const style = {
  borderRadius: 10
};

const styleCardTitle = {
  fontWeight: '600'
}

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
          <CardTitle className={styleCardTitle}>
            <h5 style={styleCardTitle} className={headAlign}>
              {this.props.title}
            </h5>
          </CardTitle>
          <CardText>
            {this.props.subtitle}
          </CardText>
          <div>
            {this.props.children}
          </div>
          {
            this.props.footerLink && (
              <div className={`text-${this.props.footerLink.align || 'center'}`}>
                <Link to={this.props.footerLink.path}>
                  {this.props.footerLink.name}
                </Link>
              </div>)
          }

        </CardBody>
      </CardBootstrap>
    );
  }
}

export default Card;