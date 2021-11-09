import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Countac.css";

const Contuc = () => {
  return (
    <div className="benner-parent">
      <Container sx={{ py: 10 }}>
        <Typography
          sx={{ fontWeight: 600, color: "#111430", textAlign: "center" }}
          variant="h4"
          gutterBottom
          component="div"
        >
          Let us handle your <br /> project,professionally
        </Typography>
        <Box sx={{ textAlign: "center", mt: 9 }}>
          <input
            className="cuntac-input"
            type="text"
            defaultValue="First Name"
          />
          <input
            className="cuntac-input"
            type="text"
            defaultValue="Last Name"
          />
        </Box>
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <input
            className="cuntac-input"
            type="text"
            defaultValue="Email Addres"
          />
          <input
            className="cuntac-input"
            type="text"
            defaultValue="Phone Number"
          />
        </Box>
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <input
            type="text"
            className="contauc-textaria"
            defaultValue="Your Message"
          />
        </Box>
        <Box sx={{ textAlign: "center", mt: 3 }}>
          {" "}
          <button className="benner-button">Send Message</button>
        </Box>
      </Container>
    </div>
  );
};

export default Contuc;
