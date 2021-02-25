import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { LoginScreen } from "../components/pages/auth/LoginScreen";

import { DashboardRoute } from "./DashboardRoute";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/auth/login" component={LoginScreen} />
        <DashboardRoute />
      </Switch>
    </Router>
  );
};
