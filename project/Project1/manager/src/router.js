import React from "react";
import { Router, Route, Switch } from "dva/router";
import Login from "./views/login/login";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
