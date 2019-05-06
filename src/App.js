import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './containers/NavBar';
import Home from './containers/Home/Home';
import OpenTicket from './containers/OpenTicket/OpenTicket';
import CardTest from './components/Card';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PageNotFound from './containers/PageNotFound';
import ViewRequest from './containers/ViewTicket/ViewTicket';

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/open" component={OpenTicket} />
          <Route path="/ticket/:ticketId" component={ViewRequest} />
          <Route path="/ticket/" exact component={ () => <Redirect to="/" /> } />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
