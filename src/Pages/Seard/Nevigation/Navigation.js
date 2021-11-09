import React from "react";
import "./Nevigation.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../../Image_Icon/Group 33092.png";
import { Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import Useauth from "../../../Hook/Useauth";

const Navigation = () => {
  const { user, logout } = Useauth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img className="nevigation-logo" src={logo} alt="" srcset="" />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {user.email && (
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ flexGrow: 1, mr: 10 }}
                >
                  {user.displayName}
                </Typography>
              )}

              <Box>
                <img
                  style={{ width: "50%", borderRadius: "50%" }}
                  src={user.photoURL}
                  alt=""
                  srcset=""
                />
              </Box>
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/home"
              >
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  Home
                </Typography>
              </NavLink>

              {user.email && (
                <>
                  <NavLink
                    style={{ textDecoration: "none", color: "white" }}
                    to="/admin"
                  >
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ flexGrow: 1, mx: 4 }}
                    >
                      Dashbord
                    </Typography>
                  </NavLink>
                  <NavLink
                    style={{ textDecoration: "none", color: "white" }}
                    to="/myorder"
                  >
                    <Typography
                      variant="body1"
                      component="div"
                      sx={{ flexGrow: 1 }}
                    >
                      Myorder
                    </Typography>
                  </NavLink>
                </>
              )}

              {user.email ? (
                <button onClick={logout} className="red-button">
                  Log Out
                </button>
              ) : (
                <NavLink to="/login">
                  <button className="red-button">Login</button>
                </NavLink>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navigation;
