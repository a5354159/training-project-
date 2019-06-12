import React from "react";
import { Router, Route, Switch, Redirect } from "dva/router";
import Homepage from "./views/homepage/Homepage";
import Login from "@/views/login/login";


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Homepage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
