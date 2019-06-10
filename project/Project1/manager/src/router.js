import React from "react";
import { Router, Route, Switch } from "dva/router";
import Login from "./views/login/login";
import Homepage from "./views/homepage/Homepage";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/homepage" component={Homepage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
