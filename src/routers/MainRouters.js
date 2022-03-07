import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SingnInPage from "../containers/SignInPage/SignInPage";
import SingnUpPage from "../containers/SignUpPage/SignUpPage";
import DashBoard from "../containers/DashBoard/DashBoard";
import TableContent from "../utils/Table/Table";
import UserProfile from "../utils/UserProfile/UserProfile";

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
              <Route path="/list-users">
                <TableContent />
              </Route>
              <Route path="/create-user">
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
