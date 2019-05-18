import React from 'react';
import { Container } from 'reactstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './Routes';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Routes>
        <NavBar />
        
        <Container>
          <Footer />
        </Container>
       
      </Routes>
    </div>
  );
}

export default App;
