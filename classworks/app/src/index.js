import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history/history";
import SignupPage from "./components/signupPage/SignupPage";
import AuthPage from "./components/authPage/AuthPage";
import { HomePage } from "./components/homePage/HomePage";

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/home" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
