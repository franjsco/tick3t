import React from "react";
import { Redirect, Route } from "react-router-dom";

import { isLogin } from "./utils/auth";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLogin() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
