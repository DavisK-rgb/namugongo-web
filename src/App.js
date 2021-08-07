import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Academics from './components/Academics';
import Contacts from './components/Contacts';

function App() {
  return (
    <>
    
      <Router>
        <Navbar />
        
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Academics' component={Academics} />
          
        </Switch>
        

        <Contacts/>
      </Router>
      
    </>
  );
}

export default App;
