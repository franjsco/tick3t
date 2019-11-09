import React from 'react';
import {
  Button as ButtonBootstrap
} from 'reactstrap';

const style = {
  borderRadius: 8,
  backgroundImage: 'linear-gradient(to left, #0eaed3, #8346f6)',
};

const Button = (props) => {
  return (
    <ButtonBootstrap
    onClick={props.onClick}
    tag={props.tag}
    to={props.to}
    style={style}
  >
    {props.children}
  </ButtonBootstrap>
  )
}

export default Button;