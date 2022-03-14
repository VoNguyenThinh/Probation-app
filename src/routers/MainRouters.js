import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SingnInPage from "../containers/SignInPage/SignInPage";
import SingnUpPage from "../containers/SignUpPage/SignUpPage";
import DashBoard from "../containers/DashBoard/DashBoard";
import TableContent from "../utils/Table/Table";
import UserProfile from "../utils/UserProfile/UserProfile";
import CreateUser from "../utils/CreateUsers/CreateUser";

function MainRouters() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact component={SingnUpPage} path="/sign-up" />

          <Route exact component={SingnInPage} path="/" />

          <DashBoard>
            <Route component={TableContent} exact path="/dash-board" />

            <Route component={CreateUser} exact path="/create-user" />

            <Route component={UserProfile} exact path="/view-detail/:id" />
          </DashBoard>
        </Switch>
      </Router>
    </>
  );
}

export default MainRouters;
