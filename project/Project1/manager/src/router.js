import React from "react";
import { Router, Route, Switch, Redirect } from "dva/router";
import Login from "./views/login/login";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
