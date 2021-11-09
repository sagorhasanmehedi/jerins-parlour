import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import Useauth from "../../Hook/Useauth";

const Privateroute = ({ children, ...rest }) => {
  const { user, isloding } = Useauth();

  if (isloding) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 15,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
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

export default Privateroute;
