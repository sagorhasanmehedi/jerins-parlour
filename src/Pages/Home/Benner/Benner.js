import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import girl from "../../../Image_Icon/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";
import "./Benner.css";

const Benner = () => {
  return (
    <Box className="benner-parent" sx={{ flexGrow: 1 }}>
      <Container sx={{ py: 5 }}>
        <Grid sx={{ alignItems: "center" }} container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ fontWeight: "bold", color: "#111430" }}
              variant="h3"
              gutterBottom
              component="div"
            >
              BEAUTY SALON <br /> FOR EVERY WOMEN
            </Typography>
            <Typography sx={{ my: 3, color: "#666666" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
              Vero veniam voluptatum ullam, reiciendis eveniet <br />
              similique beatae sint tenetur ex. Minus sunt,!
            </Typography>
            <button className="benner-button">Get an Appointment</button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img className="benner-img" src={girl} alt="" srcset="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Benner;
