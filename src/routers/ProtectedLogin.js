import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedLogin = ({ component: Component, ...rest }) => {
  const isLogin = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isLogin) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/dash-board",
              }}
            />
          );
        }
      }}
    />
  );
};
