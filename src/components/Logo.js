import React, { Component } from 'react';


class Logo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <img
          style={this.props.style}
          src={this.props.src}
          alt={this.props.alt}></img>
      </div>
    );
  }
}

export default Logo;