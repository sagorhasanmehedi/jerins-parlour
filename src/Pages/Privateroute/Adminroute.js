import React from "react";
import { Redirect, Route } from "react-router";
import Useauth from "../../Hook/Useauth";

const Adminroute = ({ children, ...rest }) => {
  const { user, isadmin } = Useauth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && isadmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Adminroute;
