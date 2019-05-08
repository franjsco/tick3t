import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './containers/NavBar';
import Home from './containers/Home/Home';
import OpenTicket from './containers/OpenTicket/OpenTicket';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PageNotFound from './containers/PageNotFound';
import ViewRequest from './containers/ViewTicket/ViewTicket';
import { Container } from 'reactstrap';
import Login from './containers/Admin/Login';

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/open" component={OpenTicket} />
          <Route path="/ticket/:ticketId" component={ViewRequest} />
          <Route path="/ticket/" exact component={ () => <Redirect to="/" /> } />
          <Route path="/login" component={Login} />
          <Route component={PageNotFound} />
        </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
