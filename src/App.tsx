import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Main } from "./containers";
import { Signup, Signin } from "./containers/auth";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route exact path="/signin">
          <Signin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
