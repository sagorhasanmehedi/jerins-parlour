import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { Typography } from "@mui/material";
import google from "../../Image_Icon/Icon/Group 573.png";
import Nav from "../Seard/Nevigation/Navigation";
import "./Login.css";
import Useauth from "../../Hook/Useauth";

const Login = () => {
  const { googlelogin, passwordlogin } = Useauth();
  const [user, setuser] = useState({});

  const location = useLocation();
  const redirect_URL = location.state?.from || "/home";
  const history = useHistory();

  const handelinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const restdata = { ...user };
    restdata[name] = value;
    setuser(restdata);
  };

  const handelsubmit = (e) => {
    passwordlogin(user.email, user.password, history, redirect_URL);
    e.preventDefault();
  };

  return (
    <>
      <Nav />

      <div className="form-parent">
        <form onSubmit={handelsubmit} className="from">
          <h2 style={{ marginTop: "-25px", marginBottom: "35px" }}>Log In</h2>
          <TextField
            sx={{ width: "100%", mb: 3 }}
            id="standard-basic"
            label="Name"
            variant="standard"
          />
          <br />

          <TextField
            sx={{ width: "100%", mb: 3 }}
            id="standard-basic"
            label=" Email"
            variant="standard"
            name="email"
            onBlur={handelinput}
          />
          <br />
          <TextField
            sx={{ width: "100%", mb: 3 }}
            id="standard-basic"
            label="Password"
            variant="standard"
            name="password"
            onBlur={handelinput}
          />
          <br />

          <button className="form-button">Log In</button>
          <button
            onClick={() => googlelogin(history, redirect_URL)}
            className="coocle-button"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <img className="google-icon" src={google} alt="" srcset="" /> Log
              in with google
            </div>
          </button>
          <br />
          <Typography sx={{ textAlign: "center", mt: 4 }} variant="body2">
            Don't have an account?
            <NavLink to="/register" style={{ color: "#f63e7b" }}>
              Create an account
            </NavLink>
          </Typography>
        </form>
      </div>
    </>
  );
};

export default Login;
