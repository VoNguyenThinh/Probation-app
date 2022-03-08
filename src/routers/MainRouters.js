import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          <Route exact path="/sign-up">
            <SingnUpPage />
          </Route>

          <Route exact path="/">
            <SingnInPage />
          </Route>
          <DashBoard>
            <Switch>
              <Route path="/dash-board">
                <TableContent />
              </Route>

              <Route path="/create-user">
                <CreateUser />
              </Route>

              <Route path="/view-detail/:id">
                <UserProfile />
              </Route>
            </Switch>
          </DashBoard>
          {/* ========================================= */}
        </Switch>
      </Router>
    </>
  );
}

export default MainRouters;
