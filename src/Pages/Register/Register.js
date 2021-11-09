import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Register.css";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import Nevigation from "../Seard/Nevigation/Navigation";
import Useauth from "../../Hook/Useauth";

const Register = () => {
  const { createaccount } = Useauth();
  const [user, setuser] = useState({});

  const getinputvalue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const restuser = { ...user };
    restuser[name] = value;
    setuser(restuser);
  };

  const handelsubmit = (e) => {
    const { firstName, lastName } = user;
    const name = { firstName, lastName };
    createaccount(user.email, user.password, name);
    e.preventDefault();
  };
  return (
    <>
      <Nevigation />
      <div className="form-parent">
        <form onSubmit={handelsubmit} className="from">
          <h2 style={{ marginTop: "-25px", marginBottom: "35px" }}>
            Create an account
          </h2>
          <TextField
            sx={{ width: "100%", mb: 3 }}
            id="standard-basic"
            variant="standard"
            name="firstName"
            onBlur={getinputvalue}
            label="First Name"
          />
          <br />
          <TextField
            sx={{ width: "100%", mb: 3 }}
            id="standard-basic"
            label="Last Name"
            variant="standard"
            name="lastName"
            onBlur={getinputvalue}
          />
          <br />
          <TextField
            sx={{ width: "100%", mb: 3 }}
            id="standard-basic"
            label="User Email"
            variant="standard"
            name="email"
            onBlur={getinputvalue}
          />
          <br />
          <TextField
            sx={{ width: "100%", mb: 3 }}
            id="standard-basic"
            label="Password"
            variant="standard"
            name="password"
            onBlur={getinputvalue}
          />
          <br />
          <TextField
            sx={{ width: "100%" }}
            id="standard-basic"
            label="Confirm Password"
            variant="standard"
            name="confirm password"
            onBlur={getinputvalue}
          />
          <br />
          <button type="submit" className="form-button">
            Create an account
          </button>
          <Typography sx={{ textAlign: "center", mt: 4 }} variant="body2">
            Already have an account?{" "}
            <NavLink to="/login" style={{ color: "#f63e7b" }}>
              Login
            </NavLink>
          </Typography>
        </form>
      </div>
    </>
  );
};

export default Register;
