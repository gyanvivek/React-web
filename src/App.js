import React from 'react';

import './App.css';

import LandingPage from './pages/LandingPage';
import Collaborator from './pages/Collaborator';
import { Route } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Navbar from './components/Navbar/Navbar';
import Contact from './pages/Contact';

function App() {
  return (
    <div >
      <Navbar />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/collaborator" component={Collaborator} />
      <Route exact path="/aboutus" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path='/contact'  component={Contact} />


    </div>
  );
}

export default App;
