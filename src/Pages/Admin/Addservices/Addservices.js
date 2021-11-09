import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Addservices = () => {
  return (
    <div
      style={{
        width: "600px",
        backgroundColor: "#fff",
        padding: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <TextField
          id="outlined-size-small"
          defaultValue="Enter Title"
          size="small"
        />
        <br />
        <TextField
          id="outlined-size-small"
          defaultValue="Images"
          size="small"
          sx={{ width: "100%", marginY: "20px" }}
        />
        <br />
        <TextField
          id="outlined-size-small"
          defaultValue="Description"
          size="small"
        />
        <br />
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Button variant="contained">Submit</Button>
        </Box>
      </Box>
    </div>
  );
};

export default Addservices;
