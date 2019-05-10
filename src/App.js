import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Home from './containers/HomePage/Home';
import CreateTicket from './containers/CreateTicket/CreateTicket';
import ViewRequest from './containers/ViewTicket/ViewTicket';
import PageNotFound from './containers/PageNotFound';
import Login from './containers/Administration/Login';
import TicketList from './containers/Administration/TicketList';
import TicketWork from './containers/Administration/TicketManager';

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" component={CreateTicket} />
          <Route path="/ticket/:ticketId" component={ViewRequest} />
          <Route path="/ticket/" exact component={ () => <Redirect to="/" /> } />
          <Route path="/login" component={Login} />
          <Route path="/admin/" exact component={ () => <Redirect to="/admin/ticket" /> } />
          <Route path="/admin/ticket" exact component={TicketList} />
          <Route path="/admin/ticket/:ticketId" component={TicketWork} />
          <Route component={PageNotFound} />
        </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
