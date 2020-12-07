import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import Users from "./components/containers/Users";
import UserDetails from "./components/containers/Users/UserDetails";
import { AppRoutes } from "./config/routes";

function Main() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path={AppRoutes.ROOT} component={Users} />
          <Route exact path={AppRoutes.VIEW_USER} component={UserDetails} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default Main;
