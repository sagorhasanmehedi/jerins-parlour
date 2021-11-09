import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import logo from "../../../Image_Icon/Group 33092.png";
import { NavLink } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Orderlist from "../Orderlist/Orderlist";
import Makeadmin from "../Makeadmin/Makeadmin";
import Addservices from "../Addservices/Addservices";
import Useauth from "../../../Hook/Useauth";
import Adminroute from "../../Privateroute/Adminroute";

const drawerWidth = 200;

const Admin = () => {
  const { isadmin, user } = Useauth();
  console.log(isadmin);
  let { path, url } = useRouteMatch();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: 0,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <img
            style={{ width: "8%", marginLeft: "11px" }}
            src={logo}
            alt=""
            srcset=""
          />{" "}
          <Typography
            sx={{ color: "black" }}
            variant="h6"
            noWrap
            component="div"
          >
            {user.email}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            border: 0,
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <br />
          <List sx={{ paddingLeft: "30px" }}>
            <NavLink
              style={{
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "17px",
                color: "black",
              }}
              to={`${url}`}
            >
              Order List
            </NavLink>
            <br />
            {isadmin && (
              <NavLink
                style={{
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "17px",
                  color: "black",
                }}
                to={`${url}/addservices`}
              >
                Add Services
              </NavLink>
            )}
            <br />
            {isadmin && (
              <NavLink
                style={{
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "17px",
                  color: "black",
                }}
                to={`${url}/makeadmin`}
              >
                Make Admin
              </NavLink>
            )}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "#f4f7fc", height: "100vh" }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <Orderlist />
          </Route>
          <Adminroute path={`${path}/makeadmin`}>
            <Makeadmin />
          </Adminroute>
          <Adminroute path={`${path}/addservices`}>
            <Addservices />
          </Adminroute>
        </Switch>
      </Box>
    </Box>
  );
};

export default Admin;
