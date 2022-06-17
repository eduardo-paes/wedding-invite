import React from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Control from './pages/Control';
import Folheto from './pages/Folheto';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/folheto' exact component={Folheto} />
        <Route path='/login' exact component={Login} />
        <Route path='/control' exact component={Control} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
