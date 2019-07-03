import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

class PageNotFound extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Card 
          title="404 - Page not found"
        >
          <p>The page is not found</p>
          <Link to="/">Back to home</Link>
        </Card>
      </div>
    );
  }
}

export default PageNotFound;