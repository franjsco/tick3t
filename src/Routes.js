import React, { Component } from 'react';
import {
  Container
} from 'reactstrap';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './containers/HomePage/Home';
import CreateTicket from './containers/CreateTicket/CreateTicket';
import ViewRequest from './containers/ViewTicket/ViewTicket';
import PageNotFound from './containers/PageNotFound';
import Login from './containers/Administration/Login';
import TicketList from './containers/Administration/TicketList';
import TicketWork from './containers/Administration/TicketManager';


class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        {this.props.children}
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create" component={CreateTicket} />
            <Route path="/ticket/:ticketId" component={ViewRequest} />
            <Route path="/ticket/" exact component={() => <Redirect to="/" />} />
            <Route path="/login" component={Login} />
            <Route path="/admin/" exact component={() => <Redirect to="/admin/ticket" />} />
            <Route path="/admin/ticket" exact component={TicketList} />
            <Route path="/admin/ticket/:ticketId" component={TicketWork} />
            <Route component={PageNotFound} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default Routes;