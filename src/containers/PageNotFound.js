import React from 'react';
import Card from '../components/Card';


const PageNotFound = (props) => {
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

export default PageNotFound;