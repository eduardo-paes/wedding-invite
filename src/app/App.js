import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Folheto, Login, Control, Convite } from "../pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/folheto" exact component={Folheto} />
        <Route path="/login" exact component={Login} />
        <Route path="/control" exact component={Control} />
        <Route path="/" component={Convite} />
      </Switch>
    </Router>
  );
}

export default App;
