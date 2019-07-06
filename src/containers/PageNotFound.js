import React, { Component } from 'react';
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
          footerLink={{path:"/", name:"Back to home"}}
        >
          <p>The page is not found</p>
        </Card>
      </div>
    );
  }
}

export default PageNotFound;