import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import Users from "./components/containers/Users";

function Main() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Users />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default Main;
