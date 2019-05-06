import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';

class MessageCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Card
          title={this.props.title}
          message={this.props.message}
          footer={<Link to="/">Go to home</Link>} />
      </div>
    );
  }


}

export default MessageCard;