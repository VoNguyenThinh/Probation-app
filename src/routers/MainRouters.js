import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ProtectedLogin } from "./ProtectedLogin";
import { ProtectedRoute } from "./ProtectedRoute";

import SingnInPage from "../containers/SignInPage/SignInPage";
import SingnUpPage from "../containers/SignUpPage/SignUpPage";
import DashBoard from "../containers/DashBoard/DashBoard";
import ListUser from "../containers/Users/ListUser/Table";
import CreateUser from "../containers/Users/CreateUsers/CreateUser";
import EditUser from "../containers/Users/EditUser/EditUser";

function MainRouters() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact component={SingnUpPage} path="/sign-up" />
          <ProtectedLogin exact component={SingnInPage} path="/" />

          <DashBoard>
            <ProtectedRoute exact component={ListUser} path="/dash-board" />

            <ProtectedRoute exact component={CreateUser} path="/create-user" />

            <ProtectedRoute
              exact
              component={EditUser}
              path="/view-detail/:id"
            />
          </DashBoard>
        </Switch>
      </Router>
    </>
  );
}

export default MainRouters;
