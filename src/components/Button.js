import React, { Component } from 'react';
import {
  Button as ButtonBootstrap
} from 'reactstrap';

const style = {
  borderRadius: 20
};

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ButtonBootstrap
        onClick={this.props.onClick}
        tag={this.props.tag}
        to={this.props.to}
        color="primary"
        outline
        style={style}
      >
        {this.props.children}   
      </ButtonBootstrap>
      
    );
  }
}

export default Button;