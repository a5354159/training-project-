import React from "react";
import { Router, Route, Switch, Redirect } from "dva/router";
import Homepage from "./views/homepage/Homepage";
import Login from "@/views/login/login";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
{/* <<<<<<< HEAD
        <Route exact path="/" component={Login} />
        <Route path="/homepage" component={Homepage} />
        
======= */}
        {/* <Redirect exact from="/" to="login" /> */}
        <Route path="/login" component={Login} />
        <Route path="/homepage" component={Homepage} />
{/* >>>>>>> 059a8b7e4527a2e4258bd5353c77311109a5acb7 */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
