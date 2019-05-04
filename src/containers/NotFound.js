import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

class NotFound extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Card 
          title="404 - Page not found"
          message="The page is not found."
          footer={<Link to="/">Go to home</Link>}
          />
      </div>
    );
  }
}

export default NotFound;