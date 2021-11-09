import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const Makeadmin = () => {
  const [email, setemail] = useState("");

  const handelemail = (e) => {
    setemail(e.target.value);
  };

  const handelsubmit = (e) => {
    // const roll = { "ADMIN" };
    fetch(
      `https://secret-journey-43006.herokuapp.com/admin/roll?email=${email}&roll=${roll}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        // body: JSON.stringify(roll),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));

    e.preventDefault();
  };
  return (
    <form
      onSubmit={handelsubmit}
      style={{
        width: "50%",
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "10px",
      }}
    >
      <Typography sx={{ mb: 3, fontWeight: 600 }}>Email</Typography>
      <TextField
        sx={{ width: "50%" }}
        id="outlined-size-small"
        placeholder="Email"
        size="small"
        onBlur={handelemail}
      />

      <Button type="submit" sx={{ ml: 3 }} variant="contained">
        {" "}
        Submit
      </Button>
    </form>
  );
};

export default Makeadmin;
