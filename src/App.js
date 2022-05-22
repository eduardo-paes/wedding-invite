import React from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Control from './pages/Control';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="main-root">
      <Router>
        <Switch>
          <Route path='/login' exact component={Login} />
          <Route path='/control' exact component={Control} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
