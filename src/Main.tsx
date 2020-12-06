import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./components/containers/Users";

function Main() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
      </Switch>
    </Router>
  );
}

export default Main;
