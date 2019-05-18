import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './Routes';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="app">
      <Routes>
        <NavBar />
      </Routes>
    </div>
  );
}

export default App;
