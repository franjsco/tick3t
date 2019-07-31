import React from 'react';
import { connect } from 'react-redux';

import { userActions } from './../_actions';
import Card from '../components/Card';


const Logout = (props) => {
  props.logout();

  return (
    <div>
      <Card
        title="Logout Success"
        footerLink={{ path: "/", name: "Go to home" }}
      >
        <p>You have been logged out successfully</p>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(userActions.logout()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Logout);