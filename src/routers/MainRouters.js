import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SingnInPage from "../containers/SignInPage/SignInPage";
import SingnUpPage from "../containers/SignUpPage/SignUpPage";
import DashBoard from "../containers/DashBoard/DashBoard";

function MainRouters() {
  return (
    <>
      <Router>
        <Switch>
          {/* ========================================= */}
          <Route path="/dash-board">
            <DashBoard />
          </Route>

          <Route exact path="/sign-up">
            <SingnUpPage />
          </Route>

          <Route exact path="/">
            <SingnInPage />
          </Route>

          {/* ========================================= */}
        </Switch>
      </Router>
    </>
  );
}

export default MainRouters;
