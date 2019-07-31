import React from 'react';
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

const Card = (props) => {
  let bodyAlign;
  let headAlign;

  if (props.bodyAlign) {
    bodyAlign = `text-${props.bodyAlign}`;
  }

  if (props.headAlign) {
    headAlign = `text-${props.headAlign}`;
  }

  return (
    <CardBootstrap
      className={`${bodyAlign} shadow-sm p-3 mb-5 bg-white`}
      style={style}
    >
      <CardBody>
        <CardTitle className={styleCardTitle}>
          <h5 style={styleCardTitle} className={headAlign}>
            {props.title}
          </h5>
        </CardTitle>
        <CardText>
          {props.subtitle}
        </CardText>
        <div>
          {props.children}
        </div>
        {
          props.footerLink && (
            <div className={`text-${props.footerLink.align || 'center'}`}>
              <Link to={props.footerLink.path}>
                {props.footerLink.name}
              </Link>
            </div>)
        }

      </CardBody>
    </CardBootstrap>
  );
};

export default Card;