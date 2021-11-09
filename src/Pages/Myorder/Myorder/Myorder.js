import React from "react";
import Book from "../Book/Book";
import Review from "../Review/Review";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
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

const drawerWidth = 200;

const Myorder = () => {
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
            Clipped drawer
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
          <List>
            <NavLink
              style={{
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "17px",
                color: "black",
                marginLeft: "64px",
              }}
              to={`${url}`}
            >
              Book
            </NavLink>
            <br />
            <NavLink
              style={{
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "17px",
                color: "black",
                marginLeft: "57px",
              }}
              to={`${url}/review`}
            >
              Review
            </NavLink>
            <br />
            <NavLink
              style={{
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "17px",
                color: "black",
                marginLeft: "41px",
              }}
              to={`${url}`}
            >
              Booking List
            </NavLink>
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
            <Book />
          </Route>
          <Route path={`${path}/review`}>
            <Review />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
};

export default Myorder;

// {
/* <List>
{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
  <ListItem button key={text}>
    <ListItemIcon>
      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
))}
</List>
<Divider />
<List>
{["All mail", "Trash", "Spam"].map((text, index) => (
  <ListItem button key={text}>
    <ListItemIcon>
      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
))}
</List> */
// }
