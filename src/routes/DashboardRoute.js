import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Header } from "../components/Header";
import { AboutScreen } from "../components/pages/AboutScreen";
import { DossierScreen } from "../components/pages/DossierScreen";
import { HomeScreen } from "../components/pages/HomeScreen";

export const DashboardRoute = () => {
  return (
    <>
      <Header />
      <div className="appRouter__container">
        <Switch>
          <Route exact path="/home" component={HomeScreen} />
          <Route exact path="/trabajo" component={DossierScreen} />
          <Route exact path="/about" component={AboutScreen} />

          <Redirect to="/home" />
        </Switch>
      </div>
    </>
  );
};
