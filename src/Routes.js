import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Container } from "reactstrap";

import { PrivateRoute } from "./PrivateRoute";
import Home from "./containers/HomePage/Home";
import CreateTicket from "./containers/CreateTicket/CreateTicket";
import ViewRequest from "./containers/ViewTicket/ViewTicket";
import PageNotFound from "./containers/PageNotFound";
import Login from "./containers/Administration/Login";
import Logout from "./containers/Logout";
import TicketList from "./containers/Administration/TicketList";
import TicketManager from "./containers/Administration/TicketManager";
import Settings from './containers/Administration/Settings';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create" component={CreateTicket} />
            <Route path="/ticket/:ticketId" component={ViewRequest} />
            <Route
              path="/ticket/"
              exact
              component={() => <Redirect to="/" />}
            />
            <Route path="/login" component={Login} />

            <PrivateRoute path="/admin/" exact component={TicketList} />
            <PrivateRoute path="/admin/ticket/:ticketId" component={TicketManager} />
            <PrivateRoute path="/admin/settings" exact component={Settings} />

            <PrivateRoute path="/logout" component={Logout} />
            <Route component={PageNotFound} />
          </Switch>
        </Container>
        {this.props.children}
      </Router>
    );
  }
}

export default Routes;
